import { createContext, useEffect, useState } from 'react';
import { getAuth, signOut, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import { app } from '../firebase/firebase.config';


export const Authcontext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const userCreateWithEmailpassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const singWithEmailpassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email)

    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const gprovider = new GoogleAuthProvider();
    const loginwithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, gprovider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false);
            }
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const authinfo = {
        singWithEmailpassword,
        userCreateWithEmailpassword,
        logOut,
        loginwithGoogle,
        user,
        loading,
        setLoading,
        forgotPassword
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;
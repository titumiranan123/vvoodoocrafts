import React, { createContext, useEffect, useState } from 'react';
import { getAuth, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { app } from '../../firebase/firebase.config';

export const Authcontext = createContext(null);
const auth = getAuth(app);

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const gprovider = new GoogleAuthProvider();

    const loginwithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, gprovider);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            } else {
                setUser(null);
                setLoading(false);
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authinfo = {
        logOut,
        loginwithGoogle,
        user,
        loading,
        setLoading,
    };

    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;

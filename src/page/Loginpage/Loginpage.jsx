import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate()
    const onSubmit = (data) => {


        fetch('http://localhost:3001/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse the JSON response
            })
            .then(parsedResponse => {
                // Handle the parsed response data
                console.log(parsedResponse);
                navigate('/')
                // Do something with the response data if needed
            })
            .catch(error => {

                console.error('There was a problem with the fetch request:', error);
            });
    };
    // const { signwithGoogle } = useContext()
    // const signWithGoogle = () => {
    //     signwithGoogle()
    //         .then(res => {
    //             console.log(res.result)
    //         })
    //         .then(err => {
    //             console.log(err)
    //         })
    // }
    return (
        <div className="flex justify-center items-center h-screen bg-[#4B4F58] bg-opacity-60">
            <form className="bg-white border shadow-xl shadow-slate-400 rounded px-12 pt-12 w-1/3 mx-auto pb-8 mb-4 flex justify-center flex-col" onSubmit={handleSubmit(onSubmit)}>


                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Invalid email address',
                            },
                        })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters',
                            },
                        })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                    {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                </div>


                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Log in
                    </button>
                </div>
            </form>
            {/* <button onClick={signWithGoogle}>Login With Google </button> */}
        </div>
    );
}

export default Login;

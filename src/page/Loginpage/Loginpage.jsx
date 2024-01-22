import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';

const Login = () => {
    const { loginwithGoogle } = useContext(Authcontext);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate()

    const onSubmit = (data) => {
        fetch('https://chamrabari.vercel.app/api/v1/login', {
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
                return response.json();
            })
            .then(parsedResponse => {
                // console.log(parsedResponse)
                localStorage.setItem('access_token', parsedResponse.token)
                if (parsedResponse.message === "Login Successfull") {

                    Swal.fire({
                        icon: 'success',
                        title: 'Login in Successfull',
                    })
                    dispatch(Login({ token: parsedResponse.token, user: parsedResponse.user }))
                    navigate('/')
                }

            })
            .catch(error => {
                console.error('There was a problem with the fetch request:', error);
                // if (error) {
                //     Swal.fire({
                //         icon: 'error',
                //         title: 'Oops...',
                //         text: 'Something went wrong!',

                //     })
                // }

            });
    };
    const loginWithgoogle = () => {
        loginwithGoogle()
            .then(res => {
                if (res) {
                    Swal.fire({
                        icon: 'success',
                        title: 'sing in successful',
                    })
                    navigate('/')
                }
            })
            .catch(err => {
                if (err) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                }
            })
    }
    return (
        <div className="flex flex-col justify-center items-center h-screen  bg-opacity-60">
            <div className=' border bg-[#c94428] bg-opacity-20 border-[#c94428]  rounded-xl shadow-xl  p-10'>
                <form className="  rounded  pt-12  mx-auto pb-8 mb-4 flex  flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block  text-sm font-bold mb-2" htmlFor="email">
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
                            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block  text-sm font-bold mb-2" htmlFor="password">
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
                            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                        />
                        {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                    </div>


                    <div className="flex flex-col gap-4 justify-start ">
                        <button
                            className="hover:bg-[#c94428] text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-[#c94428] bg-opacity-90  border border-[#c94428]"
                            type="submit"
                        >
                            Log in
                        </button>
                        <Link to={'/login'} className=' '>Don&apos;t have an account ? <span className='cursor-pointer hover:underline hover:text-[#c94428]'>Sing up for Free  </span></Link>
                        <Link to={'/forget_password'} className=' '><span className='cursor-pointer hover:underline hover:text-[#c94428]'>forget pasword</span></Link>
                    </div>
                </form>

                <div className='flex justify-center gap-5 items-center'>
                    <button onClick={loginWithgoogle} className='text-center btn  border border-[#c94428] hover:bg-[#c94428] hover:text-white' >Login With Google </button>
                    <Link to={'/singup'}><button className='text-center btn  border border-[#c94428] hover:bg-[#c94428] hover:text-white' >Register </button></Link>
                </div>
            </div>

        </div>
    );
}

export default Login;

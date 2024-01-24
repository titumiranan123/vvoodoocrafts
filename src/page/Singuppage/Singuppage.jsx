import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm();
    const { loginwithGoogle } = useContext(Authcontext);
    const navigate = useNavigate();

    const loginWithgoogle = () => {
        loginwithGoogle()
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'sing in successful',

                })
                console.log(res)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                if (err) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',

                    })
                }
            })
    }
    const onSubmit = (data) => {
        console.log(data)
        fetch('http://localhost:3001/api/v1/register', {
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
                Swal.fire({
                    icon: 'success',
                    title: 'signup in successful',

                })
                navigate('/login')
                console.log(parsedResponse);

            })
            .catch(error => {
                if (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',

                    })
                }
                console.error('There was a problem with the fetch request:', error);
            });
    };

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return (
        <div className="flex flex-col justify-center items-center h-screen  bg-opacity-60">
            <div className=' border bg-[#c94428] md:w-1/2 bg-opacity-20 border-[#c94428]  rounded-xl shadow-xl  p-10'>
                <form className="  rounded  pt-12  mx-auto pb-8 mb-4 flex  flex-col " onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block  text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            {...register('name', { required: 'Name is required' })}
                            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                        />
                        {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
                    </div>

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
                            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
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
                                pattern: {
                                    value: passwordRegex,
                                    message: 'Password must contain at least 1 uppercase, 1 lowercase, 1 symbol, and be at least 6 characters',
                                },
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

                    <div className="mb-6">
                        <label className="block  text-sm font-bold mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            {...register('confirmPassword', {
                                validate: (value) =>
                                    value === getValues('password') || 'The passwords do not match',
                            })}
                            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-4 justify-start  ">
                        <button
                            className="hover:bg-[#c94428] text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-[#c94428] bg-opacity-90  border border-[#c94428]"
                            type="submit"
                        >
                            Sign Up
                        </button>
                        <Link to={'/login'} className=' '>Already a user ? <span className='cursor-pointer hover:underline hover:text-[#c94428]'>Login</span></Link>
                    </div>
                </form>

                <div className='flex justify-center items-center'>
                    <button onClick={loginWithgoogle} className='text-center btn  border border-[#c94428] hover:bg-[#c94428] hover:text-white' >Login With Google </button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;

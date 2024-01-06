import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const { singWithEmailpassword, loginwithGoogle, } = useContext(Authcontext);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data);

        fetch('http://localhost:3001/user/register', {
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

                navigate('/login')
                console.log(parsedResponse);

            })
            .catch(error => {

                console.error('There was a problem with the fetch request:', error);
            });
    };
    const loginWithgoogle = () => {
        loginwithGoogle()
            .then(res => {
                toast('Success')
                console.log(res.user)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return (
        <div className="flex flex-col justify-center items-center h-screen  bg-opacity-60">
            <div className='bg-[#4B4F58]'>
                <form className="bg-white border shadow-xl shadow-slate-400 rounded px-12 pt-12  mx-auto pb-8 mb-4 flex justify-center flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            {...register('name', { required: 'Name is required' })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                        />
                        {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
                    </div>

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
                                pattern: {
                                    value: passwordRegex,
                                    message: 'Password must contain at least 1 uppercase, 1 lowercase, 1 symbol, and be at least 6 characters',
                                },
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


                </form>
                <div className='flex justify-center items-center '>
                    <button onClick={loginWithgoogle} className="btn">loginWithgoogle</button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;

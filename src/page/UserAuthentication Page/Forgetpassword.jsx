import { useContext } from "react";
import { Authcontext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import setTitle from "../../hook/setTitle";
const Forgetpassword = () => {
  setTitle("Chamrabari || Froget Password");
  const { forgotPassword } = useContext(Authcontext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    forgotPassword(email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Check Your Email",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-opacity-60">
      <div className="border bg-[#c94428] flex justify-center items-center w-1/3 mx-auto bg-opacity-20 border-[#c94428] rounded-xl shadow-xl p-10">
        <div>
          <svg
            className="w-24 h-24 mx-auto"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            ></path>
          </svg>
          <p className="text-black text-xl font-bold mt-2 text-center ">
            Forgot Password
          </p>
          <p className="text-black text-sm text-center mb-4">
            Enter your email and we&apos;ll send you a link to reset your
            password
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="text-black">
              Email :
            </label>
            <input
              className="border rounded-md p-2 mb-2 w-full"
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
            />
            <button
              className="bg-white text-[#c94428] px-4 py-2 rounded-md hover:bg-opacity-80"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;

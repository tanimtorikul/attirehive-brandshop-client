import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [loginError, setLoginError] = useState("");
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        e.target.reset;
        setSuccessMessage("Logged in successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        setLoginError("Invalid email or password. Please try again.");
      });
  };
  return (
    <>
      <div className="hero px-4 md:px-0 md:my-4">
        <div className="card w-full md:max-w-xl md:py-4 shadow-2xl">
          <form
            onSubmit={handleLogin}
            className="card-body w-full md:w-[560px] mx-auto"
          >
            <h2 className="text-4xl text-center font-semibold mb-[12px]">
              Login your account
            </h2>
            <p className="border border-[#E7E7E7] mb-[50px]"></p>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-semibold mb-2">
                  Email address
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input bg-[#F3F3F3] mb-2"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-semibold mb-2">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input bg-[#F3F3F3]"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-base"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-black hover:bg-green-600 text-white">
                Login
              </button>
            </div>
            <h2 className="text-center text-lg font-medium">
              Dont Have An Account?{" "}
              <Link to="/register">
                <span className="text-red-600">Register</span>
              </Link>{" "}
            </h2>
            {loginError && (
              <p className="text-red-500 font-medium text-center">
                {loginError}
              </p>
            )}
            {successMessage && (
              <p className="text-green-500 font-bold text-center">
                {successMessage}
              </p>
            )}
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </>
  );
};

export default Login;

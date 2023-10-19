import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="hero px-4 md:px-0 md:my-4">
        <div className="card w-full md:max-w-2xl md:py-6 shadow-2xl">
          <form
            onSubmit={handleRegister}
            className="card-body w-full md:w-[560px] mx-auto"
          >
            <h2 className="text-4xl text-center font-semibold mb-10 md:mb-[50px]">
              Register for an account
            </h2>
            <p className="border border-[#E7E7E7] mb-[50px]"></p>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-semibold mb-2">Full Name</span>
              </label>
              <input
                type="text"
                name="full_name"
                placeholder="Enter your full name"
                className="input bg-[#F3F3F3] mb-2"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-black text-white">
                Register
              </button>
            </div>
          </form>
          <h2 className="text-center text-lg font-medium">
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-red-600">Login</span>
            </Link>{" "}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Register;

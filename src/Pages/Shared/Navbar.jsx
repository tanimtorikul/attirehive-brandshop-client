import { Link, NavLink } from "react-router-dom";
import { FaUser, FaToggleOff, FaMagnifyingGlass } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // console.log(user);
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("User logged out successfully!");
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const navLinks = (
    <>
      <li className="text-lg text-white font-medium">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "white" : "",
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "green" : "black",
              textDecoration: isActive ? "underline" : "none",
              paddingBottom: isActive ? "1px " : "none",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      {user && (
        <>
          <li className="text-lg text-white font-medium">
            <NavLink
              to="/addproduct"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "white" : "",
                  fontWeight: isActive ? "medium" : "normal",
                  color: isActive ? "green" : "black",
                  textDecoration: isActive ? "underline" : "none",
                };
              }}
            >
              Add Product
            </NavLink>
          </li>
        </>
      )}
      <li className="text-lg text-white font-medium">
        <NavLink
          to="/cart"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "white" : "",
              fontWeight: isActive ? "medium" : "normal",
              color: isActive ? "green" : "black",
              textDecoration: isActive ? "underline" : "none",
            };
          }}
        >
          My Cart
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="text-[#292929] text-xl font-medium">AttireVibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-10 items-center">
          <a href="text-xl">
            {" "}
            <FaMagnifyingGlass></FaMagnifyingGlass>{" "}
          </a>{" "}
          <a className="text-xl" href="">
            {" "}
            <FaToggleOff></FaToggleOff>{" "}
          </a>
        </div>
        {user?.email ? (
          <div className="dropdown dropdown-end ml-10">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  mt-3  p-2 shadow bg-red-200 z-10 rounded-box w-52"
            >
              <li>
                <a>{user.displayName}</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="ml-10">
            <Link to="/login" className="text-xl">
              {" "}
              <FaUser></FaUser>{" "}
            </Link>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

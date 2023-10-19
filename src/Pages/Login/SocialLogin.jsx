import { useContext } from "react";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="py-4 rounded-lg">
      <h2 className="text-center mb-4">Continue with</h2>
      <div className="flex justify-center gap-4">
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
        >
          <FaGoogle className="mr-2" /> Google
        </button>
        <button className="flex items-center bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900">
          <FaGithub className="mr-2" /> GitHub
        </button>
        <button className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          <FaFacebook className="mr-2" /> Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

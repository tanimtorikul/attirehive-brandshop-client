import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="font-jost">
      <div className="max-w-[1800px] mx-auto">
        <Navbar />
      </div>
      <section className="bg-[#11C0B4] py-20 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold mb-4">404</h2>
          <h4 className="text-2xl font-semibold mb-3">
            Oops! That page can't be found
          </h4>
          <p className="text-lg mb-8">
            The page you are looking for may have been deleted.
          </p>
          <Link to="/" className="btn">
            Go to Home
          </Link>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;

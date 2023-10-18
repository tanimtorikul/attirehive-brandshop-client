import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

const ErrorPage = () => {
    return (
        <div>
            <div className="max-w-[1800px] mx-auto font-open-sans">
            <Navbar></Navbar>
            </div>
            404

            <div className="min-h-screen">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default ErrorPage;
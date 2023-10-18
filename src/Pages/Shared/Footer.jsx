import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-100  py-8 ">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="footer-section">
            <h2 className="text-2xl font-semibold mb-4">Social</h2>
            <ul className="list-none">
              <li>
                <a href="#" className="flex items-center gap-2">
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2">
                  <FaTwitter /> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2">
                  <FaInstagram /> Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <ul className="list-none p-0">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">attirevibe@email.com</a>
              </li>
              <li>
                <a href="#">Call us: +1 254 568-5479</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <ul className="list-none p-0">
              <li>
                <a href="#">Support Center</a>
              </li>
              <li>
                <a href="#">Copyright</a>
              </li>
              <li>
                <a href="#">Customer Support</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h2 className="text-2xl font-semibold mb-4">Customer Care</h2>
            <ul className="list-none p-0">
              <li>
                <a href="#">FAQ & Helps</a>
              </li>
              <li>
                <a href="">Shipping & Delivery</a>
              </li>
              <li>
                <a href="">Return & Exchanges</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h2 className="text-2xl font-semibold mb-4">Our Information</h2>
            <ul className="list-none p-0">
              <li>
                <a href="#">Privacy policy update</a>
              </li>
              <li>
                <a href="">Terms & conditions</a>
              </li>
              <li>
                <a href="">Return Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h2 className="text-2xl font-semibold mb-4">Top Categories</h2>
            <ul className="list-none p-0">
              <li>
                <a href="#">Mens Wear</a>
              </li>
              <li>
                <a href="#">Kids Wear</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="container mx-auto flex justify-between  items-center">
        <div className="mb-4">&copy; 2023 AttireVibe</div>
        <div className="flex">
          <img src="visa.svg" alt="Visa" className="mr-2" />
          <img src="mastercard.svg" alt="MasterCard" className="mr-2" />
          <img src="skrill.svg" alt="PayPal" className="mr-2" />
          <img
            src="paypal.svg"
            alt="American Express"
            className="mr-2 w-14 h-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Brands from "../../components/Brands/Brands";
import Products from "../../components/Products/Products";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="border-4">
      <Banner></Banner>
      <Brands></Brands>
      <Products></Products>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;

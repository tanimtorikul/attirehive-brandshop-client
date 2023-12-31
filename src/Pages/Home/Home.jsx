import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Brands from "../../components/Brands/Brands";
import Products from "../../components/Products/Products";
// import Testimonial from "../../components/Testimonial/Testimonial";
import DiscountBanner from "../../components/DiscountBanner/DiscountBanner";

const Home = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <Products></Products>
      <DiscountBanner></DiscountBanner>
    </div>
  );
};

export default Home;

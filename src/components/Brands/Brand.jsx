import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";

const Brand = () => {
  const { brand } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://attire-hive-server.vercel.app/product")
      .then((res) => res.json())
      .then((data) => {
        const brandProducts = data.filter((product) => product.brand === brand);
        setProducts(brandProducts);
        setLoading(false);
      });
  }, [brand]);

  return (
    <div className="text-center">
      <div className="swiper-container md:px-12 p-4">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="md:w-1/2 mx-auto min-h-[300px]  flex justify-evenly items-center bg-red-300 rounded md:px-12">
              <div className="flex-1">
                <h2 className="md:text-6xl text-3xl font-bold mb-3 text-center">
                  Upto 40% off on Shirts, Jeans and More
                </h2>
              </div>
              <div className="flex-1">
                <img src="/slider1.png" alt="" className="backdrop-blur-md" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:w-1/2 mx-auto min-h-[300px]  flex justify-evenly items-center  rounded md:px-12">
              <div className="flex-1">
                <h2 className="md:text-7xl text-3xl font-bold mb-3 text-center">
                  Summer Special!
                </h2>
                <p className="mb-3 text-center">
                  Get ready for the hottest summer trends.
                </p>
                <button className="bg-black text-white px-4 md:px-8 py-3 rounded">
                  <div className="flex items-center gap-4">
                    Shop Now <FaArrowRightLong></FaArrowRightLong>
                  </div>
                </button>
              </div>
              <div className="flex-1">
                <img src="/slider2.png" alt="" className="backdrop-blur-md" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {loading ? (
          <span className="loading loading-dots loading-lg"></span>
        ) : products.length === 0 ? (
          <p className="text-3xl text-red-500">
            No products available for this brand.
          </p>
        ) : (
          products.map((product) => (
            <div
            key={product._id}
            className="relative mx-auto flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
          >
            <a
              className="relative mx-3 mt-3 flex justify-center h-60 overflow-hidden rounded-xl"
              href="#"
            >
              <img className="object-cover" src={product.image} />
            </a>
            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="text-xl tracking-tight text-slate-900">
                  {product.name}
                </h5>
              </a>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900">
                    ${product.price}
                  </span>
                </p>
                <div className="flex items-center">
                  <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                    {product.rating}
                  </span>
                </div>
              </div>
             <div className="flex justify-between">
             <Link
                to={`/productdetail/${product._id}`}
                href="#"
                className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12" y2="8" />
                </svg>
                Details
              </Link>
             <Link
                to={`/updateProduct/${product._id}`}
                href="#"
                className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12" y2="8" />
                </svg>
                Update
              </Link>
             </div>
            </div>
          </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Brand;

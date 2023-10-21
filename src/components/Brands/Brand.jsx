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
    fetch("http://localhost:5000/product")
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
            <div className="md:w-1/2 mx-auto min-h-[500px]  flex justify-evenly items-center bg-red-300 rounded md:px-12">
              <div className="flex-1">
                <h2 className="md:text-7xl text-3xl font-bold mb-3 text-center">
                  Amazing Deals Await You!
                </h2>
                <p className="mb-3 text-center">
                  Explore our latest discounts and offers.
                </p>
                <button className="bg-black text-white px-4 md:px-8 py-3 rounded">
                  <div className="flex items-center gap-4">
                    Shop Now <FaArrowRightLong></FaArrowRightLong>
                  </div>
                </button>
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

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
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
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 "
            >
              
              <div className="relative flex justify-center overflow-hidden rounded-lg">
                <img src={product.image} className="object-cover w-1/2 h-1/2" />
              </div>
              <h3 className="text-xl font-semibold mt-3">{product.name}</h3>
              <p className="text-gray-500 font-medium mt-1">${product.price}</p>
              <div className="flex items-center mt-2">
                <p className="text-gray-600 mr-2">Rating:</p>
                <span className="text-yellow-500">
                  {product.rating} <i className="fas fa-star"></i>
                </span>
              </div>
              <div className="mt-4 flex justify-between">
                <Link to={`/productdetail/${product._id}`}>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none">
                    Details
                  </button>
                </Link>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none">
                  Update
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Brand;

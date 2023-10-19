import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Banner.css";

import { FaArrowRightLong } from "react-icons/fa6";
const Banner = () => {
  return (
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
          <div className="w-full min-h-[300px] md:min-h-[680px] flex justify-around items-center bg-[#83F0F2] rounded">
            <div className="flex-1">
              <h2 className="md:text-5xl text-3xl font-bold mb-3">
                Enjoy This Summer Trends
              </h2>
              <p className="mb-3">Discover our latest collection</p>
              <button className="bg-black text-white px-4 md:px-8 py-3 rounded">
                <div className="flex items-center gap-4">
                  Shop Now <FaArrowRightLong></FaArrowRightLong>
                </div>
              </button>
            </div>
            <div className="flex-1">
              <img src="/slider1.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full min-h-[300px] md:min-h-[680px]  flex justify-around items-center bg-blue-300 rounded
          "
          >
            <div className="flex-1">
              <img src="/slider2.png" alt="" />
            </div>
            <div
              className="flex-1"
              data-aos="zoom-in-down"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="2000"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-3">
                Enjoy This Summer Trends
              </h2>
              <p className="mb-3">Discover our latest collection</p>
              <button className="bg-black text-white px-4 md:px-8 py-3 rounded">
                <div className="flex items-center gap-4">
                  Shop Now <FaArrowRightLong></FaArrowRightLong>
                </div>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full min-h-[300px] md:min-h-[680px]  flex justify-around items-center bg-[#E6E6E6] rounded"
            data-aos="zoom-in-down"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="2000"
          >
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-3">
                Enjoy This Summer Trends
              </h2>
              <p className="mb-3">Discover our latest collection</p>
              <button className="bg-black text-white px-4 md:px-8 py-3 rounded">
                <div className="flex items-center gap-4">
                  Shop Now <FaArrowRightLong></FaArrowRightLong>
                </div>
              </button>
            </div>
            <div className="flex-1">
              <img src="/slider3.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

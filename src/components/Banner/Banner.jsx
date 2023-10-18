import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="swiper-container mx-12 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
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
          <div className="w-full min-h-[800px] flex justify-around items-center bg-[#83F0F2] rounded">
            <div className="flex-1">
              <h2 className="text-5xl font-bold">Enjoy This Summer Trends</h2>
              <p>Discover our latest collection</p>
              <button>Shop Now</button>
            </div>
            <div className="flex-1">
              <img src="/slider1.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-[800px] flex justify-around items-center bg-[#83F0F2] rounded">
            <div className="flex-1">
              <h2 className="text-5xl font-bold">Enjoy This Summer Trends</h2>
              <p>Discover our latest collection</p>
              <button>Shop Now</button>
            </div>
            <div className="flex-1">
              <img src="/slider1.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full min-h-[800px] flex justify-around items-center bg-[#83F0F2] rounded">
            <div className="flex-1">
              <h2 className="text-5xl font-bold">Enjoy This Summer Trends</h2>
              <p>Discover our latest collection</p>
              <button>Shop Now</button>
            </div>
            <div className="flex-1">
              <img src="/slider1.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

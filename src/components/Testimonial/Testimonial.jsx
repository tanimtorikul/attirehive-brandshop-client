import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Testimonial.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

const Testimonial = () => {
  const [customerReviews, setCustomerReviews] = useState([]);

  useEffect(() => {
    // Fetch testimonials from a JSON file
    fetch("testimonial.json")
      .then((response) => response.json())
      .then((data) => setCustomerReviews(data))
      .catch((error) => console.error("Error fetching testimonials: ", error));
  }, []);

  const swiperConfig = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 200,
      modifier: 1,
    },
    pagination: true,
    modules: [EffectCoverflow, Pagination],
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Our Customer Reviews
        </h2>
        <div className="border-b-2 w-16 border-gray-800 mx-auto mt-2"></div>
      </div>
      <Swiper {...swiperConfig} className="mySwiper">
        {customerReviews.map((customer, index) => (
          <SwiperSlide
            style={{ width: "100%", maxWidth: "650px", height: "400px" }}
            key={index}
          >
            <div
              className={`testimonial-card ${customer.bgColor} flex flex-col items-center text-center p-4`}
            >
              <div className="customer-image border rounded-full overflow-hidden w-32 h-32 mb-4">
                <img
                  src={customer.image}
                  alt={customer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="customer-text">
                <p className="customer-review text-lg font-normal mb-2">
                  {customer.comment}
                </p>
                <p className="customer-name text-xl font-bold">{customer.name}</p>
                <p className="customer-rating text-lg font-normal">
                  Rating: {customer.rating}
                </p>
                <p className="customer-location text-lg font-normal">
                  Location: {customer.location}
                </p>
                <p className="customer-email text-lg font-normal">
                  Email: {customer.email}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;

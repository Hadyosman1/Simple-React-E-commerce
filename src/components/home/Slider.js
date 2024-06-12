import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="shadow">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
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
          <div style={{ height: "calc(100svh - 55px)" }} className=" ">
            <img
              style={{ objectFit: "cover" }}
              src="./assets/pic1.jpg"
              className="d-block h-100 w-100"
              alt="products"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "calc(100svh - 55px)" }} className="">
            <img
              style={{ objectFit: "cover" }}
              src="./assets/pic2.jpg"
              className="d-block h-100 w-100"
              alt="products"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "calc(100svh - 55px)" }} className=" ">
            <img
              style={{ objectFit: "cover" }}
              src="./assets/pic3.jpg"
              className="d-block h-100 w-100"
              alt="products"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "calc(100svh - 55px)" }} className=" ">
            <img
              style={{ objectFit: "cover" }}
              src="./assets/pic4.jpg"
              className="d-block h-100 w-100"
              alt="products"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "calc(100svh - 55px)" }} className=" ">
            <img
              style={{ objectFit: "cover" }}
              src="./assets/pic5.jpg"
              className="d-block h-100 w-100"
              alt="products"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default React.memo(Slider);

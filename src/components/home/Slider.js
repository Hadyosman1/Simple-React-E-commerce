// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const images = [
  { src: "./assets/pic1.webp", alt: "Product 1" },
  { src: "./assets/pic3.webp", alt: "Product 2" },
  { src: "./assets/pic9.webp", alt: "Product 3" },
];

const Slider = () => {
  return (
    <div className="shadow">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        navigation={true}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 2500 }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              style={{ height: "calc(100svh - 50px)" }}
              className="slider-item "
            >
              <img
                style={{ objectFit: "cover" }}
                src={image.src}
                className="h-100 w-100"
                alt={image.alt}
                fetchPriority="high"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <div className="shadow">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        // centeredSlides={true}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <div style={{ height: "calc(100svh - 55px)" }} className=" ">
            <img
              loading="lazy"
              style={{ objectFit: "cover" }}
              src="./pic1.jpg"
              className="d-block h-100 w-100"
              alt="products"
            />
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div style={{ height: "calc(100svh - 55px)" }} className="">
            <img
              loading="lazy"
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
              loading="lazy"
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
              loading="lazy"
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
              loading="lazy"
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
}

// import useScrollToTop from "../../hooks/useScrollToTop";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/css";
// import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

// export default function Slider() {
//   useScrollToTop();
//   return (
//     <>

//       <Swiper
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         spaceBetween={0}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         // scrollbar={{ draggable: true }}
//       >

//         {/* <SwiperSlide>Slide 4</SwiperSlide> */}
//       </Swiper>
//       {/* <div>
//         <div
//           style={{ minHeight: "250px" }}
//           id="carouselExampleIndicators"
//           className="carousel slide"
//         >
//           <div className="carousel-indicators">
//             <button
//               type="button"
//               data-bs-target="#carouselExampleIndicators"
//               data-bs-slide-to="0"
//               className="active"
//               aria-current="true"
//               aria-label="Slide 1"
//             ></button>
//             <button
//               type="button"
//               data-bs-target="#carouselExampleIndicators"
//               data-bs-slide-to="1"
//               aria-label="Slide 2"
//             ></button>
//             <button
//               type="button"
//               data-bs-target="#carouselExampleIndicators"
//               data-bs-slide-to="2"
//               aria-label="Slide 3"
//             ></button>
//           </div>
//           <div className="carousel-inner">
//             <div style={{ height: "95svh" }} className="carousel-item active">
//               <img
//                 style={{ objectFit: "cover" }}
//                 src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg"
//                 className="d-block h-100 w-100"
//                 alt="products"
//               />
//             </div>
//             <div style={{ height: "95svh" }} className="carousel-item">
//               <img
//                 style={{ objectFit: "cover" }}
//                 src="https://wallpapers.com/images/hd/e-commerce-1900-x-1118-wallpaper-r2k1ldol65vss423.jpg"
//                 className="d-block h-100 w-100"
//                 alt="products"
//               />
//             </div>
//             <div style={{ height: "95svh" }} className="carousel-item">
//               <img
//                 style={{ objectFit: "cover" }}
//                 src="https://dataoptin.com/wp-content/uploads/2022/09/the-importance-of-e-commerce-in-your-organization.png"
//                 className="d-block h-100 w-100"
//                 alt="products"
//               />
//             </div>
//           </div>
//           <button
//             className="carousel-control-prev "
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide="prev"
//           >
//             <span
//               className="carousel-control-prev-icon text-dark"
//               aria-hidden="true"
//             ></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button
//             className="carousel-control-next "
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide="next"
//           >
//             <span
//               className="carousel-control-next-icon "
//               aria-hidden="true"
//             ></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div> */}
//     </>
//   );
// }

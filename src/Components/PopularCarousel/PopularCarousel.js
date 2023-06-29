// import React, { useContext, useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./PopularCarousel";

// // import required modules
// import { Pagination } from "swiper";
// import { Context } from "../..";
// import ProductCard from "../ProductCard/ProductCard";

// function PopularCarousel() {
//   const {product} = useContext(Context)

//   return (
//     <>
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//        {product.products.map(product => 
//             <SwiperSlide><ProductCard 
//             key={product.id} 
//             product={product}/></SwiperSlide>)}
//         {/* <SwiperSlide>1</SwiperSlide>
//         <SwiperSlide>2</SwiperSlide>
//         <SwiperSlide>3</SwiperSlide>
//         <SwiperSlide>4</SwiperSlide>
//         <SwiperSlide>5</SwiperSlide>
//         <SwiperSlide>6</SwiperSlide>
//         <SwiperSlide>7</SwiperSlide>
//         <SwiperSlide>8</SwiperSlide> */}
//       </Swiper>
//     </>
//   );
// }

// export default PopularCarousel
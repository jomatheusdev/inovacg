// Carousel.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Esta versão usa 'swiper-bundle.min.css'
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper/core";
import Panda from "../images/Carousel/panda.jpg";
import "../styles/carousel.css";
// Ative os módulos necessários do Swiper
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

function Carousel() {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      }}
      navigation={true}
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      <SwiperSlide className="swiper-slide">
        <div className="card"><img src={Panda} alt="" className="img"/></div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <div className="card">Slide 2</div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <div className="card">Slide 3</div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <div className="card">Slide 4</div>
      </SwiperSlide>
      {/* Adicione quantos slides forem necessários */}
    </Swiper>
  );
}

export default Carousel;

// Carousel.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Pagination } from "swiper/core";
import Panda from "../images/Carousel/panda.jpg";
import "../styles/carousel/carousel.css";

// Ativa apenas o módulo de paginação para as bolinhas
SwiperCore.use([Pagination]);

function Carousel() {
  return (
    <Swiper
      slidesPerView={1} // Mostra apenas um slide por vez
      pagination={{ clickable: true }} // Ativa a paginação clicável (bolinhas)
      className="mySwiper"
    >
      <SwiperSlide className="swiper-slide">
        <div className="card"><img src={Panda} alt="Panda" className="img" /></div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <div className="card"><img src={Panda} alt="Panda" className="img" /></div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <div className="card"><img src={Panda} alt="Panda" className="img" /></div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <div className="card"><img src={Panda} alt="Panda" className="img" /></div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <div className="card"><img src={Panda} alt="Panda" className="img" /></div>
      </SwiperSlide>
      {/* Adicione quantos slides forem necessários */}
    </Swiper>
  );
}

export default Carousel;

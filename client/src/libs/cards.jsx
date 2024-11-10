import React, { useState } from "react";
import "../styles/carousel/card.css"; // Importe o arquivo CSS

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // Controle para animações suaves
  const slides = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5"
  ];
  const totalSlides = slides.length;

  // Função para atualizar o índice de forma fluída
  const updateCoverflow = (newIndex) => {
    if (isAnimating) return; // Evitar múltiplas animações simultâneas

    setIsAnimating(true);
    setCurrentIndex(newIndex);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Atraso para corresponder à animação
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    updateCoverflow(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    updateCoverflow(newIndex);
  };

  return (
    <div className="coverflow-container">
      <div className="coverflow-wrapper">
        {slides.map((slide, index) => {
          let className = "coverflow-slide";
          if (index === currentIndex) {
            className += " active";
          } else if (index === currentIndex - 1 || (currentIndex === 0 && index === totalSlides - 1)) {
            className += " prev";
          } else if (index === currentIndex + 1 || (currentIndex === totalSlides - 1 && index === 0)) {
            className += " next";
          } else {
            className += " hidden"; // Para slides que não são próximos
          }

          return (
            <div key={index} className={className}>
              {slide}
            </div>
          );
        })}
      </div>

      <button className="nav-button prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="nav-button next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Card;

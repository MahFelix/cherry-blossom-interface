import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

// Primeiro carrossel
import image1 from "../assets/Carrousel2/IMG_8788.JPG";
import image2 from "../assets/Carrousel2/bolsa2.webp";
import image3 from "../assets/Carrousel2/bolsa3.webp";
import image4 from "../assets/Carrousel2/bolsa4.webp";
import image5 from "../assets/Carrousel2/bolsa5.webp";
import image6 from "../assets/Carrousel2/bolsa6.webp";
import image7 from "../assets/Carrousel2/bolsa7.webp";

// Segundo carrossel
import image8 from "../assets/Carrousel1/bolsa8.webp";
import image9 from "../assets/Carrousel1/bolsa10.webp";
import image10 from "../assets/Carrousel1/bolsa11.webp";
import image11 from "../assets/Carrousel1/bolsa12.webp";
import image12 from "../assets/Carrousel1/bolsa13.webp";
import image13 from "../assets/Carrousel1/bolsa14.webp";
import image14 from "../assets/Carrousel1/bolsa9.webp";
import image15 from "../assets/Carrousel2/bbs.webp";
import image16 from "../assets/Carrousel1/bolsa16.webp";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CarouselSection = styled.section`
  padding: 20px;
  background-color: #f4f4f9;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #4A3B31;
`;

const CarouselWrapper = styled(Slider)`
  .slick-slide img {
    border-radius: 15px;
    margin: 0 auto;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-areas:
    "img1 img2 img5 img15"
    "img1 img4 img5 img15"
    "img1 img6 img7 img15"
    "img1 img3 img7 img15";

  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    border: 3px solid #ccc; /* Quadramento em todas as imagens */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Sombra para destacar */
  }

  .img1 { grid-area: img1; }
  .img2 { grid-area: img2; }
  .img3 { grid-area: img3; }
  .img4 { grid-area: img4; }
  .img5 { grid-area: img5; }
  .img6 { grid-area: img6; }
  .img7 { grid-area: img7; }
  .img15 { grid-area: img15; }

  @media (max-width: 768px) {
    grid-template-areas:
      "img1 img2"
      "img3 img4"
      "img5 img6"
      "img7 img15";
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 150px;
  }

  @media (max-width: 480px) {
    grid-template-areas:
      "img1"
      "img2"
      "img3"
      "img4"
      "img5"
      "img6"
      "img7"
      "img15";
    grid-template-columns: 1fr;
    grid-auto-rows: 150px;
  }
`;

// Componente para o primeiro carrossel
const CarouselItem = () => (
  <ImageGrid>
    <img src={image1} alt="Imagem 1" className="img1" />
    <img src={image2} alt="Imagem 2" className="img2" />
    <img src={image3} alt="Imagem 3" className="img3" />
    <img src={image4} alt="Imagem 4" className="img4" />
    <img src={image5} alt="Imagem 5" className="img5" />
    <img src={image6} alt="Imagem 6" className="img6" />
    <img src={image7} alt="Imagem 7" className="img7" />
    <img src={image15} alt="Imagem 8" className="img15" /> {/* Imagem 8 adicionada ao grid */}
  </ImageGrid>
);

// Componente para o segundo carrossel com imagens diferentes
const CarouselItemSecond = () => (
  <ImageGrid>
    <img src={image8} alt="Imagem 6" className="img1" />
    <img src={image9} alt="Imagem 7" className="img2" />
    <img src={image10} alt="Imagem 8" className="img3" />
    <img src={image11} alt="Imagem 9" className="img4" />
    <img src={image12} alt="Imagem 10" className="img5" />
    <img src={image13} alt="Imagem 11" className="img6" />
    <img src={image14} alt="Imagem 12" className="img7" />
    <img src={image16} alt="Imagem 8" className="img15" />
  </ImageGrid>
);

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
  };

  const secondCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <CarouselSection>
        <Title>Explore Nossos Modelos Exclusivos de Bolsas</Title>
        <CarouselWrapper {...settings}>
          <CarouselItem />
          <CarouselItem />
        </CarouselWrapper>
      </CarouselSection>
      
      <CarouselSection>
        <Title>Descubra a Nova Coleção</Title>
        <CarouselWrapper {...secondCarouselSettings}>
          <CarouselItemSecond />
          <CarouselItemSecond />
        </CarouselWrapper>
      </CarouselSection>
    </>
  );
};

export default ImageCarousel;

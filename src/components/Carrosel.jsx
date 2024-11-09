import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import image1 from "../assets/bolsa1.png"; // Substitua pelos caminhos das suas imagens
import image2 from "../assets/bolsa2.png";
import image3 from "../assets/bolsa3.png";
import image4 from "../assets/CherryBGCatalogo.jpg";
import image5 from "../assets/PNGBEMVINDO1.png";
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
    "img1 img2 img3"
    "img4 img5 img3"
    "img4 img6 img7";
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }

  .img1 { grid-area: img1; }
  .img2 { grid-area: img2; }
  .img3 { grid-area: img3; }
  .img4 { grid-area: img4; }
  .img5 { grid-area: img5; }
  .img6 { grid-area: img6; }
  .img7 { grid-area: img7; }

  /* Responsividade para telas médias (tablets) */
  @media (max-width: 768px) {
    grid-template-areas:
      "img1 img2"
      "img3 img4"
      "img5 img6"
      "img7 img7";
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 150px;
  }

  /* Responsividade para telas pequenas (celulares) */
  @media (max-width: 480px) {
    grid-template-areas:
      "img1"
      "img2"
      "img3"
      "img4"
      "img5"
      "img6"
      "img7";
    grid-template-columns: 1fr;
    grid-auto-rows: 150px;
  }
`;

const CarouselItem = () => (
  <ImageGrid>
    <img src={image1} alt="Imagem 1" className="img1" />
    <img src={image2} alt="Imagem 2" className="img2" />
    <img src={image3} alt="Imagem 3" className="img3" />
    <img src={image4} alt="Imagem 4" className="img4" />
    <img src={image5} alt="Imagem 5" className="img5" />
    <img src={image1} alt="Imagem 6" className="img6" />
    <img src={image2} alt="Imagem 7" className="img7" />
  </ImageGrid>
);

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Ativa rolagem automática
    autoplaySpeed: 3000, // Intervalo de 3 segundos entre slides
    rtl: true, // Define a direção da rolagem para a direita
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
          <CarouselItem />
          <CarouselItem />
        </CarouselWrapper>
      </CarouselSection>
    </>
  );
};

export default ImageCarousel;

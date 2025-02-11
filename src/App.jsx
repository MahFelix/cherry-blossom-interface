import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import BLOGO from './assets/LOGO  BRANCA.png'; // LOGO MOBILE
import BLOGO2 from './assets/CherryLogo1.svg'; // LOGO DESKTOP
import BGHEADER from './assets/CherryBGCatalogo.webp';
import BGHEADER_MOBILE from './assets/MOBILEBD3.webp';
import B1 from './assets/Produtos/BagBege2.webp';
import B2 from './assets/Produtos/BagBrownN.webp';
import B3 from './assets/Produtos/BagRedN.webp';
import B4 from './assets/Produtos/BolsaAmarela.webp';
import B5 from './assets/Produtos/BolsaAzul.webp';
import B6 from './assets/Produtos/IMG_8685.webp';
import B7 from './assets/Produtos/bolsaRosa.webp';
import B8 from './assets/Produtos/bolsapretaN.webp';
import B9 from './assets/Produtos/BagBlack.webp';
import B10 from './assets/Produtos/BagBlue.webp';
import B11 from './assets/Produtos/BolsaGreen.jpeg';
import B12 from './assets/Produtos/BagOrang.webp';
import B13 from './assets/BagVier1.webp';
import ImageCarousel from './components/Carrosel';
import { AppBar } from '@mui/material';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import About from './components/About';
import ScrollReveal from "scrollreveal";
import GlobalStyle from './GlobalStyles';

// Estilos do Modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 70%;
  max-height: 90%;
  overflow: auto;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  border-radius: 5px;
`;

const ModalButtons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const ModalButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

const CloseButton = styled(ModalButton)`
  background-color: #ff4d4d;
  color: white;
`;

const ProceedButton = styled(ModalButton)`
  background-color: #30b84e;
  color: white;
`;

// Estilos existentes (Header, CatalogSection, etc.)
const Header = styled.header`
  background-image: url(${BGHEADER});
  background-size: cover;
  background-position: center;
  padding: 20em;
  text-align: center;
  color: white;

  p {
    font-size: 50px;
    color: black;
  }

  @media (max-width: 768px) {
    background-image: url(${BGHEADER_MOBILE});
    padding: 10em 2em;

    p {
      font-size: 30px;
    }
  }
`;

const LogoDesktop = styled.img`
  display: block;
  width: 25em;
  height: auto;
  margin-left: 30%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LogoMobile = styled.img`
  display: none;
  width: 15em;
  height: auto;
  margin-left: 18%;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CatalogSection = styled.section`
  padding: 40px 200px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const CatalogTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CatalogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductDetails = styled.div`
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProductName = styled.h3`
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  color: #121212;
  margin: 0;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #121212;
  margin: 0;
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const BuyButton = styled.a`
  display: inline-block;
  margin-top: 10px;
  background-color: #000000;
  color: white;
  padding: 10px 15px;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 2px;
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4d4d4d;
  }
`;

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const whatsappNumber = "5579999163347"; // Número do WhatsApp da vendedora

  useEffect(() => {
    // Configuração do ScrollReveal
    ScrollReveal().reveal('.reveal', {
      delay: 200,
      duration: 1000,
      distance: '50px',
      easing: 'ease-in-out',
      opacity: 0,
      scale: 0.85,
    });
  }, []);

  const products = [
    { id: 1, name: "Cherry Joy", price: "R$ 374,20", image: B1 },
    { id: 2, name: "Cherry Texas", price: "R$ 399,90", image: B2 },
    { id: 3, name: "Cherry Cluth", price: "R$ 284,90", image: B3 },
    { id: 4, name: "Cherry mini Cluth", price: "R$ 199,90", image: B4 },
    { id: 5, name: "Cherry Vier", price: "R$ 339,90", image: B5 },
    { id: 6, name: "Cherry mini Cluth", price: "R$ 199,90", image: B6 },
    { id: 7, name: "Cherry Joy", price: "R$ 374,90", image: B7 },
    { id: 8, name: "Cherry 214", price: "R$ 359,90", image: B8 },
    { id: 9, name: "Cherry 214", price: "R$ 359,90", image: B9 },
    { id: 10, name: "Cherry La Vier", price: "R$ 397,20", image: B10 },
    { id: 11, name: "Cherry k12", price: "R$ 299,20", image: B11 },
    { id: 12, name: "Cherry La Vier", price: "R$ 397,20", image: B12 },
    { id: 13, name: "Cherry La Vier", price: "R$ 397,20", image: B13 },
  ];

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleProceedToWhatsApp = () => {
    if (selectedProduct) {
      const message = `Bem-vindo(a)! Gostaria de mais informações sobre o produto: ${encodeURIComponent(selectedProduct.name)}`;
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    }
  };

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Header>
        <LogoDesktop src={BLOGO2} alt="Cherry Blossom Logo Desktop" />
        <LogoMobile src={BLOGO} alt="Cherry Blossom Logo Mobile" />
      </Header>

      <CatalogSection />
      <AppBar />
      <ImageCarousel />

      <CatalogSection id="catalog">
        <CatalogTitle>NOSSO CATÁLOGO</CatalogTitle>
        <CatalogGrid>
          {products.map((product) => (
            <ProductCard key={product.id} className="reveal">
              <ProductImage src={product.image} alt={product.name} className="reveal" />
              <ProductDetails>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
                <BuyButton onClick={() => handleBuyClick(product)}>
                  Comprar
                </BuyButton>
              </ProductDetails>
            </ProductCard>
          ))}
        </CatalogGrid>
      </CatalogSection>

      {selectedProduct && (
        <ModalOverlay>
          <ModalContent>
            <ModalImage src={selectedProduct.image} alt={selectedProduct.name} />
            <ModalButtons>
              <CloseButton onClick={handleCloseModal}>Fechar</CloseButton>
              <ProceedButton onClick={handleProceedToWhatsApp}>
                Prosseguir com a compra
              </ProceedButton>
            </ModalButtons>
          </ModalContent>
        </ModalOverlay>
      )}

      <About />
      <Contact />
      <Footer>
        <p>© Cherry Blossom - Bolsas de Crochê de Luxo</p>
      </Footer>
    </>
  );
};

export default App;
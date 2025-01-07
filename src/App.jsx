import styled from 'styled-components';
import BLOGO from './assets/LOGO  BRANCA.png'; // LOGO MOBILE
import BLOGO2 from './assets/CherryLogo1.svg' // LOGO DESKTOP
import BGHEADER from './assets/CherryBGCatalogo.webp';
import BGHEADER_MOBILE from './assets/MOBILEBD3.webp';
import B1 from './assets/Produtos/BagBege2.webp'
import B2 from './assets/Produtos/BagBrownN.webp'
import B3 from './assets/Produtos/BagRedN.webp'
import B4 from './assets/Produtos/BolsaAmarela.webp'
import B5 from './assets/Produtos/BolsaAzul.webp'
import B6 from './assets/Produtos/IMG_8685.webp'
import B7 from './assets/Produtos/bolsaRosa.webp'
import B8 from './assets/Produtos/bolsapretaN.webp'
import B9 from './assets/Produtos/BagBlack.webp'
import B10 from './assets/Produtos/BagBlue.webp'
import B11 from './assets/Produtos/BolsaGreen.jpeg'
import B12 from './assets/Produtos/BagOrang.webp'
import B13 from './assets/BagVier1.webp'
import ImageCarousel from './components/Carrosel';
import { AppBar } from '@mui/material';
import NavBar from './components/NavBar'
import Contact from './components/Contact'
import About from './components/About';
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import GlobalStyle from './GlobalStyles';





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

  /* Responsividade para mobile */
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
  padding: 40px 20px;
  text-align: center;

  /* Responsividade para mobile */
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const CatalogTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;

  /* Responsividade para mobile */
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CatalogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;

  /* Responsividade para mobile */
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
  height: 200px; /* Define uma altura consistente para as imagens */
  object-fit: cover; /* Garante que a imagem fique bem ajustada */
`;

const ProductDetails = styled.div`
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px; /* Espaçamento consistente entre os elementos */
`;

const ProductName = styled.h3`
  font-size: 1.6rem;
  color: #333;
  margin: 0;
  font-weight: bold;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: #837E7A;
  margin: 0;
`;


const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;

  /* Responsividade para mobile */
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
    { id: 1, name: "Cherry Joy", price: "R$ 374,20", image: B1, },
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


  const whatsappNumber = "5579999163347"; // Número do WhatsApp da vendedora

  return (
    <>
      <GlobalStyle />
      <NavBar />

      <Header>
        <LogoDesktop src={BLOGO2} alt="Cherry Blossom Logo Desktop" />
        <LogoMobile src={BLOGO} alt="Cherry Blossom Logo Mobile" />
      </Header>

      <AppBar />

      <CatalogSection id="catalog">
        <CatalogTitle>Nosso Catálogo</CatalogTitle>
        <CatalogGrid>
          {products.map((product) => (
            <ProductCard key={product.id} className='reveal'>
              <ProductImage src={product.image} alt={product.name} className='reveal' />
              <ProductDetails >
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
                <BuyButton
                  href={`https://wa.me/${whatsappNumber}?text=Bem%20vindo,%20poderia%20me%20dar%20mais%20informações%20sobre%20o%20produto%20${encodeURIComponent(product.name)}?`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Comprar
                </BuyButton>
              </ProductDetails>
            </ProductCard>
          ))}
        </CatalogGrid>
      </CatalogSection>

      <ImageCarousel />
      <About />
      <Contact />
      <Footer>
        <p>© Cherry Blossom - Bolsas de Crochê de Luxo</p>
      </Footer>

    </>
  );
};

export default App;
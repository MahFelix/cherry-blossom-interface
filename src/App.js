import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import BLOGO from './assets/LOGO  BRANCA PRETA 2.png';
import BGHEADER from './assets/CherryBGCatalogo.jpg';
import BGHEADER_MOBILE from './assets/CHERRYBLO.jpg'; // Imagem para mobile
import B1 from './assets/Produtos/BagBege2.webp'
import B2 from './assets/Produtos/BagBrownN.webp'
import B3 from './assets/Produtos/BagRedN.webp'
import B4 from './assets/Produtos/BolsaAmarela.webp'
import B5 from './assets/Produtos/BolsaAzul.webp'
import B6 from './assets/Produtos/IMG_8685.webp'
import B7 from './assets/Produtos/bolsaRosa.webp'
import B8 from './assets/Produtos/bolsapretaN.webp'
import B9 from './assets/Produtos/BagBlack.jpeg'
import B10 from './assets/Produtos/BagBlue.jpeg'
import B11 from './assets/Produtos/BolsaGreen.jpeg'
import B12 from './assets/Produtos/BagOrang.jpeg'
import ImageCarousel from './components/Carrosel';




// Estilos globais
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


  body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    background-color: #f4f4f9;
  }
`;

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

const Logo = styled.img`
  width: 25em;
  height: auto;

  /* Responsividade para mobile */
  @media (max-width: 768px) {
    width: 15em;
  }
`;

const Menu = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  /* Responsividade para mobile */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MenuItem = styled.a`
  margin: 0 20px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 1rem;
  transition: color 0.3s;
  
  &:hover {
    color: #F29F05;
  }

  /* Responsividade para mobile */
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const HeroSection = styled.section`
  background-color: #CCCCCC;
  color: black;
  padding: 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Responsividade para mobile */
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  max-width: 700px;
  text-align: center;

  p {
    font-size: 30px;
  }

  /* Responsividade para mobile */
  @media (max-width: 768px) {
    p {
      font-size: 16px;
    }
  }
`;

const HeroTitle = styled.h1`
width: 15.1em;
  font-size: 3rem;
  margin-bottom: 20px;

  /* Responsividade para mobile */
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const HeroButton = styled.a`
  background-color:#2A3258;
  color: white;
  padding: 15px 30px;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e68900;
  }

  /* Responsividade para mobile */
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 1rem;
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
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductDetails = styled.div`
  padding: 15px;
  text-align: left;
`;

const ProductName = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: #837E7A;
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
  background-color: #2A3258;
  color: white;
  padding: 10px 15px;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e68900;
  }
`;

const App = () => {
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
    { id: 10, name: "Cherry La Vier", price: "R$ 359,90", image: B10 },
    { id: 11, name: "Cherry k12", price: "R$ 359,90", image: B11 }, 
   { id: 12, name: "Cherry La Vier", price: "R$ 359,90", image: B12 },
  ];

  const whatsappNumber = "5579999163347"; // Número do WhatsApp da vendedora

  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo src={BLOGO} alt="Cherry Blossom Logo" />
        <p>Bolsas de Crochê de Luxo</p>
      </Header>
      <Menu>
        <MenuItem href="#">Início</MenuItem>
        <MenuItem href="#">Sobre</MenuItem>
        <MenuItem href="#">Catálogo</MenuItem>
        <MenuItem href="#">Contato</MenuItem>
      </Menu>

      <HeroSection>
        <HeroContent>
          <HeroTitle>Bem-vindo à Cherry Blossom</HeroTitle>
          <p>Elegância e sofisticação em cada peça.</p>
          <HeroButton href="#catalog">Veja o Catálogo</HeroButton>
        </HeroContent>
      </HeroSection>

      <CatalogSection id="catalog">
        <CatalogTitle>Nosso Catálogo</CatalogTitle>
        <CatalogGrid>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.image} alt={product.name} />
              <ProductDetails>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
                <BuyButton
                  href={`https://wa.me/${whatsappNumber}?text=Olá,%20tenho%20interesse%20na%20bolsa%20${encodeURIComponent(product.name)}%20pelo%20preço%20de%20${encodeURIComponent(product.price)}.`}
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
      <ImageCarousel/>

      <Footer>
        <p>© Cherry Blossom - Bolsas de Crochê de Luxo</p>
      </Footer>
    </>
  );
};

export default App;

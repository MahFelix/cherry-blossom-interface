import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import BLOGO from './assets/LOGO  BRANCA PRETA 2.png';
import BGHEADER from './assets/CherryBGCatalogo.jpg';
import BGHEADER_MOBILE from './assets/CHERRYBLO.jpg'; // Imagem para mobile
import B1 from './assets/bolsa1.png'
import B2 from './assets/bolsa2.png'
import B3 from './assets/bolsa3.png'


// Estilos globais
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
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
  padding: 80px 0;
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
      font-size: 20px;
    }
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;

  /* Responsividade para mobile */
  @media (max-width: 768px) {
    font-size: 2rem;
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
  color: #F29F05;
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

const FooterLink = styled.a`
  color: #F29F05;
  text-decoration: none;
  margin: 0 15px;
  
  &:hover {
    text-decoration: underline;
  }

  /* Responsividade para mobile */
  @media (max-width: 768px) {
    margin: 0 10px;
  }
`;

const App = () => {
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
          <ProductCard>
            <ProductImage src={B1} alt="Bolsa 1" />
            <ProductDetails>
              <ProductName>Bolsas Elegante</ProductName>
              <ProductPrice>R$ 899,00</ProductPrice>
            </ProductDetails>
          </ProductCard>
          <ProductCard>
            <ProductImage src={B2} alt="Bolsa 2" />
            <ProductDetails>
              <ProductName>Bolsas Luxury</ProductName>
              <ProductPrice>R$ 1200,00</ProductPrice>
            </ProductDetails>
          </ProductCard>
          <ProductCard>
            <ProductImage src={B3} alt="Bolsa 3" />
            <ProductDetails>
              <ProductName>Bolsas Sofisticada</ProductName>
              <ProductPrice>R$ 1.000,00</ProductPrice>
            </ProductDetails>
          </ProductCard>
        </CatalogGrid>
      </CatalogSection>
      
      <Footer>
        <p>&copy; 2024 Cherry Blossom - Todos os direitos reservados.</p>
        <div>
          <FooterLink href="#">Instagram</FooterLink>
          <FooterLink href="#">Facebook</FooterLink>
          <FooterLink href="#">Contato</FooterLink>
        </div>
      </Footer>
    </>
  );
};

export default App;

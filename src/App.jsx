import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // Importe BrowserRouter e Routes
import { AuthProvider } from "./AuthContext"; // Importe o AuthProvider
import styled from "styled-components";
import BLOGO from "./assets/LOGO  BRANCA.png"; // LOGO MOBILE
import BLOGO2 from "./assets/CherryLogo1.svg"; // LOGO DESKTOP
import BGHEADER from "./assets/CherryBGCatalogo.webp";
import BGHEADER_MOBILE from "./assets/MOBILEBD3.webp";
import ImageCarousel from "./components/Carrosel";
import { AppBar } from "@mui/material";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import About from "./components/About";
import ScrollReveal from "scrollreveal";
import GlobalStyle from "./GlobalStyles";
import AdminDashboard from "./containers/Admin/AdminDashboard";
import Login from "./containers/Login/Login";
import axios from "axios";

// Estilos do Modal


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
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s;

  ${ProductCard}:hover & {
    transform: scale(1.1);
  }
`;

const ProductDetails = styled.div`
  padding: 15px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProductName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #121212;
  margin: 0;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #121212;
  margin: 0;
  font-weight: 500;
`;

const ProductSubtitle = styled.p`
  font-size: 14px;
  color: #666;
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
  const [products, setProducts] = useState([]); // Estado para armazenar os produtos


   // Buscar produtos da API
   useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8090/api/products");
        setProducts(response.data); // Atualiza o estado com os produtos da API
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Configuração do ScrollReveal
    ScrollReveal().reveal(".reveal", {
      delay: 200,
      duration: 1000,
      distance: "50px",
      easing: "ease-in-out",
      opacity: 0,
      scale: 0.85,
    });
  }, [])


  const handleBuyClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <AuthProvider>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
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
                      <ProductImage
                        src={product.image}
                        alt={product.name}
                        className="reveal"
                      />
                      <ProductDetails>
                        <ProductName>{product.name}</ProductName>
                        <ProductSubtitle>{product.subtitle}</ProductSubtitle>
                        <ProductPrice>{product.price}</ProductPrice>
                        <BuyButton onClick={() => handleBuyClick(product)}>
                          Comprar
                        </BuyButton>
                      </ProductDetails>
                    </ProductCard>
                  ))}
                </CatalogGrid>
              </CatalogSection>
              <About />
              <Contact />
              <Footer>
                <p>© Cherry Blossom - Bolsas de Crochê de Luxo</p>
              </Footer>
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
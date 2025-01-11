import styled from 'styled-components';
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
import React, { useEffect, useState} from "react";
import ScrollReveal from "scrollreveal";


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


const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PopupImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
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


  const CatalogSection = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

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

  const openPopup = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };


  const whatsappNumber = "5579999163347"; // Número do WhatsApp da vendedora

  return (
      <CatalogSection id="catalog">
      <CatalogTitle>Nosso Catálogo</CatalogTitle>
      <CatalogGrid>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            className="reveal"
            onClick={() => openPopup(product)}
          >
            <ProductImage
              src={product.image}
              alt={product.name}
              className="reveal"
            />
            <ProductDetails>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price}</ProductPrice>
              <BuyButton
                href={`https://wa.me/${whatsappNumber}?text=Bem%20vindo,%20poderia%20me%20dar%20mais%20informações%20sobre%20o%20produto%20${encodeURIComponent(
                  product.name
                )}?`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar
              </BuyButton>
            </ProductDetails>
          </ProductCard>
        ))}
      </CatalogGrid>

      {selectedProduct && (
        <Popup>
          <PopupContent>
            <PopupImage
              src={selectedProduct.image}
              alt={selectedProduct.name}
            />
            <CloseButton onClick={closePopup}>X</CloseButton>
          </PopupContent>
        </Popup>
      )}
    </CatalogSection>

    
  )
  ;}
};

export default App;
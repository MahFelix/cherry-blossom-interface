import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import * as Images from './assets/Produtos';

const CatalogTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;

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

const BuyButton = styled.button`
  background-color: #000;
  color: white;
  padding: 10px 15px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
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

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const CloseButton = styled.button`
  background: #ccc;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const ProceedButton = styled.a`
  background: #000;
  color: white;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
`;

const App = () => {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      delay: 200,
      duration: 1000,
      distance: '50px',
      easing: 'ease-in-out',
      opacity: 0,
      scale: 0.85,
    });
  }, []);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = Object.values(Images).map((image, index) => ({
    id: index + 1,
    name: `Produto ${index + 1}`,
    price: `R$ ${(Math.random() * (400 - 200) + 200).toFixed(2)}`,
    image,
  }));

  const openPopup = (product) => setSelectedProduct(product);
  const closePopup = () => setSelectedProduct(null);
  const whatsappNumber = '5579999163347';

  return (
    <section id="catalog">
      <CatalogTitle>NOSSO CATÁLOGO</CatalogTitle>
      <CatalogGrid>
        {products.map((product) => (
          <ProductCard key={product.id} onClick={() => openPopup(product)}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductDetails>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <BuyButton>Comprar</BuyButton>
            </ProductDetails>
          </ProductCard>
        ))}
      </CatalogGrid>

      {selectedProduct && (
        <Popup>
          <PopupContent>
            <PopupImage src={selectedProduct.image} alt={selectedProduct.name} />
            <ButtonContainer>
              <CloseButton onClick={closePopup}>Fechar</CloseButton>
              <ProceedButton
                href={`https://wa.me/${whatsappNumber}?text=Quero%20comprar%20o%20produto%20${encodeURIComponent(
                  selectedProduct.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Prosseguir com a Compra
              </ProceedButton>
            </ButtonContainer>
          </PopupContent>
        </Popup>
      )}
    </section>
  );
};

export default App;

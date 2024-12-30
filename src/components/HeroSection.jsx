import React from 'react'; // Importação do React
import styled, { createGlobalStyle } from 'styled-components';

// Estilos globais
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    background-color: #f4f4f9;
  }
`;

// Estilo para a seção Hero
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
  background-color: #000000;
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

// Função App
const App = () => {
  return (
    <>
      {/* Aplica os estilos globais */}
      <GlobalStyle />
      <HeroSection>
        <HeroContent>
          <HeroTitle>Bem-vindo à Cherry Blossom</HeroTitle>
          <p>Elegância e sofisticação em cada peça.</p>
          <HeroButton href="#catalog">Veja o Catálogo</HeroButton>
        </HeroContent>
      </HeroSection>
    </>
  );
};

export default App;

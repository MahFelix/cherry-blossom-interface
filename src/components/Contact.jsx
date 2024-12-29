import React from "react";
import styled from "styled-components";
import { Instagram, WhatsApp } from "@mui/icons-material"; // Importação dos ícones
import bolsaImage from "../assets/BagVier1.png"; // Substitua pelo caminho da sua imagem de bolsa

const Contact = () => {
  return (
    <ContactContainer>
      <ImageContainer>
        <img src={bolsaImage} alt="Bolsa de crochê" />
      </ImageContainer>
      <LinksContainer>
        <h2>Entre em Contato</h2>
        <p>Nos siga ou envie uma mensagem:</p>
        <Link href="https://www.instagram.com/_cherry_blo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
          <Instagram />
          Instagram
        </Link>
        <Link href="https://wa.me/5579999163347" target="_blank" rel="noopener noreferrer">
          <WhatsApp />
          WhatsApp
        </Link>
      </LinksContainer>
    </ContactContainer>
  );
};

export default Contact;

// Estilos
const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const LinksContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  h2 {
    font-size: 1.8rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #555;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #555;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    color: #333;
  }
`;

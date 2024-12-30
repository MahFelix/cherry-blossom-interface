import React, { useEffect } from "react";
import styled from "styled-components";
import { Instagram, WhatsApp } from "@mui/icons-material"; // Importação dos ícones
import ScrollReveal from "scrollreveal";
import bolsaImage from "../assets/BagVier1.png"; // Substitua pelo caminho da sua imagem de bolsa
import BLOGO from '../assets/CherryLogo1.svg';

const Contact = () => {
  useEffect(() => {
    ScrollReveal().reveal(".contact-section", {
      delay: 200,
      duration: 1000,
      distance: "50px",
      easing: "ease-in-out",
      origin: "bottom",
      reset: true,
    });
  }, []);

  return (
    <ContactContainer id="contato" className="contact-section">
      <LinksContainer>
        <Logo src={BLOGO} alt="Cherry Blossom Logo" />
        <h2>Entre em Contato</h2>
        <p>Nos siga ou envie uma mensagem:</p>
        <Link
          href="https://www.instagram.com/_cherry_blo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
          Instagram
        </Link>
        <Link
          href="https://wa.me/5579999163347"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp />
          WhatsApp
        </Link>
      </LinksContainer>

      <ImageContainer>
        <img src={bolsaImage} alt="Bolsa de crochê" />
      </ImageContainer>
    </ContactContainer>
  );
};

export default Contact;

// Estilos
const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
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

const Logo = styled.img`
  width: 200px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

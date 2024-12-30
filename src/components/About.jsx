import React, { useEffect } from "react";
import styled from "styled-components";
import ScrollReveal from "scrollreveal";
import aboutImage from "../assets/Carrousel2/bolsa1.webp"; // Substitua pelo caminho da sua imagem

const About = () => {
  useEffect(() => {
    // Configuração do ScrollReveal
    ScrollReveal().reveal(".text-container", {
      origin: "left",
      distance: "50px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".image-container", {
      origin: "right",
      distance: "50px",
      duration: 1000,
      delay: 400,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <AboutContainer id="sobre">
      <TextContainer className="text-container">
        <h1>Sobre Nós</h1>
        <p>
          Bem-vindo à <strong>Cherry Blossom</strong>, onde a arte do crochê se
          encontra com o luxo. Somos uma loja especializada em bolsas de crochê
          feitas à mão, combinando sofisticação, estilo e sustentabilidade.
          Cada peça é cuidadosamente confeccionada, garantindo exclusividade e
          qualidade incomparáveis.
        </p>
        <p>
          Além de nossas bolsas de crochê, oferecemos cursos exclusivos para
          quem deseja aprender essa arte incrível. Com nossos cursos, você pode
          dominar as técnicas do crochê e criar suas próprias peças de luxo.
          Venha fazer parte dessa jornada criativa!
        </p>
      </TextContainer>
      <ImageContainer className="image-container">
        <img src={aboutImage} alt="Sobre a loja Cherry Blossom" />
      </ImageContainer>
    </AboutContainer>
  );
};

export default About;

// Estilos
const AboutContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 20px;

    strong {
      color: #d69e2e; /* Destaque em dourado */
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

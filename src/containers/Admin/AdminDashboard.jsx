import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { FaBars, FaEdit, FaTrash } from "react-icons/fa"; // Ícones para editar e excluir

// Estilos
const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f5f5f5;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #333;
  color: white;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 100%;
    height: ${({ isOpen }) => (isOpen ? "auto" : "60px")};
    overflow: hidden;
    transition: height 0.3s;
  }
`;

const MenuIcon = styled(FaBars)`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  }
`;

const SidebarMenuItem = styled.li`
  margin: 15px 0;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #444;
  }

  ${({ active }) =>
    active &&
    `
    background-color: #007bff;
    &:hover {
      background-color: #0056b3;
    }
  `}
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: white;
  overflow-y: auto;
  width: 100%;
  @media (max-width: 768px) {
    padding: 10px;
    width: 100%;
  }
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 3fr));
  }
`;

const ProductCard = styled.div`
width: 200px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
  @media (max-width: 768px) {
    width: 100px;
    grid-template-columns: 2fr;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
`;

const ProductDetails = styled.div`
  padding: 10px 0;
  text-align: left;
`;

const ProductName = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const ProductPrice = styled.p`
  font-size: 12px;
  color: #666;
  margin: 5px 0;
`;

const ProductActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  transition: color 0.2s;

  &:hover {
    color: #007bff;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }
`;

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({
    id: null,
    name: "",
    subtitle: "",
    image: "",
    imageUrl: "", // Novo campo para URL da imagem
    price: 0,
    imageFile: null,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [activeMenu, setActiveMenu] = useState("view"); // 'view' ou 'add'
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para controlar a barra lateral em mobile

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://cherry-backend-fcm4.onrender.com/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        name: currentProduct.name,
        subtitle: currentProduct.subtitle,
        price: currentProduct.price,
        image: currentProduct.imageUrl, // Usa a URL da imagem
      };
  
      if (currentProduct.id) {
        // Editar produto existente
        await axios.put(
          `https://cherry-backend-fcm4.onrender.com/api/products/${currentProduct.id}`,
          productData,
          {
            headers: {
              "Content-Type": "application/json", // Define o tipo de conteúdo como JSON
            },
          }
        );
      } else {
        // Adicionar novo produto
        await axios.post(
          "https://cherry-backend-fcm4.onrender.com/api/products",
          productData,
          {
            headers: {
              "Content-Type": "application/json", // Define o tipo de conteúdo como JSON
            },
          }
        );
      }
  
      fetchProducts();
      setCurrentProduct({
        id: null,
        name: "",
        subtitle: "",
        image: "",
        imageUrl: "", // Limpa a URL da imagem
        price: 0,
      });
      setIsEditing(false);
      setActiveMenu("view"); // Voltar para a lista de produtos após salvar
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
    }
  };

  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setIsEditing(true);
    setActiveMenu("add"); // Mudar para o formulário de edição
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`https://cherry-backend-fcm4.onrender.com/api/products/${id}`);
      fetchProducts(); // Atualizar lista após exclusão
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
    }
  };

  return (
    <DashboardContainer>
      {/* Barra Lateral */}
      <Sidebar isOpen={isSidebarOpen}>
        <MenuIcon onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <SidebarMenu isOpen={isSidebarOpen}>
          <SidebarMenuItem
            active={activeMenu === "view"}
            onClick={() => {
              setActiveMenu("view");
              setIsSidebarOpen(false); // Fechar a barra lateral após clicar
            }}
          >
            Exibir Todos Produtos
          </SidebarMenuItem>
          <SidebarMenuItem
            active={activeMenu === "add"}
            onClick={() => {
              setActiveMenu("add");
              setIsEditing(false);
              setCurrentProduct({
                id: null,
                name: "",
                subtitle: "",
                image: "",
                price: 0,
              });
              setIsSidebarOpen(false); // Fechar a barra lateral após clicar
            }}
          >
            Adicionar Produto
          </SidebarMenuItem>
        </SidebarMenu>
      </Sidebar>

      {/* Área Principal */}
      <MainContent>
        {activeMenu === "view" ? (
          // Exibir lista de produtos
          <ProductList>
            {products.map((product) => (
              <ProductCard key={product.id}>
                <ProductImage src={product.image} alt={product.name} />
                <ProductDetails>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>R$ {product.price}</ProductPrice>
                </ProductDetails>
                <ProductActions>
                  <ActionButton onClick={() => handleEditProduct(product)}>
                    <FaEdit />
                  </ActionButton>
                  <ActionButton
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <FaTrash />
                  </ActionButton>
                </ProductActions>
              </ProductCard>
            ))}
          </ProductList>
        ) : (
          // Exibir formulário de adicionar/editar produto
          <Form onSubmit={handleSubmit}>
            <h2>{isEditing ? "Editar Produto" : "Adicionar Novo Produto"}</h2>
            <Input
              type="text"
              name="name"
              placeholder="Nome"
              value={currentProduct.name}
              onChange={handleInputChange}
              required
            />
            <Input
              type="text"
              name="subtitle"
              placeholder="Subtítulo"
              value={currentProduct.subtitle}
              onChange={handleInputChange}
              required
            />
            <Input
              type="text"
              name="imageUrl"
              placeholder="URL da Imagem"
              value={currentProduct.imageUrl || ""}
              onChange={handleInputChange}
            />
            <Input
              type="number"
              name="price"
              placeholder="Preço"
              value={currentProduct.price}
              onChange={handleInputChange}
              required
            />
            <Button type="submit">Salvar</Button>
          </Form>
        )}
      </MainContent>
    </DashboardContainer>
  );
};

export default AdminDashboard;
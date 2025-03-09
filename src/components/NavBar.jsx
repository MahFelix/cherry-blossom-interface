import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';

const ResponsiveMenu = ({ isAuthenticated, setIsAuthenticated }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Desloga o usuário
    navigate('/'); // Redireciona para a página inicial
  };

  const menuItems = [
    { label: 'Início', link: '/' },
    { label: 'Sobre', link: '/sobre' },
    { label: 'Catálogo', link: '/catalogo' },
    { label: 'Contato', link: '/contato' },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#000', // Fundo preto
        color: '#fff', // Texto branco
      }}
      elevation={4}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            color: '#fff', // Título em branco
            fontFamily: 'Yanone Kaffeesatz, sans-serif', // Aplicando a fonte
            fontSize: '2rem', // Tamanho da fonte
          }}
        >
          CHERRY BLOSSOM
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="end"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{ color: '#fff' }} // Ícone do menu em branco
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  backgroundColor: '#000', // Fundo do menu preto
                  color: '#fff', // Texto do menu em branco
                  fontFamily: 'Yanone Kaffeesatz, sans-serif', // Aplicando a fonte
                },
              }}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={handleMenuClose}
                  sx={{
                    color: '#fff',
                    fontFamily: 'Yanone Kaffeesatz, sans-serif', // Aplicando a fonte
                    '&:hover': {
                      backgroundColor: '#333', // Hover cinza
                    },
                  }}
                >
                  <Link
                    to={item.link}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {item.label}
                  </Link>
                </MenuItem>
              ))}
              {isAuthenticated ? (
                <MenuItem
                  onClick={handleLogout}
                  sx={{
                    color: '#fff',
                    fontFamily: 'Yanone Kaffeesatz, sans-serif', // Aplicando a fonte
                    '&:hover': {
                      backgroundColor: '#333', // Hover cinza
                    },
                  }}
                >
                  Logout
                </MenuItem>
              ) : (
                <MenuItem
                  component={Link}
                  to="/login"
                  sx={{
                    color: '#fff',
                    fontFamily: 'Yanone Kaffeesatz, sans-serif', // Aplicando a fonte
                    '&:hover': {
                      backgroundColor: '#333', // Hover cinza
                    },
                  }}
                >
                  Login
                </MenuItem>
              )}
            </Menu>
          </>
        ) : (
          <>
            {menuItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.link}
                sx={{
                  color: '#fff',
                  fontFamily: 'Yanone Kaffeesatz, sans-serif', // Aplicando a fonte
                  '&:hover': {
                    backgroundColor: '#333', // Hover cinza para os botões
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
            {isAuthenticated ? (
              <Button
                onClick={handleLogout}
                sx={{
                  color: '#fff',
                  fontFamily: 'Yanone Kaffeesatz, sans-serif', // Aplicando a fonte
                  '&:hover': {
                    backgroundColor: '#333', // Hover cinza para o botão de logout
                  },
                }}
              >
                Logout
              </Button>
            ) : (
              <Button
                component={Link}
                to="/login"
                sx={{
                  color: '#fff',
                  fontFamily: 'Yanone Kaffeesatz, sans-serif', // Aplicando a fonte
                  '&:hover': {
                    backgroundColor: '#333', // Hover cinza para o botão de login
                  },
                }}
              >
                Login
              </Button>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveMenu;
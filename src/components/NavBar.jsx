import React from 'react';
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
import GlobalStyle from '../GlobalStyles';

const ResponsiveMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'Início', link: '#' },
    { label: 'Sobre', link: '#sobre' },
    { label: 'Catálogo', link: '#catalog' },
    { label: 'Contato', link: '#contato' },
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
          }}
        >
          Cherry Blossom
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
                },
              }}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={handleMenuClose}
                  sx={{
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: '#333', // Hover cinza
                    },
                  }}
                >
                  <a
                    href={item.link}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {item.label}
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          menuItems.map((item) => (
            <Button
              key={item.label}
              href={item.link}
              sx={{
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#333', // Hover cinza para os botões
                },
              }}
            >
              {item.label}
            </Button>
          ))
        )}
      </Toolbar>
    </AppBar>
  );
};

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ResponsiveMenu />
      {/* Resto do código permanece o mesmo */}
    </>
  );
};

export default App;

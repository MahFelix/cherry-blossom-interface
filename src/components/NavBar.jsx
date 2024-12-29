import React from 'react';
import { createGlobalStyle } from 'styled-components';
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

// Estilos globais permanecem os mesmos
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

  body {
    margin: 0;
    font-family: "Poppins", sans-serif;
    background-color: #f4f4f9;
  }
`;

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
    <AppBar position="sticky" color="default" elevation={4}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Cherry Blossom
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {menuItems.map((item) => (
                <MenuItem key={item.label} onClick={handleMenuClose}>
                  <a href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {item.label}
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          menuItems.map((item) => (
            <Button key={item.label} color="inherit" href={item.link}>
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

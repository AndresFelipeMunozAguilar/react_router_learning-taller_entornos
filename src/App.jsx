import React from 'react';
import { AppBar, Toolbar, Typography, Box, Link } from '@mui/material';
import './App.css';


const App = () => {
  return (
    <div>
      {/* Barra superior */}
      <AppBar position="static" sx={{ backgroundColor: '#096280' }}>
        <Toolbar>
          {/* Logo de React */}
          <img
            id="ReactMainLogo"
            src="/src/assets/react.svg"
            alt="React Logo"
            style={{ marginRight: '16px', width: '40px', height: '40px' }}
          />
          {/* Título de la aplicación */}
          <Typography variant="h1" component="div" sx={{ fontSize: '3rem' }}>
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Barra de navegación */}
      <Box
        component="nav"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
          padding: '8px 16px',
          marginTop: 0,
          paddingX: '38px'
        }}
      >
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <Link href="/clients" color="inherit" underline="hover">
            Clientes
          </Link>
          <Link href="/provider" color="inherit" underline="hover">
            Proveedor
          </Link>
          <Link href="/user" color="inherit" underline="hover">
            Usuarios
          </Link>
        </Box>


        <Box>
          <Link href="/log-out" color="inherit" underline="hover">
            Cerrar sesión
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default App;




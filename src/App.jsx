import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import './App.css';
import { Outlet } from "react-router-dom";
import { NavLink } from 'react-router';
import Clients from './Pages/Clients.jsx';
import Providers from './Pages/Providers.jsx';
import Users from './Pages/Users.jsx';
import LogOut from './Pages/LogOut.jsx';

const App = () => {
  return (
    <>
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
            <NavLink to="/clients"
            >
              <Button variant="text" size="small">
                Clientes
              </Button>
            </NavLink>
            <NavLink to="/providers" >
              <Button variant="text" size="small">
                Proveedores
              </Button>
            </NavLink>
            <NavLink to="/users" >
              <Button variant="text" size="small">
                Usuarios
              </Button>
            </NavLink>
          </Box>
          <Box>
            <NavLink to="/log-out">
              <Button
                variant="outlined"
                size="small"
                color="error"
              >
                Cerrar sesión
              </Button>
            </NavLink>
          </Box>
        </Box>
      </div>

      <Outlet />
    </>
  );
};

export default App;




import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import './App.css';
import { Outlet } from "react-router-dom";
import { NavLink } from 'react-router';
import { useState, useEffect } from 'react';
import { getAllJSDocTagsOfKind } from 'typescript';


const App = () => {

  const defaultButton = 0
  const disabledBttnColor = 'inherit'

  // Función para manejar el clic en los botones de navegación

  /* La presente función funciona con números, de tal forma
   * que el número seleccionado indica qué botón está activo.
   * Por ejemplo, si el botón 1 está activo, el número 1 indica
   * que está activo el botón clientes. La selección de botones sigue
   * la siguiente lógica:
   * 
   *     1. Clientes
   *     2. Proveedores
   *     3. Usuarios
   *     4. Cerrar sesión
   */
  const [currentButton, setCurrentButton] = useState(() => {
    // Obtener el valor guardado en localStorage al cargar la página
    const savedButton = localStorage.getItem('currentButton');
    return savedButton ? parseInt(savedButton, 10) : 1; // Si no hay valor guardado, usar 1 como predeterminado
  });

  useEffect(() => {
    // Guardar el valor de currentButton en localStorage cada vez que cambie
    localStorage.setItem('currentButton', currentButton);
  }, [currentButton]);


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
              <Button
                variant={currentButton === 1 ? "contained" : "text"}
                size="small"
                onClick={() => {
                  setCurrentButton(1);
                }}


              >
                Clientes
              </Button>
            </NavLink>
            <NavLink to="/providers" >
              <Button
                variant={currentButton === 2 ? "contained" : "text"}
                size="small"
                onClick={() => {
                  setCurrentButton(2);
                }}
              >
                Proveedores
              </Button>
            </NavLink>
            <NavLink to="/users" >
              <Button
                variant={currentButton === 3 ? "contained" : "text"}
                size="small"
                onClick={() => {
                  setCurrentButton(3);
                }}
              >
                Usuarios
              </Button>
            </NavLink>
          </Box>
          <Box>
            <NavLink to="/log-out">
              <Button
                variant={currentButton === 4 ? "contained" : "outlined"}
                size="small"
                color="error"
                onClick={() => {
                  setCurrentButton(4);
                }}
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




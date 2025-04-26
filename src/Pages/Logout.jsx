import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Stack, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { AppContext } from '../App.jsx' // Importa el contexto desde el archivo App.jsx


const Logout = () => {
    const [loggedOut, setLoggedOut] = useState(false);
    const navigate = useNavigate();
    const { setCurrentButton } = useContext(AppContext); // Use the context to access setCurrentButton

    const handleNo = () => {
        navigate('/clients');
        setCurrentButton(1); // Update the current button using the context
    };

    const handleYes = () => {
        setLoggedOut(true);
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
            minHeight="100vh"
            sx={{ margin: '2rem' }}
        >
            {!loggedOut ? (
                <>
                    <Stack spacing={2} direction="column" alignItems="center">
                        <Typography variant="h3">¿Quieres cerrar la sesión?</Typography>
                        <Stack spacing={2} direction="row" alignItems="center">
                            <Button variant="contained" color="primary" onClick={handleYes} style={{ margin: '0.5rem' }}>
                                Sí
                            </Button>
                            <Button variant="contained" color="error" onClick={handleNo} style={{ margin: '0.5rem' }}>
                                No
                            </Button>
                        </Stack>
                    </Stack>
                </>
            ) : (
                <Stack spacing={2} direction="row" alignItems="center">
                    <Typography variant="h3">
                        Sesión cerrada exitosamente
                    </Typography>
                    <CheckCircleIcon style={{ color: 'green', fontSize: '2rem' }} />
                </Stack>
            )}
        </Box>
    );
};

export default Logout;
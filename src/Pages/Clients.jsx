import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';

const Clients = () => {
    const clientsData = [
        { nombre: 'Juan Pérez', edad: 30, compras: 5, imagen: 'https://static.wikia.nocookie.net/pizzatower/images/d/d2/Idle_demo1.gif' },
        { nombre: 'Ana Gómez', edad: 25, compras: 8, imagen: 'https://static.wikia.nocookie.net/pizzatower/images/5/56/Brickgus.gif' },
        { nombre: 'Carlos López', edad: 40, compras: 2, imagen: 'https://static.wikia.nocookie.net/pizzatower/images/8/82/Vigi_idle.gif' },
        { nombre: 'María Fernández', edad: 35, compras: 10, imagen: 'https://static.wikia.nocookie.net/pizzatower/images/1/16/Spr_pepperman_idle_0.gif' },
        { nombre: 'Luis Martínez', edad: 28, compras: 7, imagen: 'https://static.wikia.nocookie.net/pizzatower/images/3/38/PresentNoise.gif' },
        { nombre: 'Sofía Ramírez', edad: 22, compras: 3, imagen: 'https://static.wikia.nocookie.net/pizzatower/images/5/5c/Gerome_idle.gif' },
    ];

    return (
        <div style={{ margin: '2rem' }}>
            <Typography variant="h3" gutterBottom>
                Clientes
            </Typography>
            <Grid container spacing={4}>
                {clientsData.map((client, index) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                image={client.imagen}
                                alt={client.nombre}
                                style={{ objectFit: 'contain' }}
                            />
                            <CardContent>
                                <Typography variant="h6" component="div" gutterBottom>
                                    {client.nombre}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Edad: {client.edad}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Número de compras: {client.compras}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Clients;
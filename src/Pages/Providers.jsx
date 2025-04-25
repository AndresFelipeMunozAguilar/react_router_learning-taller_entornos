import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Providers = () => {
    const providersData = [
        { empresa: 'Tech Supplies', correo: 'contact@techsupplies.com', producto: 'Hardware', cantidad: 300, activo: true },
        { empresa: 'Eco Goods', correo: 'info@ecogoods.com', producto: 'Recycled Materials', cantidad: 150, activo: false },
        { empresa: 'Fresh Foods', correo: 'support@freshfoods.com', producto: 'Groceries', cantidad: 500, activo: true },
        { empresa: 'Auto Gear', correo: 'sales@autogear.com', producto: 'Car Parts', cantidad: 100, activo: false },
        { empresa: 'Style Trends', correo: 'hello@styletrends.com', producto: 'Fashion Accessories', cantidad: 250, activo: true },
    ];

    return (
        <div style={{ margin: '2rem' }}>
            <TableContainer component={Paper}>
                <Table elevation={5}>
                    <TableHead>
                        <TableRow style={{ backgroundColor: '#1976d2', color: 'white' }}>
                            <TableCell style={{ color: 'white', textAlign: 'center', verticalAlign: 'middle' }}>Nombre de la Empresa</TableCell>
                            <TableCell style={{ color: 'white', textAlign: 'center', verticalAlign: 'middle' }}>Correo de Contacto</TableCell>
                            <TableCell style={{ color: 'white', textAlign: 'center', verticalAlign: 'middle' }}>Producto</TableCell>
                            <TableCell style={{ color: 'white', textAlign: 'center', verticalAlign: 'middle' }}>Cantidad de Productos Comprados</TableCell>
                            <TableCell style={{ color: 'white', textAlign: 'center', verticalAlign: 'middle' }}>Activo</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {providersData.map((provider, index) => (
                            <TableRow
                                key={index}
                                style={{
                                    backgroundColor: index % 2 === 0 ? 'white' : '#f5f5f5',
                                }}
                            >
                                <TableCell
                                    style={{ textAlign: 'center', verticalAlign: 'middle' }}
                                >
                                    {provider.empresa}
                                </TableCell>
                                <TableCell
                                    style={{ textAlign: 'center', verticalAlign: 'middle' }}
                                >
                                    {provider.correo}
                                </TableCell>
                                <TableCell
                                    style={{ textAlign: 'center', verticalAlign: 'middle' }}
                                >
                                    {provider.producto}
                                </TableCell>
                                <TableCell
                                    style={{ textAlign: 'center', verticalAlign: 'middle' }}
                                >
                                    {provider.cantidad}
                                </TableCell>
                                <TableCell
                                    style={{
                                        textAlign: 'center',
                                        verticalAlign: 'middle',
                                        color: provider.activo ? '#067034' : '#918f8e',
                                    }}
                                >
                                    {provider.activo ? 'Activo' : 'Inactivo'}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Providers;
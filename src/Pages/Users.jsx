import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Users = () => {
    const usersData = [
        { nombre: 'Juan Pérez', correo: 'juan.perez@example.com', rol: 'Administrador', estado: true, fechaRegistro: '2023-01-15' },
        { nombre: 'Ana Gómez', correo: 'ana.gomez@example.com', rol: 'Usuario', estado: false, fechaRegistro: '2023-02-10' },
        { nombre: 'Carlos López', correo: 'carlos.lopez@example.com', rol: 'Moderador', estado: true, fechaRegistro: '2023-03-05' },
        { nombre: 'María Fernández', correo: 'maria.fernandez@example.com', rol: 'Usuario', estado: true, fechaRegistro: '2023-04-20' },
        { nombre: 'Luis Martínez', correo: 'luis.martinez@example.com', rol: 'Administrador', estado: false, fechaRegistro: '2023-05-12' },
    ];

    return (
        <div style={{ margin: '2rem' }}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow style={{ backgroundColor: '#1976d2', color: 'white' }}>
                            <TableCell style={{ color: 'white', textAlign: 'center' }}>Nombre Completo</TableCell>
                            <TableCell style={{ color: 'white', textAlign: 'center' }}>Correo Electrónico</TableCell>
                            <TableCell style={{ color: 'white', textAlign: 'center' }}>Rol</TableCell>
                            <TableCell style={{ color: 'white', textAlign: 'center' }}>Estado</TableCell>
                            <TableCell style={{ color: 'white', textAlign: 'center' }}>Fecha de Registro</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {usersData.map((user, index) => (
                            <TableRow
                                key={index}
                                style={{
                                    backgroundColor: index % 2 === 0 ? 'white' : '#f5f5f5',
                                }}
                            >
                                <TableCell style={{ textAlign: 'center' }}>{user.nombre}</TableCell>
                                <TableCell style={{ textAlign: 'center' }}>{user.correo}</TableCell>
                                <TableCell style={{ textAlign: 'center' }}>{user.rol}</TableCell>
                                <TableCell style={{ textAlign: 'center' }}>{user.fechaRegistro}</TableCell>
                                <TableCell
                                    style={{
                                        textAlign: 'center',
                                        color: user.estado ? '#067034' : '#918f8e',
                                    }}
                                >
                                    {user.estado ? 'Activo' : 'Inactivo'}
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Users;
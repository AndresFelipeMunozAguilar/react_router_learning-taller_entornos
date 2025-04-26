import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Logout = () => {
    const [loggedOut, setLoggedOut] = useState(false);
    const navigate = useNavigate();

    const handleNo = () => {
        navigate('/clients');
    };

    const handleYes = () => {
        setLoggedOut(true);
    };

    return (
        <div style="{{ margin: '2rem'}}">
            {!loggedOut ? (
                <div>
                    <h1>¿Quieres cerrar sesión?</h1>
                    <button onClick={handleYes}>Sí</button>
                    <button onClick={handleNo}>No</button>
                </div>
            ) : (
                <div>
                    <h1>Sesión cerrada exitosamente</h1>
                    <CheckCircleIcon style={{ color: 'green', fontSize: '2rem' }} />
                </div>
            )}
        </div>
    );
};

export default Logout;
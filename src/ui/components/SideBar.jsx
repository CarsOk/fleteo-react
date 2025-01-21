import React, { useContext } from 'react';
import { FaUsers } from 'react-icons/fa';
import { AuthContext } from '../../auth/context/AuthContext';
import { FiLogOut } from 'react-icons/fi';
import { useMenu } from '../../context/MenuContext';
import { NameUserView, Buttons } from './';

export const SideBar = () => {
  const { logOut, user } = useContext(AuthContext);
  const { isOpen, toggleMenu } = useMenu();

  return (
    <div
      className={`d-flex flex-column bg-light text-black`}
      style={{
        height: '100vh',
        width: '250px',
        position: 'fixed',
        top: '0',
        left: '0',
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)', 
        transition: 'transform 0.3s ease-in-out', // Animación suave
        zIndex: '1000',
      }}
    >
			{/* Fondo negro donde va el user */}
			<NameUserView name={ user.name } toggleMenu={ toggleMenu }/>
			
			{/* Contenedor de botones */}
			<div className="d-flex flex-column align-items-start">

			{/* Boton de usuarios */}
			<Buttons fuctions={() => { console.log('usuarios'); }} >
				<FaUsers size={25} color="#d3d3d3" style={{ margin: '10px' }}/>
				<span className="fs-5" style={{ color: '#666', fontWeight: '300' }}>Usuarios</span>
			</Buttons>

			{/* Boton de Logout */}
			<Buttons fuctions={ logOut } >
				<FiLogOut size={25} color="#d3d3d3" style={{ margin: '10px' }}/>
				<span className="fs-5" style={{ color: '#666', fontWeight: '300' }}>Salir</span>
			</Buttons>

			</div>
    </div>
  );
};

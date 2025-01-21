import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';
import { useMenu } from '../../context/MenuContext'; 

export const NavBar = () => {
  const { toggleMenu } = useMenu();

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-dark shadow-lg pb-2 pt-2">
      <div className="container-fluid">
        <div className="d-flex justify-content-between w-100">

          {/* Icono de menú */}
          <div className='d-flex align-items-center'>
            <button onClick={ toggleMenu } style={{ background: 'transparent', border: 'none' }}>
              <FaBars size={30} color="#d3d3d3" />
            </button>
          </div>

          {/* Texto 'Fleteo' */}
          <p className="custom-light-gray d-flex align-items-center justify-content-center fs-4 fw-light m-0">
            FLETEO
          </p>

          {/* Botón de búsqueda */}
          <button
            className="btn d-flex align-items-center ms-2"
            style={{ background: 'transparent', border: 'none', color: '#d3d3d3' }}
          >
            <span className="me-2">Buscar</span>
            <FiSearch size={20} />
          </button>

        </div>
      </div>
    </nav>
  );
};

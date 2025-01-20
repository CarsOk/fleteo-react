import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { AuthContext } from '../../auth/context/AuthContext';
import logo from '../../assets/img/fleteo-logo.png';

export const NavBar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);

  const logout = () => {
    logOut();
    navigate('/login', { replace: true });
  };

  const onSubmit = (e) => {
    console.log('hola');
    e.preventDefault();
  }

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow">
      <div className="container-fluid">

        {/* Contenedor logo */}
        <div className="d-flex justify-content-center mt-2 mb-3" style={{ maxWidth: '100px', flexGrow: 1 }}>
          <img src={logo} className="img-fluid w-50 h-auto" alt="Logo" />
        </div>

        {/* Botón que aparece al ser dispositivo pequeño */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

					{/* Textos */}
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Colaborar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true"> { user && user.name } </a>
            </li>
          </ul>

          {/* Contenedor para el campo de búsqueda */}
          <form onSubmit={onSubmit} className="d-flex ms-auto w-100 w-sm-auto" style={{ maxWidth: '500px' }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar..."
              aria-label="Search"
            />
          </form>

          {/* Botón de logout */}
          <button className="btn btn-outline-danger d-flex align-items-center ms-2" onClick={logout}>
            <FiLogOut size={20} />
            <span className="ms-2 d-none d-md-inline">Logout</span> {/* Solo visible en pantallas medianas y mayores */}
          </button>
					
        </div>
      </div>
    </nav>
  );
};

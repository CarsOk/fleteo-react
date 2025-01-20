import { useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const { onLogin } = useContext(AuthContext);

  // Validar si el campo está vacío mientras se escribe
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Si el campo está vacío, mostrar el mensaje de "Campo obligatorio"
    if (!value) {
      setErrorMessage('Campo obligatorio.');
    } else {
      setErrorMessage('');  // Si el campo tiene texto, borrar el mensaje de error
    }
  };

  // Validar cuando el input pierde el foco
  const handleBlur = () => {
    if (!email) {
      setErrorMessage('Campo obligatorio.');
    }
  };

  const lastPath = localStorage.getItem('lastPath') || '/';

  const login = (e) => {
    e.preventDefault(); // Evitar el comportamiento por defecto del formulario (recarga de página)

    // Si el email está vacío, no hacer login
    if (!email) {
      setErrorMessage('Campo obligatorio.');
      return;
    }

    // Aquí puedes hacer el login, por ejemplo, con un usuario ficticio
    onLogin(email);
    navigate(lastPath, { replace: true });
  };

  return (
    <div className="card p-3 border-0" style={{ width: '18rem' }}>
      <p className="mb-3 fs-6" style={{ fontWeight: 300 }}>Usuario o correo electrónico</p>
      <form onSubmit={login}>
        <div className="mb-4">
          <input
            type="text"
            className="form-control border-1"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleBlur}
            // Agregar el atributo "required" para asegurar que no pueda ser vacío
            required
          />
          {/* Mostrar el mensaje de error si hay uno */}
          {errorMessage && (
            <small className="text-danger mt-2 d-block" style={{ fontSize: '0.75rem' }}>
              {errorMessage}
            </small>
          )}
        </div>

        {/* Deshabilitar el botón si el campo está vacío */}
        <button 
          type="submit" 
          className="btn btn-dark w-100 h-50 fs-5" 
          disabled={!email}  // El botón estará deshabilitado si el email está vacío
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

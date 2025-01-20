import logo from '../assets/img/fleteo-logo.png';
import { FormLogin } from './Components/FormLogin';

export const LoginPage = () => {
  return (
    <>
      {/* Toda pantalla */}
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light flex-column">
        
        <div className='position-absolute top-0'>
          
          {/* Contenedor del logo */}
          <div className="d-flex justify-content-center mt-2 mb-3" style={{ width: '100px', marginLeft: '90px' }}>
            <img src={logo} className="img-fluid w-75 h-auto" alt="Logo" />
          </div>

          {/* Título de inicio de sesión */}
          <h4 className="text-center mb-3">Inicio de sesión</h4>

          {/* Formulario */}
          <FormLogin />
        </div>
        
      </div>
    </>
  );
};

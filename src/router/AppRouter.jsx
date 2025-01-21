import { Routes, Route } from 'react-router-dom';

import { LoginPage } from '../auth/LoginPage';
import { PiublicRouters } from './PiublicRouters';
import { PrivateRouters } from './PrivateRouters';
import { HomePages } from '../pages/HomePages';
import { MenuProvider } from '../context/MenuContext';

export const AppRouter = () => {
  return (
    <Routes>
      {/* Solo los usuarios no logueados pueden acceder a esta ruta */}
      <Route path='/login' element={
        <PiublicRouters>
          <LoginPage />
        </PiublicRouters>
      }/>

      {/* Rutas privadas, accesibles solo si el usuario está logueado */}
      <Route path='/*' element={
        <PrivateRouters>
          {/* Envolvemos HomePages con MenuProvider para que el estado del menú sea global */}
          <MenuProvider>
            <HomePages />
          </MenuProvider>
        </PrivateRouters>
      }/>
    </Routes>
  );
};

import { Routes, Route,  } from 'react-router-dom';

import { LoginPage } from '../auth/LoginPage';
import { PrivateRouters } from './PrivateRouters';
import { PiublicRouters } from './PiublicRouters';
import { HomePages } from '../pages/HomePages';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Solo los usuarios no logueados pueden acceder a esta ruta */}
        <Route path='/login' element={
          <PiublicRouters>
            <LoginPage/>
          </PiublicRouters>
        }/>

        {/* Rutas privadas, accesibles solo si el usuario está logueado */}
        <Route path='/*' element={
          <PrivateRouters>
            <HomePages/>
          </PrivateRouters>
        }/>
      </Routes>
    </>
  );
};


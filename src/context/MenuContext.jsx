import React, { createContext, useContext, useState } from 'react';

// Creamos el contexto
const MenuContext = createContext();

// El provider que manejará el estado del menú
export const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => setIsOpen(prevState => !prevState);

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useMenu = () => useContext(MenuContext);

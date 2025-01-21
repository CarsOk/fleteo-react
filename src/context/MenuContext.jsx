import React, { createContext, useContext, useState } from 'react';

// Creamos el contexto
const MenuContext = createContext();


export const MenuProvider = ({ children }) => {

  // El provider que manejará el estado del menú
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prevState => !prevState);


  // El provider que manejará el estado del search
  const [overlay, setOverlay] = useState(false);
  const toggleSearch = () => setOverlay(prevState => !prevState);

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu, overlay, toggleSearch }}>
      {children}
    </MenuContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useMenu = () => useContext(MenuContext);

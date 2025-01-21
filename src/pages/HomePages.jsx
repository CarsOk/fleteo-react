import React from 'react';
import { NavBar } from '../ui/components/NavBar';
import { SideBar } from '../ui/components/SideBar';
import { Search } from '../ui/components/Search';

export const HomePages = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <Search/>
    </>
  );
};

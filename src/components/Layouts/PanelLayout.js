import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';

function PanelLayout() {
  return(
    <>
      <Header/>
      <Outlet />
    </>
  );
}

export default PanelLayout;

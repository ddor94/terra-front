import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import { currentUser } from '../../utils/helpers/auth';
import { getCurrentUser } from '../../apiCalls/auth';
import { useQuery } from '@apollo/client';

function PanelLayout() {
  const { loading, error, data } = useQuery(getCurrentUser);

  return(
    <>
      <Header />
      <div className="container mx-auto">
        <Outlet />
        {console.log(data)}
      </div>
    </>
  );
}

export default PanelLayout;

import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import { currentUser } from '../../apiCalls/auth';
import { useQuery } from '@apollo/client';

function PanelLayout() {
  const { loading, error, data } = useQuery(currentUser);

  if (error) {
    console.log(error);
  }

  return(
    <>
      <Header
        loadingUser={loading}
        user={data?.currentUser.user}
      />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </>
  );
}

export default PanelLayout;

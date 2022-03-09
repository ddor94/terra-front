import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import { storedUser } from '../../utils/helpers/auth';
import { currentUser } from '../../apiCalls/auth';
import { useQuery } from '@apollo/client';

function PanelLayout() {
  const { loading, error, data } = useQuery(currentUser);

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

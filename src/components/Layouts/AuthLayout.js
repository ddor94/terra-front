import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function AuthLayout() {
  useEffect(() => {
    document.body.className = 'bg-pink-50';
    return () => { document.body.className = ''; }
  });

  return(
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-7 rounded-md shadow-lg">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout;

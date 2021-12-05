import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { context } from './AppProvider';

function ProtectedRouter({ children }: any) {
  const { isLogined } = useContext<any>(context);
  if (isLogined) {
    return children;
  }
  return <Navigate to='/login' replace={true} />;
}

export default ProtectedRouter;

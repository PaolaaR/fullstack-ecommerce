import React, { useContext, useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { UserContext } from '../../context/User/UserContext';
import Spinner from 'react-bootstrap/Spinner';

export const PrivateRoute = ({ component: Component, ...props }) => {
  const userCtx = useContext(UserContext);
  const { authStatus, verifyingToken } = userCtx;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await verifyingToken();
      setLoading(false);
    };

    fetchData();
  }, [authStatus]);

  if (loading) {
    return <Spinner animation="grow" />;
  }

  return authStatus ? (
    <Component {...props} />
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

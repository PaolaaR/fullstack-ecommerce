import React, { useContext, useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { UserContext } from '../../context/User/UserContext';

export const AuthRoute = ({ component: Component, ...props }) => {
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
    <Navigate to="/" />
  ) : (
    <Component {...props} />
  );
};

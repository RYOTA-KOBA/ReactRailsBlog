import React, { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

type C = {
  children?: React.ReactNode;
};

const Auth: React.FC<C> = ({ children }: any) => {
  const { getUserData, isSignedIn }: any = useAuth();

  useEffect(() => {
    if (!isSignedIn) {
      getUserData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isSignedIn) {
    return <></>;
  } else {
    return children;
  }
};

export default Auth;

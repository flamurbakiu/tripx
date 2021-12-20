import React, { useState } from 'react';

export const AuthContext = React.createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const getLoggedIn = localStorage.getItem('loggedIn');
  const [loggedIn, setLoggedIn] = useState(
    getLoggedIn === 'true' ? true : false
  );

  const loginHandler = () => {
    localStorage.setItem('loggedIn', true);
    setLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('loggedIn', false);
    setLoggedIn(false);
  };

  const contextValue = {
    isLoggedIn: loggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

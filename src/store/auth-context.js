import React, { useState } from 'react';

export const AuthContext = React.createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const loggedIn = localStorage.getItem('loggedIn');
  const [isLoggedIn, setIsLoggedIn] = useState(loggedIn);

  const loginHandler = () => {
    localStorage.setItem('loggedIn', true);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('loggedIn', false);
    setIsLoggedIn(false);
  };

  const contextValue = {
    isLoggedIn: isLoggedIn,
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

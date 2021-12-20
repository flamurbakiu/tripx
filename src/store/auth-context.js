import React, { useState } from 'react';

export const AuthContext = React.createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  failedAttempt: 0,
  failedAttemptFunc: () => {},
});

const AuthContextProvider = (props) => {
  const getLoggedIn = localStorage.getItem('loggedIn');
  const [loggedIn, setLoggedIn] = useState(
    getLoggedIn === 'true' ? true : false
  );

  const [countFailedAttempt, setCountFailedAttempt] = useState(0);

  const loginHandler = () => {
    localStorage.setItem('loggedIn', true);
    setLoggedIn(true);
    setCountFailedAttempt(0);
  };

  const logoutHandler = () => {
    localStorage.setItem('loggedIn', false);
    setLoggedIn(false);
    setCountFailedAttempt(0);
  };

  const failedAttempHandler = () => {
    setCountFailedAttempt((prev) => prev + 1);
  };

  const contextValue = {
    isLoggedIn: loggedIn,
    login: loginHandler,
    logout: logoutHandler,
    failedAttempt: countFailedAttempt,
    failedAttemptFunc: failedAttempHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

import { Link, NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import './MainNavigation.css';
import { useContext } from 'react';
import { AuthContext } from '../../store/auth-context';
import { useHistory } from 'react-router-dom';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = () => {
    authCtx.logout();
    history.push('/');
  };

  return (
    <header className={classes.header}>
      <Link to='/' className={classes.logo}>
        TripX
      </Link>
      <nav className={classes.nav}>
        <ul>
          {authCtx.isLoggedIn && (
            <li>
              <NavLink to='/destinations'>Destinations</NavLink>
            </li>
          )}

          {!authCtx.isLoggedIn && (
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <button onClick={logoutHandler} className={classes.btn}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

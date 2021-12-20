import { Redirect, Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LoginPage from './pages/LoginPage';
import DestinationPage from './pages/DestinationPage';
import { useContext } from 'react';
import { AuthContext } from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
          {authCtx.isLoggedIn && <Redirect to='/destinations' />}
        </Route>

        {!authCtx.isLoggedIn && (
          <Route path='/login' exact>
            <LoginPage />
          </Route>
        )}

        {authCtx.isLoggedIn && (
          <Route path='/destinations' exact>
            <DestinationPage />
          </Route>
        )}
      </Switch>
    </Layout>
  );
}

export default App;

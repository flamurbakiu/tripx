import React, { Suspense, useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext } from './store/auth-context';

import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const DestinationPage = React.lazy(() => import('./pages/DestinationPage'));

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Suspense
        fallback={
          <div className='centered'>
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path='/' exact>
            {!authCtx.isLoggedIn && <Redirect to='/login' />}
            {authCtx.isLoggedIn && <Redirect to='/destinations' />}
          </Route>

          <Route path='/login' exact>
            {!authCtx.isLoggedIn && <LoginPage />}
            {authCtx.isLoggedIn && <Redirect to='/destinations' />}
          </Route>

          <Route path='/destinations' exact>
            {authCtx.isLoggedIn && <DestinationPage />}
            {!authCtx.isLoggedIn && <Redirect to='/login' />}
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;

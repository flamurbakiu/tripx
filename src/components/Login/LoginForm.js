import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../store/auth-context';

import classes from './LoginForm.module.css';

const LoginForm = () => {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // option: validation

    setIsLoading(true);

    fetch('https://tripx-test-functions.azurewebsites.net/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username: enteredUsername,
        password: enteredPassword,
      }),

      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        console.log(res);

        if (res.ok) {
          usernameInputRef.current.value = '';
          passwordInputRef.current.value = '';

          authCtx.login();
          console.log(authCtx.isLoggedIn);

          history.push('/destinations');
          return;
        } else {
          if (res.status === 400) {
            throw new Error('Username or password is wrong!');
          } else {
            throw new Error('Something went wrong!');
          }
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='username'>Your Username</label>
          <input type='text' id='username' required ref={usernameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>Login</button>}
          {isLoading && <p>Sending request...</p>}
        </div>
      </form>
    </section>
  );
};

export default LoginForm;

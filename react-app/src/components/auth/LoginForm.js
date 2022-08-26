import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  const demoLogin = () => {
    let email = 'demo@aa.io'
    let password = 'password'
    setEmail(email)
    setPassword(password)
    dispatch(login(email, password));
  }
  //

  return (<div className='Signup-LoginBody' style={{ justifyContent: "center" }}>
    <h4>Feel Free to Login to get the best experience.</h4>

    <div className='SignUp-LoginFormDiv'>
      <form className="SignUp-LoginForm" onSubmit={onLogin}>
        <div className='ActualForm'>

          <div >
            {errors.map((error, ind) => (
              <div className="errors" key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
          </div>
          <button type='submit' className='CreateCommentConfirmButton' style={{ width: "90px", border: "2px solid black" }}>Login</button>
          <button onClick={demoLogin} className='CreateCommentConfirmButton' style={{ marginTop: "25px" }}>Demo Login</button>
        </div>
        <div className='nothing'></div>
      </form>
    </div>
    <div className='h4Div'>
    </div>
  </div>
  );
};

export default LoginForm;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import { NavLink } from 'react-router-dom';

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

  return (<div className='Signup-LoginBody' >

    <div className='h2Div'>
      <h2
      >Welcome to 'YourTv'. The website where you can share videos of your favorite life moments and share them with people all around the world. Share music, vlogging, gaming, cooking, or any other kind of video you would like. </h2>
    </div>
    <div className='SignUp-Center-Box'>
      <div className='SignUp-VideoPreviews-Box'>
        <img className="SignUp-Video" id="SignUp-Video1" src='https://i.ytimg.com/vi/kYpxolRkaSo/maxresdefault.jpg' alt="Clément Mihailescu" />
        <img className="SignUp-Video" id="SignUp-Video2" src='https://i.ytimg.com/vi/cV2gBU6hKfY/mqdefault.jpg' alt="mr. beast" />
        <img className="SignUp-Video" id="SignUp-Video3" src='https://i.ytimg.com/vi/RRKJiM9Njr8/maxresdefault.jpg' alt="my chemical romance" />
      </div>
      <div className='SignUp-LoginFormDiv'>
        <h1 id='YourTvTitle'> YourTv</h1>
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
                className='Signup-Login-Form-Input'
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
                className='Signup-Login-Form-Input'
                name='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={updatePassword}
              />
            </div>
            <button type='submit' className='CreateCommentConfirmButton' style={{ width: "90px", border: "2px solid black" }}>Login</button>
          </div>
        </form>
        <NavLink className='login-link' to='/sign-up'> Create A New Account</NavLink>
        <button onClick={demoLogin} className='DemoLoginButton'>Demo Login</button>
      </div>
    </div>
  </div>
  );
};

export default LoginForm;

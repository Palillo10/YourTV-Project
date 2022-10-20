import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
// import { login } from '../../store/session';
import './signup-login.css'
const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [channel_name, setChannel_Name] = useState('');
  const [full_name, setFull_Name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(channel_name, email, password, full_name));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(["Password and Repeat Password must match"])
    }
  };

  const updateUsername = (e) => {
    setChannel_Name(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }


  // const demoLogin = () => {
  //   let email = 'demo@aa.io'
  //   let password = 'password'
  //   dispatch(login(email, password));
  // }

  return (<div className='Signup-LoginBody'>

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
        <form className="SignUp-LoginForm" onSubmit={onSignUp}>
          <div className='ActualForm'>

            <div >
              {errors.map((error, ind) => (
                <div className="errors" key={ind}>{error}</div>
              ))}
            </div>
            <div>
              <label>Full Name</label>
              <input
                className='Signup-Login-Form-Input'
                type='text'
                name='full_name'
                placeholder='Full Name'
                onChange={e => setFull_Name(e.target.value)}
                value={full_name}
              ></input>
            </div>
            <div>
              <label>Channel Name</label>
              <input
                className='Signup-Login-Form-Input'
                type='text'
                name='channel_name'
                placeholder='Channel Name'
                onChange={updateUsername}
                value={channel_name}
              ></input>
            </div>
            <div>
              <label>Email</label>
              <input
                className='Signup-Login-Form-Input'
                type='text'
                name='email'
                placeholder='Email'
                onChange={updateEmail}
                value={email}
              ></input>
            </div>
            <div>
              <label>Password</label>
              <input
                className='Signup-Login-Form-Input'
                type='password'
                name='password'
                placeholder='Password'
                onChange={updatePassword}
                value={password}
              ></input>
            </div>
            <div>
              <label>Repeat Password</label>
              <input
                className='Signup-Login-Form-Input'
                type='password'
                name='repeat_password'
                placeholder='Repeat Password'
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
              ></input>
            </div>
            <button type='submit' className='CreateCommentConfirmButton' style={{ width: "90px", border: "2px solid black" }}>Sign Up</button>
          </div>
        </form>
        <NavLink className='login-link' to='/login'> Already Have An Account?</NavLink>
      </div>
    </div>
  </div>
  );
};

export default SignUpForm;

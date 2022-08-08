import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './functionality/auth/LoginForm';
import SignUpForm from './functionality/auth/SignUpForm';
import NavBar from './functionality/NavBar';
// import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './functionality/UsersList';
import VideosList from './functionality/videos/VideosList';
import User from './functionality/User';
import { authenticate } from './store/session';
import WatchVideo from './functionality/videos/WatchVideo';
import CommentsList from './functionality/comments.js/CommentsList';
import VideoTest from './functionality/VIdeoTest';
import SideBar from './styling/SideBar/Siderbar';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sidebar' exact={true}>
          <SideBar />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/users' exact={true} >
          <UsersList />
        </Route>
        <Route path='/users/:userId' exact={true} >
          <User />
        </Route>
        <Route path='/videos' exact={true}>
          <VideosList />
        </Route >
        <Route path='/comments' exact={true}>
          <CommentsList />
        </Route >
        <Route path={`/watch-:videoId`} exact={true}>
          <WatchVideo />
        </Route >
        <Route path={`/test`} exact={true}>
          <VideoTest />
        </Route >
        <Route path='/' exact={true} >
          <h1>My Home Page</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/navigation/NavBar';
import UsersList from './components/UsersList';
import SearchResults from './components/videos/SearchResults';
import User from './components/User';
import { authenticate } from './store/session';
import WatchVideo from './components/videos/WatchVideo';
import VideoTest from './components/VIdeoTest';
import HomePage from './components/HomePage.js/HomePage';


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
      <div id="ModalBackground">
      </div>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
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
        <Route path="/results¿search_query=':searchTerm'" exact={true}>
          <SearchResults />
        </Route >
        <Route path={`/watch-:videoId`} exact={true}>
          <WatchVideo />
        </Route >
        <Route path={`/test`} exact={true}>
          <VideoTest />
        </Route >
        <Route path='/' exact={true} >
          <HomePage />
        </Route>
        <Route path="">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

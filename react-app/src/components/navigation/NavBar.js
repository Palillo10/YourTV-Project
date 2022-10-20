
import React from 'react';
import { NavLink } from 'react-router-dom';
// import SideBar from './Siderbar';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'
import { useSelector } from 'react-redux';
// import CreateVideoModal from './CreateVideo/CreateVideoModal';
import SearchBar from './SearchBar/SearchBar';
import UploadFormIcon from './CreateVideo/UploadFormIcon';


const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <>
        {/* <div className="NavListItem">
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </div> */}
        {/* <div className="NavListItem">
          <NavLink to='/videos' exact={true} activeClassName='active'>
            Videos
          </NavLink>
        </div> */}

        <div className="NavListItem" >
          {/* <CreateVideoModal user={sessionUser} /> */}
          <UploadFormIcon />
        </div>

        <div className="NavListItem">
          Welcome {sessionUser.channel_name}
        </div>

        <div className="NavListItem">
          <LogoutButton />
        </div>
      </>
    )
  } else {
    sessionLinks = (
      <>
        <div className="NavListItem">
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </div>
        <div className="NavListItem">
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div>
      </>
    )
  }
  return (
    <div className='NavBarContainer'>
      <div className='NavBarLeft'>
        {/* <SideBar /> */}
        <div className="LogoContainer">
          <NavLink to='/' className="LogoLink" exact={true} activeClassName='active'>
            <div className='LogoPlayButton'>
              <div className='LogoTriangle'></div>
            </div>
            YourTv
          </NavLink>
        </div>
      </div>
      <div className='NavBarCenter'>
        <SearchBar />
      </div>
      <div className='NavBarRight'>
        {sessionLinks}

      </div>
    </div >
  );
}

export default NavBar;

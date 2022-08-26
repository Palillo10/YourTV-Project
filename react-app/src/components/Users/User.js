import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleUserThunk } from '../../store/user';
import './UserPage.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { getVideosThunk } from '../../store/videos';
import { NavLink } from 'react-router-dom'

function User() {
  const { channelName } = useParams();
  const dispatch = useDispatch()
  const user = useSelector(state => state.users[channelName])
  const videos = useSelector(state => state.videos)

  useEffect(() => {
    dispatch(getSingleUserThunk(channelName))
    dispatch(getVideosThunk())
  }, [channelName]);

  if (!user || !videos) {
    return null;
  }


  const userVideos = Object.values(videos).filter(video => video.user_id === user.id)



  return (<>
    <div className='UserPageBody'>
      <div className='SideBarLinksContainer'>
        <a href="https://github.com/Palillo10/YourTV-Project" target="_blank" rel="noopener noreferrer" style={{ height: "26px", width: "26px", margin: "10px 0" }} >
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/isaac-diaz-459a52241/" target="_blank" rel="noopener noreferrer" style={{ height: "26px", width: "26px", margin: "10px 0" }} >
          <LinkedInIcon />
        </a>
        <a href="https://www.python.org/doc/" target="_blank" rel="noopener noreferrer" style={{ height: "26px", width: "26px", margin: "10px 0" }} >
          <i className="fa-brands fa-python fa-2xl"></i>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" style={{ height: "26px", width: "26px", margin: "10px 0" }} >
          <i className="fa-brands fa-js fa-2xl"></i>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/css" target="_blank" rel="noopener noreferrer" style={{ height: "26px", width: "26px", margin: "10px 0" }} >
          <i className="fa-brands fa-css3-alt fa-2xl"></i>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" style={{ height: "26px", width: "26px", margin: "10px 0" }} >
          <i className="fa-brands fa-html5 fa-2xl"></i>
        </a>
        <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer" style={{ height: "26px", width: "26px", margin: "10px 0" }} >
          <i className="fa-brands fa-reacteurope fa-2xl"></i>
        </a>
        <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer" style={{ height: "26px", width: "26px", margin: "10px 0" }} >
          <i className="fa-brands fa-react fa-2xl"></i>
        </a>
        <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer" style={{ height: "26px", width: "26px", margin: "10px 0" }} >
          <i className="fa-brands fa-font-awesome fa-2xl"></i>
        </a>
        <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" style={{ height: "26px", width: "26px", margin: "10px 0" }} >
          <i className="fa-solid fa-database fa-2xl"></i>
        </a>
        <a href="https://flask.palletsprojects.com/en/2.1.x/" target="_blank" rel="noopener noreferrer" style={{ height: "26px", width: "26px", margin: "10px 0" }} >
          <i className="fa-solid fa-flask fa-2xl"></i>
        </a>
      </div>
      <div className='UserPageContainer'>
        <div className='UserPageTop'>
          <div className='UserPageDetails'>
            <img className='UserPageAvatar' src={user.avatar} />
            <h2 className='UserPageChannelName'>{user.channel_name}</h2>
          </div>
          <div className='UserPageNavBar'>
            <h3>Videos</h3>
          </div>
        </div>
        <div className='UserPageBottom'>
          <div className='UserPageVideosContainer'>
            {userVideos.map(video => (
              <div key={video.id} className='VideoCardOuter'>
                <div className='VideoCardInner'>

                  <NavLink to={`/watch-${video.id}`}>
                    <div className="UpperVideoCard">
                      <img className="VideoCardThumbnail" src={video.thumbnail} alt="alt" />
                    </div>
                    <div className='LowerVideoCard'>
                      <div className='VideoDetailLeft'>
                        <img className="VideoDetailAvatar" src={video.owner.avatar} alt="alt" />
                      </div>
                      <div className='VideoDetailRight'>
                        <div className='VideoDetailRightUpper'>
                          <div className='VideoDetailTitle'>{video.title}</div>
                        </div>
                        <div className='VideoDetailRightLower'>
                          <div className='VideoDetailOwner'>{video.owner.channel_name}</div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
export default User;

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getVideosThunk } from '../../store/videos'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './HomePage.css'

const HomePage = () => {
  const dispatch = useDispatch()
  let videos = Object.values(useSelector(state => state.videos))
  useEffect(() => {
    dispatch(getVideosThunk())
  }, [dispatch])


  // console.log(videos)
  if (!videos) return null

  videos = videos.sort(() => 0.5 - Math.random())

  return (<div className="HomePageBody">
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
    <div className='RecommendedVideosContainer'>
      <h2 style={{ marginLeft: "225px", marginBottom: "20px" }}>Recommended Videos</h2>
      <div className="RecommendedVideos">
        {videos.map(video => (
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
  </div >)
}


export default HomePage

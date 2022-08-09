import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getVideosThunk } from '../../store/videos'
import './HomePage.css'

const HomePage = () => {
  const dispatch = useDispatch()
  const videos = Object.values(useSelector(state => state.videos))
  useEffect(() => {
    dispatch(getVideosThunk())
  }, [dispatch])


  console.log(videos)
  if (!videos) return null

  return (<div className="HomePageBody">
    <div className='SideBarLinks'></div>
    <div className="RecommendedVideos">
      {videos.map(video => (
        <NavLink className="VideoCard" to={`/watch-${video.id}`}>
          <div >
            <div className="UpperVideoCard">
              <img className="VideoCardThumbnail" src={video.thumbnail ? video.thumbnail : "https://st4.depositphotos.com/17828278/24401/v/600/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg"} />
            </div>
            <div className='LowerVideoCard'>
              <h3>{video.title}</h3>
              <h3>{video.owner.channel_name}</h3>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  </div>)
}


export default HomePage

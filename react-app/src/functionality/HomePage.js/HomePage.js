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


  // console.log(videos)
  if (!videos) return null

  return (<div className="HomePageBody">
    <div className='SideBarLinksContainer'></div>
    <div className='RecommendedVideosContainer'>
      <div className="RecommendedVideos">
        {videos.map(video => (
          <div key={video.id} className='VideoCardOuter'>
            <div className='VideoCardInner'>

              <NavLink to={`/watch-${video.id}`}>
                <div className="UpperVideoCard">
                  <img className="VideoCardThumbnail" src={video.thumbnail ? video.thumbnail : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgdtC5sgMG3qe3ktKKoKWBmn4FKVvPKVGfSU-JrUpc4IoANXGPnV0gmbAvr7zzEGn464&usqp=CAU"} alt="alt" />
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

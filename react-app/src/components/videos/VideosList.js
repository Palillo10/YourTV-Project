import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVideosThunk } from '../../store/videos'

const VideosList = () => {
  const dispatch = useDispatch()
  const videos = useSelector(state => state.videos)
  console.log(Object.values(videos))


  useEffect(() => {
    dispatch(getVideosThunk())
  }, [dispatch])



  if (!videos) return null

  return (<div>
    {Object.values(videos).map(video => (
      <h2 key={video.id}>{video.title}</h2>
    ))}
  </div>)

}


export default VideosList

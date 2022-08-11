import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getVideosThunk } from '../../store/videos'
// import CreateVideoForm from './CreateVideoForm'

const VideosList = () => {
  const dispatch = useDispatch()
  const videos = useSelector(state => state.videos)
  // const sessionUser = useSelector(state => state.session.user)
  // const [openCreateForm, setOpenCreateForm] = useState(false)

  useEffect(() => {
    dispatch(getVideosThunk())
  }, [dispatch])



  if (!videos) return null

  return (<div>
    {/* {sessionUser && <>
      <button onClick={() => setOpenCreateForm(!openCreateForm)}>Upload Video</button>
      {openCreateForm && <CreateVideoForm user={sessionUser} />} </>} */}

    {Object.values(videos).map(video => (
      <h1 key={video.id}>
        <Link to={`/watch-${video.id}`}>{video.title}</Link>
      </h1>
    ))}
  </div>)

}


export default VideosList

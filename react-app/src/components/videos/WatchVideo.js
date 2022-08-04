import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { getVideosThunk } from "../../store/videos"


const WatchVideo = () => {
  const { videoId } = useParams()
  const dispatch = useDispatch()
  const video = useSelector(state => state.videos[videoId])

  useEffect(() => {
    dispatch(getVideosThunk())
  }, [dispatch])


  if (!video) return null

  return (<div>
    <button>Edit</button>

    <h1> {video.title}</h1>
    <p> {video.description}</p>
    {/* <img src={video.video_data} /> */}
    <img src={video.thumbnail} style={{ width: "225px", height: "150px" }} />
    <p> {video.created_at}</p>
    <div>
      <h1>Comments</h1>
      {video.comments.map(comment => (
        <div>
          <div> {comment.commenter.channel_name} </div>
          <div> {comment.body} </div>

        </div>
      ))}
    </div>
  </div>)
}


export default WatchVideo

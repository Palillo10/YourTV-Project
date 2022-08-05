import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getVideosThunk } from "../../store/videos"
import EditVideoForm from "./EditVideoForm"
import CreateCommentForm from "../comments.js/CreateCommentForm"

const WatchVideo = () => {
  const { videoId } = useParams()
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const [openCreateForm, setOpenCreateForm] = useState(false)
  const video = useSelector(state => state.videos[videoId])

  useEffect(() => {
    dispatch(getVideosThunk())
  }, [dispatch])


  if (!video) return null

  return (<div>
    <video></video>
    <h1> {video.title}</h1>
    <p> {video.description}</p>
    <video poster={video.thumbnail} controls style={{ width: "325px", height: "250px" }}>
      <source src={video.video_data} type="video/mp4" />
    </video>
    <p> {video.created_at}</p>
    <EditVideoForm video={video} />
    <div>
      <h1>Comments</h1>
      {sessionUser && <>
        <button onClick={() => setOpenCreateForm(!openCreateForm)}>Create Comment</button>
        {openCreateForm && <CreateCommentForm user={sessionUser} video={video} />} </>}
      {video.comments.map(comment => (
        <div key={comment.id}>
          <div> {comment.commenter.channel_name} </div>
          <div> {comment.body} </div>

        </div>
      ))}
    </div>
  </div>)
}


export default WatchVideo

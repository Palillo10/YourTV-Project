import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getVideosThunk } from "../../store/videos"
import EditVideoForm from "./EditVideoForm"
import CreateCommentForm from "../comments.js/CreateCommentForm"
import { getCommentsThunk } from "../../store/comments"
import EditCommentForm from "../comments.js/EditCommentForm"

const WatchVideo = () => {
  const { videoId } = useParams()
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const [openCreateForm, setOpenCreateForm] = useState(false)
  const video = useSelector(state => state.videos[videoId])
  const comments = Object.values(useSelector(state => state.comments))
  useEffect(() => {
    dispatch(getVideosThunk())
    dispatch(getCommentsThunk(videoId))
  }, [dispatch, videoId])


  if (!video) return null

  return (<div>
    <video></video>
    <h1> {video.title}</h1>
    <h4>Posted By: {video.owner.channel_name}</h4>
    <p> {video.description}</p>
    <video poster={video.thumbnail} controls style={{ width: "325px", height: "250px" }}>
      <source src={video.video_data} type="video/mp4" />
    </video>
    <p> {video.created_at}</p>
    {sessionUser && sessionUser.channel_name === video.owner.channel_name &&
      <EditVideoForm video={video} />}
    <div>
      <h1>Comments</h1>
      {sessionUser && <>
        <button onClick={() => setOpenCreateForm(!openCreateForm)}>Create Comment</button>
        {openCreateForm && <CreateCommentForm user={sessionUser} video={video} />} </>}
      {comments.map(comment => (
        <div key={comment.id}>
          <div> {comment.commenter.channel_name} </div>
          <div> {comment.body} </div>
          {sessionUser && sessionUser.channel_name === comment.commenter.channel_name &&
            <EditCommentForm user={comment.commenter} comment={comment} />}

        </div>
      ))}
    </div>
  </div>)
}


export default WatchVideo

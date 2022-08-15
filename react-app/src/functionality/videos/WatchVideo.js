import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getVideosThunk } from "../../store/videos"
import EditVideoForm from "./EditVideoForm"
import CreateCommentForm from "../comments.js/CreateCommentForm"
import { getCommentsThunk } from "../../store/comments"
import EditCommentForm from "../comments.js/EditCommentForm"
import './WatchVideo.css'

const WatchVideo = () => {
  const { videoId } = useParams()
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const [openCreateForm, setOpenCreateForm] = useState(false)
  const [openShowMore, setOpenShowMore] = useState(false)
  const video = useSelector(state => state.videos[videoId])
  const comments = Object.values(useSelector(state => state.comments))
  useEffect(() => {
    dispatch(getVideosThunk())
    dispatch(getCommentsThunk(videoId))
  }, [dispatch, videoId])

  const openShowMoreFunction = () => {
    setOpenShowMore(true)
    const element = document.getElementById("WatchVideoDescription")
    element.style.height = "fit-content"
  }

  const closeShowMoreFunction = () => {
    setOpenShowMore(false)
    const element = document.getElementById("WatchVideoDescription")
    element.style.height = "25px"
  }


  if (!video) return null

  return (<div className="WatchVideoPageBody">
    <div className="WatchVideoPageLeft">
      <div className="WatchVideoLeftVideoDetails">
        <video className="WatchVideoVideoElement" controls autoPlay>
          <source src={video.video_data} type="video/mp4" />
        </video>
        <div className="WatchVideoTitle"> {video.title}</div>
        <div className="WatchVideoExtraDetails">
          <div className="WatchVideoCreatorDetails">
            <img className="WatchVideoCreatorAvatar" src={video.owner.avatar} />
            <div className="WatchVideoCreatorName"> {video.owner.channel_name}</div>
          </div>
          <div className="WatchVideoDescription" id="WatchVideoDescription"> {video.description}</div>
          <div className="ShowMoreButtonDiv">
            {!openShowMore &&
              <button className="ShowMoreButton" onClick={openShowMoreFunction}>SHOW MORE</button>}
            {openShowMore &&
              <button className="ShowMoreButton" onClick={closeShowMoreFunction}>SHOW LESS</button>}
          </div>
        </div>
        <EditVideoForm user={sessionUser} video={video} />
      </div>
      <div className="WatchVideoLeftComments"></div>
    </div>
    <div className="WatchVideoPageRight">
      <div className="WatchVideoPageRecommendedVideos"></div>
    </div>
  </div>)
}


export default WatchVideo

import { useSelector, useDispatch } from "react-redux"
import { useParams, Link, useHistory } from "react-router-dom"
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
  const history = useHistory()
  const [openShowMore, setOpenShowMore] = useState(false)
  let video = useSelector(state => state.videos[videoId])
  const allVideos = useSelector(state => state.videos)
  const videos = Object.values(allVideos)
  const comments = Object.values(useSelector(state => state.comments))

  console.log("HISTORY", history)
  useEffect(() => {
    const funct = async () => {
      const videos = await dispatch(getVideosThunk())

      const ids = videos.map(video => video.id)
      if (!(ids.includes(Number(videoId)))) {
        history.replace("/")
      }
      dispatch(getCommentsThunk(videoId))
    }

    funct()
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

  console.log(video.video_data)

  return (<div className="WatchVideoPageBody">
    <div className="WatchVideoPageLeft">
      <div className="WatchVideoLeftVideoDetails">
        <video src={video.video_data} className="WatchVideoVideoElement" controls autoPlay />
        <div className="WatchVideoTitle"> {video.title}</div>
        <div className="WatchVideoExtraDetails">
          <div className="WatchVideoCreatorDetailsButton">
            <div className="WatchVideoCreatorDetails">
              <img className="WatchVideoCreatorAvatar" src={video.owner.avatar} alt={video.owner.channel_name} />
              <div className="WatchVideoCreatorName"> {video.owner.channel_name}</div>
            </div>
            {sessionUser && sessionUser.id === video.owner.id && <EditVideoForm user={sessionUser} video={video} />}
          </div>
          <div className="WatchVideoDescription" id="WatchVideoDescription"> {video.description}</div>
          <div className="ShowMoreButtonDiv">
            {!openShowMore && video.description && video.description.length > 200 &&
              <button className="ShowMoreButton" onClick={openShowMoreFunction}>SHOW MORE</button>}
            {openShowMore &&
              <button className="ShowMoreButton" onClick={closeShowMoreFunction}>SHOW LESS</button>}
          </div>
        </div>
      </div>
      <div className="WatchVideoLeftComments">

        {sessionUser && <CreateCommentForm user={sessionUser} video={video} />}
        {comments.map(comment => (
          <div key={comment.id} className="WatchVideoComment">
            <img className="WatchVideoCommenterAvatar" src={comment.commenter.avatar} alt={comment.commenter.channel_name} />
            <div className="WatchVideoCommentDetails">
              <div className="WatchVideoCommenterName"> {comment.commenter.channel_name}
                {sessionUser && sessionUser.id === comment.commenter.id && <EditCommentForm comment={comment} user={sessionUser} />}
              </div>
              <div className="WatchVideoCommentBody"> {comment.body}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="WatchVideoPageRight">
      <h1>Recommended Videos</h1>
      <div className="WatchVideoPageRecommendedVideos">
        {videos?.map(vid => {
          if (vid.id === video.id) return null
          return (<Link key={vid.id} to={`/watch-${vid.id}`}>
            <div className="WatchVideoRecommendedVideo" key={vid.id}>
              <img className="WatchVideoRecommendedVideoImg" src={vid.thumbnail} alt={vid.title} />
              <div className="WatchVideoRecommendedVideoDetails">
                <div className="WatchVideoRecommendedVideoTitle"> {vid.title}</div>
                <div className="WatchVideoRecommendedVideoCreator">
                  <img src={vid.owner.avatar} style={{ width: "30px", height: "30px", borderRadius: "50px" }} alt={vid.owner.channel_name} />
                  <div>{vid.owner.channel_name}</div>
                </div>
                <div className="WatchVideoRecommendedVideoDescription"> {vid.description}</div>
              </div>
            </div>
          </Link>)
        })}
      </div>
    </div>
  </div>)
}


export default WatchVideo

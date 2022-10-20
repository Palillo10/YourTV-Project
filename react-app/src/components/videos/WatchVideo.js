import { useSelector, useDispatch } from "react-redux"
import { useParams, Link, useHistory, NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { getVideosThunk } from "../../store/videos"
import EditVideoForm from "./EditVideoForm"
import CreateCommentForm from "../comments.js/CreateCommentForm"
import { getCommentsThunk } from "../../store/comments"
import EditCommentForm from "../comments.js/EditCommentForm"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
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


  useEffect(() => {
    const funct = async () => {
      const videos = await dispatch(getVideosThunk())




      const ids = videos.map(video => video.id)
      if (!(ids.includes(Number(videoId)))) {
        history.replace("/")
      }
      dispatch(getCommentsThunk(videoId))
      await fetch(`/api/videos/${videoId}/add-view`, {
        method: "PUT"
      })
    }

    funct()
  }, [dispatch, videoId, history])

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

  let videoLikers = video.likes.map(like => {
    return like.user.channel_name
  })
  let sessionLike = false
  if (sessionUser && videoLikers.includes(sessionUser.channel_name)) {
    sessionLike = true
  }



  const LikeVideo = async () => {
    if (!sessionUser) return
    await fetch(`api/videos/${video.id}/add-like`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId: sessionUser.id })
    })
    dispatch(getVideosThunk())
  }


  const DislikeVideo = async () => {
    await fetch(`api/videos/${video.id}/remove-like`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId: sessionUser.id })
    })
    dispatch(getVideosThunk())
    console.log("dislike")
  }




  return (<div className="WatchVideoPageBody">
    <div className="WatchVideoPageLeft">
      <div className="WatchVideoLeftVideoDetails">
        <video src={video.video_data} className="WatchVideoVideoElement" controls autoPlay />
        <div className="WatchVideoTitleContainer">
          <div className="WatchVideoTitle"> {video.title}</div>
          <div className="WatchVideoViewsLikes">
            <div className="WatchVideoViews">
              {video.views} views
            </div>
            <div className="WatchVideoLikesContainer">
              {!sessionLike && <>
                < ThumbUpOffAltIcon className="Like-Button" onClick={LikeVideo} />
                <div>
                  {video.likes.length}
                </div>
              </>
              }
              {sessionUser && sessionLike && <>
                < ThumbUpAltIcon className="Like-Button" onClick={DislikeVideo} />
                <div>
                  {video.likes.length}
                </div>
              </>
              }
            </div>
          </div>
        </div>
        <div className="WatchVideoExtraDetails">
          <div className="WatchVideoCreatorDetailsButton">
            <div className="WatchVideoCreatorDetails">
              <NavLink to={`/users/${video.owner.channel_name}`}>

                <img className="WatchVideoCreatorAvatar" src={video.owner.avatar} alt={video.owner.channel_name} />
              </NavLink>
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

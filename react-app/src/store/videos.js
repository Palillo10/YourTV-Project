const GET_VIDEOS = 'videos/GET_VIDEOS'
const ADD_VIDEO = 'videos/ADD_VIDEO'
const DELETE_VIDEO = 'videos/DELETE_VIDEO'
const UPDATE_VIDEO = 'videos/UPDATE_VIDEO'

const getVideosAction = (videos) => ({
  type: GET_VIDEOS,
  videos
})

const addVideoAction = (newVideo) => ({
  type: ADD_VIDEO,
  newVideo
})

const deleteVideoAction = (videoId) => ({
  type: DELETE_VIDEO,
  videoId
})

const updateVideoAction = (video) => ({
  type: UPDATE_VIDEO,
  video
})


const initialState = {}

export default function reducer(state = initialState, action) {
  let newState = { ...state }
  switch (action.type) {
    case GET_VIDEOS:
      action.videos.forEach(video => {
        newState[video.id] = video
      })
      return newState
    case ADD_VIDEO:
      newState[action.newVideo.id] = action.newVideo
      return newState
    case DELETE_VIDEO:
      delete newState[action.videoId]
      return newState
    case UPDATE_VIDEO:
      newState[action.video.id] = action.video
      return newState
    default:
      return state
  }
}

export const getVideosThunk = () => async dispatch => {
  const response = await fetch('/api/videos/')

  if (response.ok) {
    const data = await response.json()
    dispatch(getVideosAction(data.videos))
    return data.videos
  }
}

export const addVideoThunk = (newVideo) => async dispatch => {
  const response = await fetch('/api/videos/', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newVideo)
  })

  if (response.ok) {
    const data = await response.json()
    dispatch(addVideoAction(data.newVideo))
    return data.newVideo
  }
}

export const updateVideoThunk = (videoInfo) => async dispatch => {
  const response = await fetch(`/api/videos/${videoInfo.id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(videoInfo)
  })

  if (response.ok) {
    const data = await response.json()
    dispatch(updateVideoAction(data.video))
    return data.video
  }

}

export const deleteVideoThunk = (videoId) => async dispatch => {
  const response = await fetch(`/api/videos/${videoId}`, {
    method: "DELETE"
  })

  if (response.ok) {
    const data = await response.json()
    dispatch(deleteVideoAction(videoId))
    return data.deleted
  }
}

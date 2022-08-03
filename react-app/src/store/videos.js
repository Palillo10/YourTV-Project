const GET_VIDEOS = 'videos/GET_VIDEOS'

const getVideosAction = (videos) => ({
  type: GET_VIDEOS,
  videos
})


const initialState = {}

export default function reducer(state = initialState, action) {
  let newState = { ...state }
  switch (action.type) {
    case GET_VIDEOS:
      return newState["videos"] = action.videos
    default:
      return state
  }
}

const getVideosThunk = () => async dispatch => {
  const response = fetch('/api/videos')

  if (response.ok) {
    const videos = await response.json()
    dispatch(getVideosAction(videos))
    return videos
  }
}

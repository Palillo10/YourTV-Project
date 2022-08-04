const GET_COMMENTS = 'comments/GET_COMMENTS'
const ADD_COMMENT = 'comments/ADD_COMMENT'
const DELETE_COMMENT = 'comments/DELETE_COMMENT'
const UPDATE_COMMENT = 'comments/UPDATE_COMMENT'

const getCommentsAction = comments => ({
  type: GET_COMMENTS,
  comments
})

const addCommentAction = newComment => ({
  type: ADD_COMMENT,
  newComment
})

const deleteCommentAction = commentId => ({
  type: DELETE_COMMENT,
  commentId
})

const updateCommentAction = comment => ({
  type: UPDATE_COMMENT,
  comment
})

const initialState = {}

export default function reducer(state = initialState, action) {
  let newState = { ...state }
  switch (action.type) {
    case GET_COMMENTS:
      action.comments.forEach(comment => {
        newState[comment.id] = comment
      })
      return newState
    case ADD_COMMENT:
      newState[action.newComment.id] = action.newComment
      return newState
    case DELETE_COMMENT:
      delete newState[action.commentId]
      return newState
    case UPDATE_COMMENT:
      newState[action.comment.id] = action.comment
      return newState
    default:
      return state
  }
}


export const getCommentsThunk = () => async dispatch => {
  const response = await fetch('/api/comments/')

  const data = await response.json()

  if (response.ok) {
    dispatch(getCommentsAction(data.comments))
    return data.comments
  } else {
    return 'ERROR'
  }
}

export const addCommentThunk = (newComment) => async dispatch => {
  const response = await fetch('/api/comments/', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newComment)
  })

  const data = await response.json()

  if (response.ok) {
    dispatch(addCommentAction(data.newComment))
    return data.newComment
  } else {
    return data.errors
  }
}


export const updateCommentThunk = (commentInfo) => async dispatch => {
  const response = await fetch(`/api/comments/${commentInfo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(commentInfo)
  })

  const data = await response.json()

  if (response.ok) {
    dispatch(updateCommentAction(data.comment))
    return data.comment
  } else {
    return data.errors
  }
}


export const deleteCommentThunk = (commentId) => async dispatch => {
  const response = await fetch(`/api/comments/${commentId}`, {
    method: "DELETE"
  })

  if (response.ok) {
    const data = await response.json()
    dispatch(deleteCommentAction(commentId))
    console.log(data)
    return data.deleted
  } else {
    return "ERROR"
  }
}

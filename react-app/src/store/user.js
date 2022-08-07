const GET_USERS = 'users/GET_USERS'
const ADD_USER = 'users/ADD_USER'
const DELETE_USER = 'users/DELETE_USER'
const UPDATE_USER = 'users/UPDATE_USER'

const getUsersAction = (users) => ({
  type: GET_USERS,
  users
})

const deleteUserAction = (userId) => ({
  type: DELETE_USER,
  userId
})

const updateUserAction = (user) => ({
  type: UPDATE_USER,
  user
})


const initialState = {}

export default function reducer(state = initialState, action) {
  let newState = { ...state }
  switch (action.type) {
    case GET_USERS:
      action.users.forEach(user => {
        newState[user.id] = user
      })
      return newState
    case DELETE_USER:
      delete newState[action.userId]
      return newState
    case UPDATE_USER:
      newState[action.user.id] = action.user
      return newState
    default:
      return state
  }
}

export const getUsersThunk = () => async dispatch => {
  const response = await fetch('/api/users/')

  const data = await response.json()

  if (response.ok) {
    dispatch(getUsersAction(data.users))
    return data.users
  } else {
    return 'ERROR'
  }
}


export const updateUserThunk = (userInfo) => async dispatch => {
  const response = await fetch(`/api/users/${userInfo.id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  })

  const data = await response.json()

  if (response.ok) {
    dispatch(updateUserAction(data.user))
    return data.user
  } else {
    return data.errors
  }

}

export const deleteUserThunk = (userId) => async dispatch => {
  const response = await fetch(`/api/users/${userId}`, {
    method: "DELETE"
  })

  if (response.ok) {
    const data = await response.json()
    dispatch(deleteUserAction(userId))
    return data.deleted
  } else {
    return "ERROR"
  }
}

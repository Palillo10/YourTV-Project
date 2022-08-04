import { useDispatch } from "react-redux"
import { useState } from "react"
import { deleteCommentThunk, updateCommentThunk } from "../../store/comments"

const EditCommentForm = ({ user, comment }) => {
  const dispatch = useDispatch()
  const [body, setBody] = useState(comment.body)
  const [errors, setErrors] = useState([])
  const [openEditForm, setOpenEditForm] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const commentInfo = {
      id: comment.id,
      user_id: comment.user_id,
      video_id: comment.video_id,
      body,
    }

    const res = await dispatch(updateCommentThunk(commentInfo))
    if (res.id) {
      setErrors([])
    } else {
      setErrors(res)
    }

  }

  const deleteComment = () => {
    dispatch(deleteCommentThunk(comment.id))
  }

  return (<div>
    <button onClick={() => setOpenEditForm(!openEditForm)}>Edit Comment</button>
    {openEditForm &&
      <fieldset>
        {errors.map(error => (
          <div key={error}> {error}</div>
        ))}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="body">Body</label>
            <input
              id="body"
              type="text"
              value={body}
              onChange={e => setBody(e.target.value)}
            />
          </div>
          <button>Confirm</button>
        </form>
        <button onClick={deleteComment}>Delete</button>
      </fieldset>}
  </div>)
}


export default EditCommentForm

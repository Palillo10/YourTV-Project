import { useDispatch } from "react-redux"
import { useState } from "react"
import { addCommentThunk } from "../../store/comments"

const CreateCommentForm = ({ user, video }) => {
  const dispatch = useDispatch()
  const [body, setBody] = useState('')
  const [errors, setErrors] = useState([])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newComment = {
      user_id: user.id,
      video_id: video.id,
      body,
    }

    const res = await dispatch(addCommentThunk(newComment))
    if (res.id) {
      setErrors([])
      setBody('')
    } else {
      setErrors(res)
    }

  }

  return (<div>
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
    </fieldset>
  </div>)
}




export default CreateCommentForm

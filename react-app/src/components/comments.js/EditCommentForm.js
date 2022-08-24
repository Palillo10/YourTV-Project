import { useDispatch } from "react-redux"
import { useState } from "react"
import { deleteCommentThunk, updateCommentThunk } from "../../store/comments"
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
      setOpenEditForm(false)
    } else {
      setErrors(res)
    }

  }

  const deleteComment = () => {
    dispatch(deleteCommentThunk(comment.id))
    setOpenEditForm(false)
  }

  return (<>
    {!openEditForm &&
      <MoreVertIcon className="EditCommentButton" onClick={() => setOpenEditForm(!openEditForm)} fontSize="small" />}
    {openEditForm &&
      <div className="EditCommentFormModal">
        <div style={{ display: "flex" }}>

          <form onSubmit={handleSubmit} style={{ display: "flex", width: "80%", justifyContent: "flex-end" }}>
            <div>
              <label htmlFor="body"></label>
              <textarea
                className="EditCommentInput"
                id="body"
                type="text"
                value={body}
                onChange={e => setBody(e.target.value)}
                rows="2"
                maxLength={500}
              /> {`${body.length} / 500`}
            </div>
            <button className="CreateCommentConfirmButton" style={{ marginLeft: "15px" }}>Confirm</button>
          </form>
          < button className="CreateCommentCancelButton" onClick={e => {
            setErrors([])
            setBody(comment.body)
            setOpenEditForm(false)
          }}>Cancel</button>
          <div style={{ display: "flex", justifyContent: "flex-end", width: "20%" }}>
            <div>
              <button onClick={deleteComment} className="DeleteButton">Delete</button>
            </div>
            <div>
              <MoreVertIcon className="EditCommentButton" onClick={() => setOpenEditForm(!openEditForm)} fontSize="small" />
            </div>
          </div>
        </div>
        {errors.map(error => (
          <div className="errors" key={error}> {error}</div>
        ))}

      </div>}
  </>)
}


export default EditCommentForm

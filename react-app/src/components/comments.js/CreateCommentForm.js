import { useDispatch } from "react-redux"
import { useState } from "react"
import { addCommentThunk } from "../../store/comments"

const CreateCommentForm = ({ user, video }) => {
  const dispatch = useDispatch()
  const [body, setBody] = useState('')
  const [errors, setErrors] = useState([])
  const [selected, setSelected] = useState(false)
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
      setSelected(false)
    } else {
      setErrors(res)
    }

  }

  return (<div style={{ borderBottom: "2px solid rgb(160, 160, 160, .3)", marginBottom: "15px", textAlign: "center" }}>
    <div className="CreateCommentDiv">
      {/* {errors.map(error => (
      <div key={error}> {error}</div>
    ))} */}
      <form className="CreateCommentForm" onSubmit={handleSubmit}>
        <img className="WatchVideoCommenterAvatar" src={user.avatar} alt={user.channel_name} />
        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <textarea
            className="CreateCommentInput"
            id="body"
            type="text"
            value={body}
            placeholder="Add a comment ...."
            onChange={e => {
              setBody(e.target.value)
              setSelected(true)
            }}
            rows="2"
            maxLength={500}
          // onFocus={setSelected(true)}
          />
          {selected
            && `${body.length}/ 500`
          }
        </div>
        {selected
          && <button className="CreateCommentConfirmButton">Save</button>
        }
      </form>
      {selected &&
        < button className="CreateCommentCancelButton" onClick={e => {
          setErrors([])
          setBody('')
          setSelected(false)
        }}>Cancel</button>
      }
    </div>
    {
      errors.map(error => (
        <div className="errors" key={error}> {error}</div>
      ))
    }
  </div >)
}




export default CreateCommentForm

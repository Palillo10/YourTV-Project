import { useDispatch } from "react-redux"
import { useState } from "react"
import { addVideoThunk } from "../../store/videos"

const CreateVideoForm = ({ user }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [video_data, setVideo_Data] = useState('')
  const [errors, setErrors] = useState([])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newVideo = {
      user_id: user.id,
      title,
      description,
      thumbnail,
      video_data
    }

    const res = await dispatch(addVideoThunk(newVideo))
    if (res.id) {

      setErrors([])
      setTitle('')
      setDescription('')
      setThumbnail('')
      setVideo_Data('')
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
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="thumbnail">Thumbnail</label>
          <input
            id="thumbnail"
            type="text"
            value={thumbnail}
            onChange={e => setThumbnail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="video_data">Video</label>
          <input
            id="video_data"
            type="text"
            value={video_data}
            onChange={e => setVideo_Data(e.target.value)}
          />
        </div>
        <button>Confirm Upload</button>
      </form>
    </fieldset>
  </div>)
}




export default CreateVideoForm

import { useDispatch } from "react-redux"
import { useState } from "react"
import { deleteVideoThunk, updateVideoThunk } from "../../store/videos"

const EditVideoForm = ({ user, video }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState(video.title)
  const [description, setDescription] = useState(video.description)
  const [thumbnail, setThumbnail] = useState(video.thumbnail)
  const [openEditForm, setOpenEditForm] = useState(false)
  const [errors, setErrors] = useState([])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const videoInfo = {
      id: video.id,
      user_id: video.user_id,
      title,
      description,
      thumbnail,
      video_data: video.video_data
    }

    const res = await dispatch(updateVideoThunk(videoInfo))
    if (res.id) {
      setErrors([])
    } else {
      setErrors(res)
    }

  }

  const deleteVideo = () => {
    dispatch(deleteVideoThunk(video.id))
  }

  return (<div>
    <button onClick={() => setOpenEditForm(!openEditForm)}>Edit</button>
    {openEditForm &&
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
          <button>Confirm Edit</button>
        </form>
        <button onClick={deleteVideo}>Delete</button>
      </fieldset>}
  </div>)
}




export default EditVideoForm

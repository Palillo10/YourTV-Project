import { useDispatch } from "react-redux"
import { useState } from "react"
import { addVideoThunk } from "../../store/videos"

const CreateVideoForm = ({ user }) => {
  const dispatch = useDispatch()
  const [Title, setTitle] = useState('')
  const [Description, setDescription] = useState('')
  const [Thumbnail, setThumbnail] = useState(null)
  const [video_data, setVideo_Data] = useState(null)
  const [errors, setErrors] = useState([])
  const [imageLoading, setImageLoading] = useState(false);
  // const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("video", video_data)
    setImageLoading(true);

    const upload = await fetch('/api/videos/upload-video', {
      method: "POST",
      body: formData
    })

    const uploadData = await upload.json()
    if (uploadData.errors) {
      setErrors([uploadData.errors])
    } else if (uploadData.url) {
      const newVideo = {
        user_id: user.id,
        Title,
        Description,
        Thumbnail,
        Video: uploadData.url
      }

      const res = await dispatch(addVideoThunk(newVideo))
      if (res.id) {

        setErrors([])
        setTitle('')
        setDescription('')
        setThumbnail(null)
        setVideo_Data(null)
        setImageLoading(true);
      } else {
        setErrors(res)
      }
    }


  }

  return (<div>
    <fieldset>
      {errors.map(error => (
        <div key={error}> {error}</div>
      ))}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Title">Title</label>
          <input
            id="Title"
            type="text"
            value={Title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Description">Description</label>
          <input
            id="Description"
            type="text"
            value={Description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="thumbnail">Thumbnail</label>
          <input
            id="thumbnail"
            type="file"
            accept="image/*"
            onChange={e => setThumbnail(e.target.files[0])}
          />
        </div>
        <div>
          <label htmlFor="video_data">Video</label>
          <input
            id="video_data"
            type="file"
            accept="video/*"
            onChange={e => setVideo_Data(e.target.files[0])}
          />
        </div>
        <button>Confirm Upload</button>
        {(imageLoading) && <p>Loading...</p>}
      </form>
    </fieldset>
  </div>)
}




export default CreateVideoForm

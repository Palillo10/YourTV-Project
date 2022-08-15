import { useDispatch } from "react-redux"
import { useState } from "react"
import { deleteVideoThunk, updateVideoThunk } from "../../store/videos"
import { useHistory } from "react-router-dom"
import Button from '@material-ui/core/Button'

const EditVideoForm = ({ user, video }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [title, setTitle] = useState(video.title)
  const [description, setDescription] = useState(video.description)
  const [thumbnail, setThumbnail] = useState(null)
  const [openEditForm, setOpenEditForm] = useState(false)
  const [errors, setErrors] = useState([])
  const [imageLoading, setImageLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(false)
  const [imageUrl, setImageUrl] = useState()



  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append("image", thumbnail)
    setImageLoading(true);
    let uploadData = { "url": video.thumbnail }

    if (thumbnail) {
      const upload = await fetch('/api/videos/upload-thumbnail', {
        method: "POST",
        body: formData
      })

      uploadData = await upload.json()
    }

    if (uploadData.errors) {
      setErrors([uploadData.errors])
    } else if (uploadData.url) {

      const videoInfo = {
        id: video.id,
        user_id: video.user_id,
        Title: title,
        Description: description,
        Thumbnail: uploadData.url,
        Video: video.video_data
      }

      const res = await dispatch(updateVideoThunk(videoInfo))
      if (res.id) {
        setOpenEditForm(!openEditForm)
        setDescription(video.description)
        setTitle(video.title)
        setErrors([])
        setThumbnail(null)
        setImageUrl(undefined)
        setPreviewImage(false)
      } else {
        setErrors(res)
      }
    }
    setImageLoading(false);

  }
  const deleteVideo = () => {
    dispatch(deleteVideoThunk(video.id))
    history.push('/')
  }


  const setThumbnailPreview = (e) => {
    setThumbnail(e.target.files[0])
    setImageUrl(URL.createObjectURL(e.target.files[0]))
    setPreviewImage(true)
  }

  return (<div className="WatchVideoEditButtonDiv">

    {openEditForm &&
      <div style={{ width: "5000px" }}>
        {errors.map(error => (
          <div className="errors" key={error}> {error}</div>
        ))}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              maxLength={100}
            />
            {`${title.length}/100`}
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea className="AddVideoDescriptionInput" id="description" rows="9" maxLength={5000}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            {`${description.length}/5000`}
          </div>
          <div>
            <label htmlFor="thumbnaill">
              <Button className="InputButton" type="button" component="span" variant="contained" fontSize="small" color="primary" style={{ margin: "10px" }}> Choose File</Button>
            </label>
            <input
              style={{ display: "none" }}
              id="thumbnaill"
              type="file"
              accept="image/*"
              onChange={setThumbnailPreview}
            />
            <button className="CreateCommentConfirmButton" style={{ margin: "10px" }}>Confirm</button>
          </div>
          {(imageLoading) && <p>Loading...</p>}
        </form>
        {previewImage && <img src={imageUrl} style={{ width: "310px", height: "170px" }} />}
        <div>
          <button onClick={deleteVideo} className="DeleteButton">Delete</button>
        </div>
      </div>}
    <button className="WatchVideoEditButton" onClick={() => {

      setOpenEditForm(!openEditForm)
      setDescription(video.description)
      setTitle(video.title)
      setErrors([])
      setThumbnail(null)
      setImageUrl(undefined)
      setPreviewImage(false)
    }}>Edit</button>
  </div>)
}




export default EditVideoForm

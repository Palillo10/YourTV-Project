import { useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { addVideoThunk } from "../../../store/videos"
import UploadVideoIcon from '@material-ui/icons/VideoCallOutlined'
import './CreateVideo.css'
import FileUploadIcon from '@mui/icons-material/FileUpload';


const CreateVideoModal = ({ user }) => {
  const dispatch = useDispatch()
  const [openModal, setOpenModal] = useState(false)
  const [Title, setTitle] = useState('')
  const [Description, setDescription] = useState('')
  const [Thumbnail, setThumbnail] = useState(null)
  const [video_data, setVideo_Data] = useState(null)
  const [errors, setErrors] = useState([])
  const [phase1, setPhase1] = useState(false)
  const [phase2, setPhase2] = useState(false)
  const [phase3, setPhase3] = useState(false)
  const [phase4, setPhase4] = useState(false)
  const [imageLoading, setImageLoading] = useState(false);


  useEffect(() => {
    console.log(video_data)
  }, [video_data])

  const openModalIcon = () => {
    const background = document.getElementById("ModalBackground")
    background.style.display = "block"
    setOpenModal(true)
    setPhase1(true)
  }

  const closeModal = () => {
    setOpenModal(false)
    const background = document.getElementById("ModalBackground")
    background.style.display = "none"
    setPhase1(false)
    setPhase2(false)
    setPhase3(false)
    setErrors([])
    setTitle('')
    setDescription('')
    setThumbnail(null)
    setVideo_Data(null)
    setImageLoading(false)
  }

  const submitVideo = async (e) => {
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

      setPhase1(false)
      setPhase2(true)

      const newVideo = {
        user_id: user.id,
        Title,
        Description,
        Thumbnail,
        Video: uploadData.url
      }

      // const res = await dispatch(addVideoThunk(newVideo))
      // if (res.id) {

      //   setErrors([])
      //   setTitle('')
      //   setDescription('')
      //   setThumbnail(null)
      //   setVideo_Data(null)
      // } else {
      //   setErrors(res)
      // }
    }

    setImageLoading(false);

  }
  return (<>
    <UploadVideoIcon onClick={openModalIcon} />
    {openModal &&
      <div className="CreateVideoModal">
        {phase1 && <div className="CreateVideoModalPhase1">
          <div className="CreateVideoHeaders">
            <div className="CreateVideoHeaderTitle"> Upload Video</div>
            <button className="CreateVideoCloseX" onClick={closeModal}>X</button>
          </div>
          <div className="UploadVideoSection">
            <div className="UploadVideoCenter">
              {imageLoading && <h1 className="UploadVideoLoading">LOADING</h1>}
              <form className="UploadVideoCenterForm" onSubmit={submitVideo}>
                {/* <label htmlFor="video_data">Video</label> */}
                <input
                  className="UploadVideoInput"
                  type='file'
                  accept='video/*'
                  onChange={e => setVideo_Data(e.target.files[0])}
                />
                <button className="UploadVideoFormIcon">
                  <FileUploadIcon />
                </button>
              </form>
              <button onClick={() => {
                setPhase1(false)
                setPhase2(true)
              }}>Next Phase</button>
              {errors.map(error => (
                <div className="UploadVideoCenterErrors" key={error}> {error}</div>
              ))}
            </div>
            <div className="UploadVideoBottom">

            </div>
          </div>
        </div>
        }
        {phase2 && <div className="CreateVideoModalPhase2">
          <div className="CreateVideoHeaders">
            <div className="CreateVideoHeaderTitle"> {video_data.name} </div>
            <button className="CreateVideoCloseX" onClick={closeModal}>X</button>
          </div>
          <div className="AddVideoDetailsSection">
            <div className="AddVideoDetailsHeader">
              <div className="DetailsHeaderDetailNode">
              </div>
              <div className="DetailsNodeLine"></div>
              <div className="DetailsHeaderThumbnailNode"> </div>
              <div className="DetailsNodeLine"></div>
              <div className="DetailsHeaderPreviewNode"> </div>
            </div>
            <div className="AddVideoDetailsMain">
              <div className="AddVideoDetailsMainLeft"> </div>
              <div className="AddVideoDetailsMainRight"> </div>
            </div>
          </div>
          <div className="AddVideoDetailsBottom">

          </div>
        </div>
        }
        {phase3 && <div>phase3 </div>

        }
      </div>
    }
  </>)
}


export default CreateVideoModal

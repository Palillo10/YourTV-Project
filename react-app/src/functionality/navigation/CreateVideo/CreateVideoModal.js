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

  const submitVideo = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("image", video_data)
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
      } else {
        setErrors(res)
      }
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
            <button className="CreateVideoCloseX">X</button>
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
              {errors.map(error => (
                <div className="UploadVideoCenterErrors" key={error}> {error}</div>
              ))}
            </div>
            <div className="UploadVideoBottom">

            </div>
          </div>
        </div>


        }
        {phase2 && <div>pjase2 </div>

        }
        {phase3 && <div>phase3 </div>

        }
      </div>
    }
  </>)
}


export default CreateVideoModal

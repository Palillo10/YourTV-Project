// import { useDispatch } from "react-redux"
import { useState } from "react"
// import { addVideoThunk } from "../../../store/videos"
import UploadVideoIcon from '@material-ui/icons/VideoCallOutlined'
import './CreateVideo.css'
import FileUploadIcon from '@mui/icons-material/FileUpload';


const CreateVideoModal = ({ user }) => {
  // const dispatch = useDispatch()
  const [openModal, setOpenModal] = useState(false)
  const [Title, setTitle] = useState('')
  const [Description, setDescription] = useState('')
  const [thumbnail_data, setThumbnail_data] = useState(null)
  const [Thumbnail, setThumbnail] = useState('')
  const [video_data, setVideo_Data] = useState(null)
  // const [videoUrl, setVideoUrl] = useState('')
  const [errors, setErrors] = useState([])
  const [phase1, setPhase1] = useState(false)
  const [phase2, setPhase2] = useState(false)
  const [phase3, setPhase3] = useState(false)
  // const [phase4, setPhase4] = useState(false)
  const [imageLoading, setImageLoading] = useState(false);
  const [selected, setSelected] = useState("Details")


  // useEffect(() => {
  //   const formErrors = []
  //   if (Title.length > 100) {
  //     formErrors.push("Title: Title cannot be over 100 characters")
  //   }
  //   if (Description.length > 5000) {
  //     formErrors.push("Title: Title cannot be over 5000 characters")
  //   }
  //   setErrors(formErrors)
  // }, [Title, Description])

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
    }
    // else if (uploadData.url) {

    //   setPhase1(false)
    //   setPhase2(true)

    //   const newVideo = {
    //     user_id: user.id,
    //     Title,
    //     Description,
    //     Thumbnail,
    //     Video: uploadData.url
    //   }

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
    // }

    setImageLoading(false);

  }

  const submitThumbnail = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("image", Thumbnail)
    setImageLoading(true);

    const upload = await fetch('/api/videos/upload-thumbnail', {
      method: "POST",
      body: formData
    })

    const uploadData = await upload.json()
    if (uploadData.errors) {
      setErrors([uploadData.errors])
    } else if (uploadData.url) {
      setThumbnail(uploadData.url)
    }
    setImageLoading(false);
  }


  return (<>
    <UploadVideoIcon className="UploadVideoIcon" onClick={openModalIcon} />
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
                setTitle(video_data.name)
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
            <div className="CreateVideoHeaderTitle"> {Title} </div>
            <button className="CreateVideoCloseX" onClick={closeModal}>X</button>
          </div>
          <div className="AddVideoDetailsSection">
            <div className="AddVideoDetailsHeader">
              <div className="DetailsHeaderNodes">
                <div id="DetailNodeTitle"> Details</div>
                <input
                  className="Nodes"
                  id="detailsNode"
                  type="radio"
                  name="phases"
                  value="Details"
                  checked={selected === "Details"}
                  onChange={(e) => {
                    setSelected(e.target.value)
                  }}
                />
                <label id="DetailNodeCircle" htmlFor="detailsNode"></label>

              </div>
              <div className="DetailsNodeLine"></div>
              <div className="DetailsHeaderNodes">
                <div id="DetailNodeTitle"> Thumbnail</div>
                <input
                  className="Nodes"
                  id="ThumbnailNode"
                  type="radio"
                  name="phases"
                  value="Thumbnail"
                  checked={selected === "Thumbnail"}
                  onChange={(e) => {
                    setSelected(e.target.value)
                    setPhase2(false)
                    setPhase3(true)
                  }}
                />
                <label id="DetailNodeCircle" htmlFor="ThumbnailNode"></label>
              </div>
              <div className="DetailsNodeLine"></div>
              <div className="DetailsHeaderNodes">
                <div id="DetailNodeTitle"> Preview</div>
                <input
                  className="Nodes"
                  id="PreviewNode"
                  type="radio"
                  name="phases"
                  value="Preview"
                  checked={selected === "Preview"}
                  onChange={(e) => {
                    setSelected(e.target.value)
                  }}
                />
                <label id="DetailNodeCircle" htmlFor="PreviewNode"></label>
              </div>
            </div>
            <div className="AddVideoDetailsMain">
              <div className="AddVideoDetailsMainLeft">
                <h2 className="AddVideoDetailsFormHeader">Details</h2>
                <form className="AddVideoDetailsMainForm">
                  <div className="AddVideoTitleDiv" >
                    <div className="AddVideoTitleHeader">
                      Title (required)
                      <textarea className="AddVideoTitleInput" id="TitleInput" rows="5" maxLength="100"
                        value={Title}
                        onChange={(e) => setTitle(e.target.value)}
                      >
                      </textarea>
                      <div className="TitleLengthCheck">{Title.length}/100</div>
                    </div>
                  </div>
                  <div className="AddVideoDescriptionDiv" >
                    <div className="AddVideoDescriptionHeader">
                      Description
                      <textarea className="AddVideoDescriptionInput" id="DescriptionInput" rows="9" maxLength={5000}
                        value={Description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                      <div className="DescriptionLengthCheck">{Description.length}/5000</div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="AddVideoDetailsMainRight"> </div>
            </div>
          </div>
          <div className="AddVideoDetailsBottom">

          </div>
        </div>
        }








        {phase3 && <div>
          <div className="CreateVideoHeaders">
            <div className="CreateVideoHeaderTitle"> {Title} </div>
            <button className="CreateVideoCloseX" onClick={closeModal}>X</button>
          </div>
          <div className="AddVideoThumbnailSection">
            <div className="AddVideoThumbnailHeader">
              <div className="DetailsHeaderNodes">
                <div id="DetailNodeTitle"> Details</div>
                <input
                  className="Nodes"
                  id="detailsNode"
                  type="radio"
                  name="phases"
                  value="Details"
                  checked={selected === "Details"}
                  onChange={(e) => {
                    setSelected(e.target.value)
                    setPhase3(false)
                    setPhase2(true)
                  }}
                />
                <label id="DetailNodeCircle" htmlFor="detailsNode"></label>

              </div>
              <div className="DetailsNodeLine"></div>
              <div className="DetailsHeaderNodes">
                <div id="DetailNodeTitle"> Thumbnail</div>
                <input
                  className="Nodes"
                  id="ThumbnailNode"
                  type="radio"
                  name="phases"
                  value="Thumbnail"
                  checked={selected === "Thumbnail"}
                  onChange={(e) => {
                    setSelected(e.target.value)
                  }}
                />
                <label id="DetailNodeCircle" htmlFor="ThumbnailNode"></label>
              </div>
              <div className="DetailsNodeLine"></div>
              <div className="DetailsHeaderNodes">
                <div id="DetailNodeTitle"> Preview</div>
                <input
                  className="Nodes"
                  id="PreviewNode"
                  type="radio"
                  name="phases"
                  value="Preview"
                  checked={selected === "Preview"}
                  onChange={(e) => {
                    setSelected(e.target.value)
                  }}
                />
                <label id="DetailNodeCircle" htmlFor="PreviewNode"></label>
              </div>
            </div>
            <div className="AddVideoThumbnailMain">
              <div className="AddVideoThumbnailMainLeft">
                {imageLoading && <h1 className="UploadThumbnailLoading">LOADING</h1>}
                <form className="UploadThumbnailCenterForm" onSubmit={submitThumbnail}>
                  {/* <label htmlFor="video_data">Video</label> */}
                  <div className="ThumbnailWarning">Upload a thumbnail for your video. If no thumbnail is uploaded, your video will be given a default thumbnail.</div>
                  <input
                    className="UploadThumbnailInput"
                    type='file'
                    accept='image/*'
                    onChange={e => setThumbnail_data(e.target.files[0])}
                  />
                  <button className="UploadThumbnailFormIcon">
                    <FileUploadIcon />
                  </button>
                  {errors.map(error => (
                    <div className="UploadVideoCenterErrors" key={error}> {error}</div>
                  ))}
                </form>
              </div>
              <div className="AddVideoThumbnailMainRight">
                <h3 style={{ marginTop: "150px" }}>Thumbnail Preview</h3>
                <img className="ThumbnailPreview" src={Thumbnail || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgdtC5sgMG3qe3ktKKoKWBmn4FKVvPKVGfSU-JrUpc4IoANXGPnV0gmbAvr7zzEGn464&usqp=CAU"} alt="alt" />
              </div>
            </div>
          </div>

        </div>

        }
      </div>
    }
  </>)
}


export default CreateVideoModal

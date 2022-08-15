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
  const [thumbnail_data, setThumbnail_data] = useState(null)
  const [Thumbnail, setThumbnail] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgdtC5sgMG3qe3ktKKoKWBmn4FKVvPKVGfSU-JrUpc4IoANXGPnV0gmbAvr7zzEGn464&usqp=CAU')
  const [video_data, setVideo_Data] = useState(null)
  const [videoUrl, setVideoUrl] = useState('')
  const [errors, setErrors] = useState([])
  const [titleError, setTitleError] = useState('')
  const [phase1, setPhase1] = useState(false)
  const [phase2, setPhase2] = useState(false)
  const [phase3, setPhase3] = useState(false)
  const [phase4, setPhase4] = useState(false)
  const [imageLoading, setImageLoading] = useState(false);
  const [selected, setSelected] = useState("Details")
  const [videoPreviewUrl, setVideoPreviewUrl] = useState(undefined)
  const [videoPreviewUrlOn, setVideoPreviewUrlOn] = useState(false)



  const videoExamples = [1, 2, 3, 4, 5, 6]


  useEffect(() => {
    let formErrors = ''
    if (Title.length === 0) {
      formErrors = "Title: Your video requires a title. Update on 'Details' section."
    }
    setTitleError(formErrors)
  }, [Title])




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
    setPhase4(false)
    setSelected("Details")
    setErrors([])
    setTitleError('')
    setTitle('')
    setDescription('')
    setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgdtC5sgMG3qe3ktKKoKWBmn4FKVvPKVGfSU-JrUpc4IoANXGPnV0gmbAvr7zzEGn464&usqp=CAU')
    setThumbnail_data(null)
    setVideo_Data(null)
    setVideoUrl('')
    setImageLoading(false)
  }




  const submitVideo = async (e) => {
    e.preventDefault()

    const check = await checkDuration();

    if (check.Perfect) {

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
      else if (uploadData.url) {
        setVideoUrl(uploadData.url)
        setTitle(video_data.name)
        setErrors([])
        setPhase1(false)
        setPhase2(true)
      }
    } else if (check.Error) {
      setErrors([check.Error])
    }
    setImageLoading(false);

  }



  const submitThumbnail = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("image", thumbnail_data)
    setImageLoading(true);
    const upload = await fetch('/api/videos/upload-thumbnail', {
      method: "POST",
      body: formData
    })

    const uploadData = await upload.json()
    if (uploadData.errors) {
      setErrors([uploadData.errors])
      setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgdtC5sgMG3qe3ktKKoKWBmn4FKVvPKVGfSU-JrUpc4IoANXGPnV0gmbAvr7zzEGn464&usqp=CAU")
    } else if (uploadData.url) {
      setThumbnail(uploadData.url)
      setErrors([])
    }
    setImageLoading(false);
    // console.log(Thumbnail)
  }



  const confirmUpload = async () => {
    const newVideo = {
      user_id: user.id,
      Title,
      Description,
      Thumbnail,
      Video: videoUrl
    }

    const res = await dispatch(addVideoThunk(newVideo))
    if (res.id) {
      closeModal()
    } else {
      setErrors(res)
    }
  }




  const setVideo_DataUrl = (e) => {
    setVideo_Data(e.target.files[0])
    if (e.target.files.length > 0) {
      setVideoPreviewUrl(URL.createObjectURL(e.target.files[0]))
      setVideoPreviewUrlOn(true)
      setErrors([])
    }
    else {
      setVideoPreviewUrl(undefined)
      setVideoPreviewUrlOn(false)
      setErrors([])
    }

  }


  let media = new Audio(videoPreviewUrl)


  const checkDuration = async () => {
    if (videoPreviewUrl === undefined) { return { "Perfect": "Perfect" } }
    if (media.duration <= 360) {
      return { "Perfect": "Perfect" }
    } else if (media.duration > 36) {
      return { "Error": "Error: Video must be under 6 minutes." }
    } else {
      return { "Error": "Error occured when uploading video. Please try again." }
    }
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
                  onChange={setVideo_DataUrl}
                />
                <button className="UploadVideoFormIcon">
                  <FileUploadIcon />
                </button>
              </form>
              {/* <button onClick={() => {
                setPhase1(false)
                setPhase2(true)
                setTitle(video_data.name)
              }}>Next Phase</button> */}
              {errors.map(error => (
                <div className="UploadVideoCenterErrors" key={error}> {error}</div>
              ))}
            </div>
            {videoPreviewUrlOn && <video src={videoPreviewUrl} controls style={{ width: "310px", height: "170px" }} disablePictureInPicture controlsList="nodownload" onLoadedMetadata={checkDuration} />}
            <div className="UploadVideoBottom">

            </div>
          </div>
        </div>
        }








        {phase2 && <div className="CreateVideoModalPhase2">
          <div className="CreateVideoHeaders">
            {Title &&
              <div className="CreateVideoHeaderTitle"> {Title} </div>}
            {!Title &&
              <div className="CreateVideoHeaderTitle" style={{ color: "red" }}> "{titleError}" </div>}
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
                    setPhase2(false)
                    setPhase4(true)
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
              <div className="AddVideoDetailsMainRight">
                <div className="VideoDetailsPreview">
                  <video controls style={{ width: "310px", height: "170px" }}
                    disablePictureInPicture controlsList="nodownload"
                  >
                    <source src={videoUrl} type="video/mp4" />
                  </video>
                  <div>
                    <div id="VideoPreviewLinkName">Video Link:</div>
                    <div id="VideoPreviewLink">
                      <a href={videoUrl} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(4, 93, 248, 0.987)" }}>{videoUrl}</a>
                    </div>
                    <div id="VideoPreviewFileNameLabel">FileName:</div>
                    <div id="VideoPreviewFileName">
                      <div>{video_data.name}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="AddVideoDetailsBottom">
            <button className="CreateVideoNextButton"
              onClick={() => {
                setSelected("Thumbnail")
                setPhase2(false)
                setPhase3(true)
              }}
            >Next</button>
          </div>
        </div>
        }








        {phase3 && <div>
          <div className="CreateVideoHeaders">
            {Title &&
              <div className="CreateVideoHeaderTitle"> {Title} </div>}
            {!Title &&
              <div className="CreateVideoHeaderTitle" style={{ color: "red" }}> "{titleError}" </div>}
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
                    setThumbnail_data(null)
                    setErrors([])
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
                    setPhase3(false)
                    setPhase4(true)
                    setThumbnail_data(null)
                    setErrors([])

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
                <img className="ThumbnailPreview" src={Thumbnail} alt="alt" />
              </div>
            </div>
          </div>
          <div className="AddVideoDetailsBottom">
            <button className="CreateVideoBackButton"
              onClick={() => {
                setSelected("Details")
                setPhase3(false)
                setPhase2(true)
                setThumbnail_data(null)
                setErrors([])

              }}
            >Back</button>
            <button className="CreateVideoNextButton"
              onClick={() => {
                setSelected("Preview")
                setPhase3(false)
                setPhase4(true)
                setThumbnail_data(null)
                setErrors([])

              }}
            >Next</button>
          </div>

        </div>

        }








        {phase4 && <div>
          <div className="CreateVideoHeaders">
            {Title &&
              <div className="CreateVideoHeaderTitle"> {Title} </div>}
            {!Title &&
              <div className="CreateVideoHeaderTitle" style={{ color: "red" }}> "{titleError}" </div>}
            <button className="CreateVideoCloseX" onClick={closeModal}>X</button>
          </div>
          <div className="VideoPreviewSection">
            <div className="VideoPreviewHeader">
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
                    setPhase4(false)
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
                    setPhase4(false)
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
            <div className="VideoPreviewMain">
              <div className="VideoPreviewMainHeader">
                <div style={{ fontSize: "19px", fontWeight: "600", marginBottom: "7px" }}>Video Preview</div>
                <div style={{ fontSize: "17px" }}> This is how your video page will appear on our website. Confirm to upload or go back and make changes.</div>
              </div>
              <div className="VideoPreviewMainMiddle">
                <div className="VideoPreviewContainer">
                  <div className="VideoPreviewDemoLeft">
                    <video className="VideoPreviewDemoVideo"
                    >
                      <source src={videoUrl} type="video/mp4" />
                    </video>
                    <div className="VideoPreviewDemoDetails">
                      <div className="VideoPreviewDemoTitle">{Title}</div>
                      <div className="VideoPreviewDemoDescription">{Description}</div>
                      <div className="VideoPreviewDemoComments">
                        <div className="VideoPreviewDemoSingleComment">Sample Comment</div>
                        <div className="VideoPreviewDemoSingleComment">Sample Comment</div>
                        <div className="VideoPreviewDemoSingleComment">Sample Comment</div>
                      </div>
                    </div>
                  </div>
                  <div className="VideoPreviewDemoRight">
                    {videoExamples.map(num => {
                      return (<div className="VideoPreviewSamples" key={num}>
                        Recommended Video
                      </div>)
                    })}
                  </div>
                </div>
              </div>
              <div className="VideoPreviewMainErrors">
                <div className="VideoPreviewErrors" > {titleError}</div>
              </div>
            </div>
          </div>
          <div className="AddVideoDetailsBottom">
            <button className="CreateVideoBackButton"
              onClick={() => {
                setSelected("Thumbnail")
                setPhase4(false)
                setPhase3(true)
              }}
            >Back</button>
            {Title &&
              <button className="CreateVideoConfirmButton"
                onClick={confirmUpload}
              >Confirm Upload</button>}
            {!Title &&
              <button className="CreateVideoConfirmButton" style={{ backgroundColor: "rgba(56, 124, 241, 0.987)", cursor: "default" }}
                disabled
                onClick={() => {
                }}
              >Confirm Upload</button>}
          </div>
        </div>}


      </div>
    }
  </>)
}


export default CreateVideoModal

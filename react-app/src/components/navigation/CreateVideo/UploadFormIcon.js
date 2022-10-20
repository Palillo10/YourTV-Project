// import { useDispatch } from "react-redux"
// import { useState, useEffect } from "react"
// import { addVideoThunk } from "../../../store/videos"
import UploadVideoIcon from '@material-ui/icons/VideoCallOutlined'
import './CreateVideo.css'
// import FileUploadIcon from '@mui/icons-material/FileUpload';
// import Button from '@material-ui/core/Button'

const UploadFormIcon = ({ user }) => {
  const openModalIcon = () => {
    const background = document.getElementById("ModalBackground")
    background.style.display = "block"
    const Modal = document.getElementById("CreateVideoModal")
    Modal.style.display = "block"
    const body = document.getElementsByTagName('body')[0]
    body.style.overflow = "hidden"
  }
  return (
    <UploadVideoIcon className="UploadVideoIcon" onClick={openModalIcon} />
  )
}


export default UploadFormIcon

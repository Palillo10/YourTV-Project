import { useState } from "react"
import UploadVideoIcon from '@material-ui/icons/VideoCallOutlined'
import './CreateVideo.css'

const CreateVideoModal = () => {
  const [openModal, setOpenModal] = useState(false)
  const [phase1, setPhase1] = useState(false)
  const [phase2, setPhase2] = useState(false)
  const [phase3, setPhase3] = useState(false)
  const [phase4, setPhase4] = useState(false)
  const openModalIcon = () => {
    const background = document.getElementById("ModalBackground")
    background.style.display = "block"
    setOpenModal(true)
    setPhase1(true)
  }

  return (<>
    <UploadVideoIcon onClick={openModalIcon} />
    {openModal &&
      <div className="CreateVideoModal">
        {phase1 && <div>phase1</div>

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

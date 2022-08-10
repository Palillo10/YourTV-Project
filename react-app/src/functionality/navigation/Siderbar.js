import { useState } from 'react'
import './SideBar.css'
import MenuIcon from '@material-ui/icons/Menu';

const SideBar = () => {
  const [openSideBar, setOpenSideBar] = useState(false)
  // const background = document.getElementById("ModalBackground")


  const openSideBarButton = () => {
    const background = document.getElementById("ModalBackground")
    background.style.display = "block"
    setOpenSideBar(!openSideBar)
  }
  const closeSideBarButton = () => {
    const background = document.getElementById("ModalBackground")
    background.style.display = "none"
    setOpenSideBar(!openSideBar)
  }

  return (

    <div className='SideBarDiv'>
      <MenuIcon className="SideBarMenuIcon" onClick={openSideBarButton} />
      {
        openSideBar && <div className="SideBarContainer">
          <div className='SideBarDiv'>
            <MenuIcon className="SideBarMenuIcon" onClick={closeSideBarButton} />
          </div>
        </div>
      }
    </div>
  )
}


export default SideBar

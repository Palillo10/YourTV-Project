import { useState } from 'react'
import './SideBar.css'

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
      <button className="SideBarButton" onClick={openSideBarButton}>sidebar</button>
      {
        openSideBar && <div className="SideBarContainer">
          <div className='SideBarDiv'>
            <button className="SideBarButton" onClick={closeSideBarButton}>sidebar</button>
          </div>
        </div>
      }
    </div>
  )
}


export default SideBar

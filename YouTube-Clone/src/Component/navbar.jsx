import React from 'react'
import menu_icon from '../assets/menu.png'
import logo_icon from '../assets/logo.png'
import search_icon from '../assets/search.png'
import upload_icon from '../assets/upload.png'
import more_icon from '../assets/more.png'
import notification_icon from '../assets/notification.png'
import profile_icon from '../assets/jack.png'
import '../Component/navbar.css'
function Navbar({setSidebar}) {
  return (
   <nav className="flex-div">
        <div className="flexleft flex-div">
            <img src={menu_icon} onClick={()=>setSidebar((priev)=>priev ===true? false:true)} className='menu_icon' />
            <img src={logo_icon} className='logo_icon' />
        </div>
        <div className="flexmiddle flex-div">
        <div className='searchBox flex-div'>
            <input type="text" placeholder='search' className='searchEngne'/>
            <img src={search_icon} className='searchEngneIcon' />
        </div>
        </div>
        <div className="flexright flex-div">
            <img src={upload_icon} alt="" />
            <img src={more_icon} alt="" />
            <img src={notification_icon} alt="" />
            <img src={profile_icon} className='profile-pic' />
        </div>
   </nav>
  )
}
export default Navbar

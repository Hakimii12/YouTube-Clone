import React from 'react'
import PlayeVideo from '../../Component/video-Playe/video-playe'
import Recommended from '../../Component/Recommended-video/Recommended'
import '../video/video.css'
function Video() {
  return (
    <div className='video-container'>
      <PlayeVideo/>
      <Recommended/>
    </div>
  )
}

export default Video

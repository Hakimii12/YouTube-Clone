import React from 'react'
import PlayeVideo from '../../Component/video-Playe/video-playe'
import Recommended from '../../Component/Recommended-video/Recommended'
import '../video/video.css'
import { useParams } from 'react-router-dom'
function Video() {
  const {id,setid}=useParams()
  console.log(id)
  return (
    <div className='video-container'>
      <PlayeVideo id={id}/>
      <Recommended/>
    </div>
  )
}

export default Video

import React, { useEffect, useState } from 'react'
import '../video-Playe/videoPlaye.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import jack from '../../assets/jack.png'
import save from '../../assets/save.png'
import user_profile from '../../assets/user_profile.jpg'
import API_KEY from '../../data'
import moment from 'moment'
import Converter from '../../Converter'
function PlayeVideo({id}) {
   const [videoinfo,setVideoinfo]=useState(null)
   const fetchdata=async()=>{
     const vidInfo_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=${API_KEY}`
     await fetch(vidInfo_url).then(res=>res.json()).then(Data=>setVideoinfo(Data.items[0]))
   }
   useEffect(()=>{
     fetchdata()
   },[id])
  return (
    <div className='play-videos'>
      <iframe src={`https://www.youtube.com/embed/${id}?autoplay`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{videoinfo?videoinfo.snippet.title:'Video Title Not Available'}</h3>
      <div className="video-info">
      <p>{Converter(videoinfo.statistics.viewCount)} &bull; {moment(videoinfo.snippet.publishedAt).fromNow()}</p>
      <div className="video-info-icon">
        <img src={like} alt="" /><span> {Converter(videoinfo.statistics.likeCount)}</span>
        <img src={dislike} alt="" /><span></span>
        <img src={share} alt="" /><span>share</span>
        <img src={save} alt="" /><span>save</span>
      </div>
      </div>
      <hr />
      <div className="video-profileinfo">
        <div className="about-author">
        <img src={videoinfo.snippet.thumbnails.medium.url} alt="" />
        <div className="about-profile">
        <h3>GreatStack</h3>
        <p>1M Subscribers</p>
        </div>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-discription">
        <p>{videoinfo?videoinfo.snippet.description:'Video Descritption Not Available'}</p>
        <hr />
        <p>{Converter(videoinfo.statistics.commentCount)} Comments</p>

        <div className="comment-section">
        <img src={user_profile} alt="" />
        <div className="comment-discription">
        <h4>jack Nicholas <span>1 day ago</span></h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Nesciunt, eveniet ea quidem omnis cum adipisci amet 
           </p>
        </div>
        </div>
        <div className="video-info-icon">
              <img src={like} alt="" /><span> 348</span>
              <img src={dislike} alt="" />
         </div>
 
         <div className="comment-section">
        <img src={user_profile} alt="" />
        <div className="comment-discription">
        <h4>jack Nicholas <span>1 day ago</span></h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Nesciunt, eveniet ea quidem omnis cum adipisci amet 
           </p>
        </div>
        </div>
        <div className="video-info-icon">
              <img src={like} alt="" /><span> 348</span>
              <img src={dislike} alt="" />
         </div> 

         <div className="comment-section">
        <img src={user_profile} alt="" />
        <div className="comment-discription">
        <h4>jack Nicholas <span>1 day ago</span></h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Nesciunt, eveniet ea quidem omnis cum adipisci amet 
           </p>
        </div>
        </div>
        <div className="video-info-icon">
              <img src={like} alt="" /><span> 348</span>
              <img src={dislike} alt="" />
         </div>

         <div className="comment-section">
        <img src={user_profile} alt="" />
        <div className="comment-discription">
        <h4>jack Nicholas <span>1 day ago</span></h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Nesciunt, eveniet ea quidem omnis cum adipisci amet 
           </p>
        </div>
        </div>
        <div className="video-info-icon">
              <img src={like} alt="" /><span> 348</span>
              <img src={dislike} alt="" />
         </div>

         <div className="comment-section">
        <img src={user_profile} alt="" />
        <div className="comment-discription">
        <h4>jack Nicholas <span>1 day ago</span></h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Nesciunt, eveniet ea quidem omnis cum adipisci amet 
           </p>
        </div>
        </div>
        <div className="video-info-icon">
              <img src={like} alt="" /><span> 348</span>
              <img src={dislike} alt="" />
         </div>

         <div className="comment-section">
        <img src={user_profile} alt="" />
        <div className="comment-discription">
        <h4>jack Nicholas <span>1 day ago</span></h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Nesciunt, eveniet ea quidem omnis cum adipisci amet 
           </p>
        </div>
        </div>
        <div className="video-info-icon">
              <img src={like} alt="" /><span> 348</span>
              <img src={dislike} alt="" />
         </div>

         <div className="comment-section">
        <img src={user_profile} alt="" />
        <div className="comment-discription">
        <h4>jack Nicholas <span>1 day ago</span></h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Nesciunt, eveniet ea quidem omnis cum adipisci amet 
           </p>
        </div>
        </div>
        <div className="video-info-icon">
              <img src={like} alt="" /><span> 348</span>
              <img src={dislike} alt="" />
         </div>

         <div className="comment-section">
        <img src={user_profile} alt="" />
        <div className="comment-discription">
        <h4>jack Nicholas <span>1 day ago</span></h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Nesciunt, eveniet ea quidem omnis cum adipisci amet 
           </p>
        </div>
        </div>
        <div className="video-info-icon">
              <img src={like} alt="" /><span> 348</span>
              <img src={dislike} alt="" />
         </div>
      </div>
    </div>
  )
}

export default PlayeVideo
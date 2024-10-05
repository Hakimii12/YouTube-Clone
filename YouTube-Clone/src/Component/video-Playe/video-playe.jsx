import React from 'react'
import '../video-Playe/videoPlaye.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import jack from '../../assets/jack.png'
import save from '../../assets/save.png'
import user_profile from '../../assets/user_profile.jpg'
function PlayeVideo() {
  return (
    <div className='play-videos'>
      <video src={video1} controls autoPlay ></video>
      <h3>Best YouTube Channel To Learn Web Development</h3>
      <div className="video-info">
      <p>15k view &bull; 2 days ago</p>
      <div className="video-info-icon">
        <img src={like} alt="" /><span> 348</span>
        <img src={dislike} alt="" /><span>3</span>
        <img src={share} alt="" /><span>share</span>
        <img src={save} alt="" /><span>save</span>
      </div>
      </div>
      <hr />
      <div className="video-profileinfo">
        <div className="about-author">
        <img src={jack} alt="" />
        <div className="about-profile">
        <h3>GreatStack</h3>
        <p>1M Subscribers</p>
        </div>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-discription">
        <p>channel that makes learning Easy</p>
        <p>Subscribe Greatstack to watch more tutorials on web Development</p>
        <hr />
        <p>130 Comments</p>

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
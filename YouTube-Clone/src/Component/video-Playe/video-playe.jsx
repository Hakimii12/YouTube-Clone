import React, { useEffect, useState } from 'react'
import '../video-Playe/videoPlaye.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import user_profile from '../../assets/user_profile.jpg'
import API_KEY from '../../data'
import moment from 'moment'
import Converter from '../../Converter'
function PlayeVideo({id}) {
   const [videoinfo,setVideoinfo]=useState(null)
   const [channelinfo,setChannelinfo]=useState(null)
   const [commentinfo,setCommentinfo]=useState([])
   const fetchVideodata=async()=>{
     const vidInfo_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`
     await fetch(vidInfo_url).then(res=>res.json()).then(data=>setVideoinfo(data.items[0]))
   
   }
   const fetchChannelinfo=async()=>{
         const channelInfo_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoinfo.snippet.channelId}&key=${API_KEY}`
      await fetch(channelInfo_url).then(res=>res.json()).then(Data=>setChannelinfo(Data.items[0]))
      const commentInfo_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${id}&key=${API_KEY}`
      await fetch(commentInfo_url).then(res=>res.json()).then(data=>setCommentinfo(data.items))
   }
   useEffect(()=>{
     fetchVideodata()
     console.log(videoinfo)
   },[])
   useEffect(()=>{
      fetchChannelinfo()
   },[videoinfo])
  return (
    <div className='play-videos'>
      <iframe src={`https://www.youtube.com/embed/${id}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{videoinfo?videoinfo.snippet.title:'Video Title Not Available'}</h3>
      <div className="video-info">
      <p>{videoinfo?Converter(videoinfo.statistics.viewCount):"information is not provided"} &bull; {videoinfo?moment(videoinfo.snippet.publishedAt).fromNow():"information is not provided"}</p>
      <div className="video-info-icon">
        <img src={like} alt="" /><span> {videoinfo?Converter(videoinfo.statistics.likeCount):"information is not provided"}</span>
        <img src={dislike} alt="" /><span></span>
        <img src={share} alt="" /><span>share</span>
        <img src={save} alt="" /><span>save</span>
      </div>
      </div>
      <hr />
      <div className="video-profileinfo">
        <div className="about-author">
        <img src={videoinfo?videoinfo.snippet.thumbnails.medium.url:"information is not provided"} alt="" />
        <div className="about-profile">
        <h3>{videoinfo?videoinfo.snippet.channelTitle:"information is not provided"}</h3>
        <p>{channelinfo?Converter(channelinfo.statistics.subscriberCount):"information is not provided"}</p>
        </div>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-discription">
        <p>{videoinfo?videoinfo.snippet.description:'Video Descritption Not Available'}</p>
        <hr />
        <p>{videoinfo?Converter(videoinfo.statistics.commentCount):"information is not provided"} Comments</p>
        {commentinfo.map((data,index)=>{
         return(
         <div key={index}>
            <div className="comment-section">
            <img src={data.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
            <div className="comment-discription">
            <h4>{data.snippet.topLevelComment.snippet.authorDisplayName}<span>{moment(data.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h4>
            <p>{data.snippet.topLevelComment.snippet.textDisplay}</p>
            </div>
            </div>
            <div className="video-info-icon">
                  <img src={like} alt="" /><span> {Converter(data.snippet.topLevelComment.snippet.likeCount)}</span>
                  <img src={dislike} alt="" />
             </div>
         </div>)
        })}
        
      </div>
    </div>
  )
}

export default PlayeVideo
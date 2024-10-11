import React, { useEffect, useState } from 'react'
import '../Recommended-video/Recommended.css'
import API_KEY from '../../data'
import Converter from '../../Converter'
import { Link } from 'react-router-dom'
function Recommended({categoryId}) {
    const [recommended,setRecommended]=useState([])
    const fetchRecommendedvideo=async()=>{
        const recommendedvideo_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(recommendedvideo_url).then(res=>res.json()).then(data=>setRecommended(data.items))
    }
    useEffect(()=>{
        fetchRecommendedvideo()
    },[categoryId])
  return (
    <div className="Recommended-video-container">
        {recommended.map((data,index)=>{
            return(<Link to={`/video/${data.snippet.categoryId}/${data.id}`} className="Recommended-video" key={index}>
            <img src={data.snippet.thumbnails.medium.url} alt="" />
            <div className="video-discription">
                <h4>{data.snippet.title}</h4>
                <p>{data.snippet.channelTitle}</p>
                <p>{Converter(data.statistics.viewCount)}</p>
            </div>
           </Link>)
        })}
    </div>
  )
}

export default Recommended

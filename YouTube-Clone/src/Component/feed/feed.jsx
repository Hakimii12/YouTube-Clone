import React, { useEffect, useState } from 'react'
import '../feed/feed.css'
import { Link } from 'react-router-dom'
import Converter from '../../Converter'
import API_KEY from '../../data'
import moment from 'moment'
function feed({catagory}) {
  const [Data,setData]=useState([])
  const fetchdata=async()=>{
    const videoList_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=us&videoCategoryId=${catagory}&key=${API_KEY}`
    await fetch(videoList_url).then(res=>res.json()).then(Data=>setData(Data.items))
}
useEffect(()=>{
   fetchdata()
},[catagory])
  return (
    <div className='feed'>
      {Data.map((data,index)=>{
        return(
      <Link to={`/video/${data.id}`} className="cart">
        <img src={data.snippet.thumbnails.medium.url} alt="" />
        <h2>{data.snippet.title}</h2>
        <h3>{data.snippet.channelTitle}</h3>
        <p  key={index}>{Converter(data.statistics.viewCount)} &bull; {moment(data.snippet.publishedAt).fromNow()}</p>
      </Link>
        )
      })}
    </div>
  )
}

export default feed

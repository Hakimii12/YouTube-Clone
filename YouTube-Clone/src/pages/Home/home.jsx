import React, { useState } from 'react'
import Sidebar from '../../Sidebar/sidebar'
import Feed from '../../Component/feed/feed'
import '../Home/home.css'
function Home({sidebar}) {
  const [catagory,setCatagory]=useState(0);
  return (
    <div>
      <Sidebar sidebar={sidebar} catagory={catagory} setCatagory={setCatagory}/>
      <div className={`container${sidebar ?"":"large-container"}`}>
        <Feed catagory={catagory}/>
      </div>
    </div>
  )
}
export default Home

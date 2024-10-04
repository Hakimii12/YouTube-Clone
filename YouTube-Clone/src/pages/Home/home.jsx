import React from 'react'
import Sidebar from '../../Sidebar/sidebar'
import Feed from '../../Component/feed/feed'
import '../Home/home.css'
function Home({sidebar}) {
  return (
    <div>
      <Sidebar sidebar={sidebar}/>
      <div className={`container${sidebar ?"":"large-container"}`}>
        <Feed/>
      </div>
    </div>
  )
}
export default Home

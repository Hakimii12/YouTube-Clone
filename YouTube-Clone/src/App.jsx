import { useState } from "react"
import Navbar from "./Component/navbar"
import Home from "./pages/Home/home"
import { Router as BrowserRouter,Routes,Route} from "react-router-dom"
import Video from "./pages/video/video"
function App() {
  const [sidebar,setSidebar]=useState(true)
  return (
    <>
    <Navbar setSidebar={setSidebar}/>
    <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>}/>
        <Route path="/video" element={<Video/>}/>
    </Routes>
    </>
  )
}
export default App

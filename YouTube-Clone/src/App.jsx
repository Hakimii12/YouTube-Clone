import { useState } from "react"
import Navbar from "./Component/navbar"
import Home from "./pages/Home/home"
function App() {
  const [sidebar,setSidebar]=useState(true)
  return (
    <>
     <Navbar setSidebar={setSidebar}/>
     <Home sidebar={sidebar}/>
    </>
  )
}
export default App

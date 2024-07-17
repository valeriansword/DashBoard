
import {React } from "react"
import Home from "./Home"
import Tasks from "./Components/Cards/Tasks"
// import Stages from "./Components/Cards/Stages/Stages"
import Levels from "./Components/Cards/Levels"
import { BrowserRouter,Routes,Route } from "react-router-dom"
function App() {
 

  return (
    <BrowserRouter>
  <Routes>
    <Route path="/DashBoard" element={<Home />}></Route>
    <Route path="/DashBoard/levels" element={<Levels />}></Route>
    
  </Routes>
  </BrowserRouter>
  )
}

export default App

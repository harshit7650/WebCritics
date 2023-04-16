import React,{useState} from 'react'
import Main from './Components/Main/Main'
import Navsignup from './Components/Navsignup/Navsignup';
import Navlogin from './Components/Navlogin/Navlogin';
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {

  // const [color, changeColor] = useState("#fff");

  return (
    <div >
     <BrowserRouter>
          <Routes>
            <Route path="/" element={  <Main  />} />
            <Route path="/Signup" element={<Navsignup  />} />
            <Route path="/login" element={<Navlogin  />} />
          </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
import React, { useState } from 'react';
import { getAddres, getKeplrClient } from './scripts/keplrUtil.js'
import './App.css';
import Nav from './components/widgets/Nav/Nav.jsx'
import Home from './components/pages/Home/Home'
import Basicgallery from './components/pages/Gallery/Basicgallery.jsx'
import About from './components/pages/About/About'
import Gaming from './components/pages/Gaming/Gaming'
import Create from './components/pages/Create/Create'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function App() {

  

  let [address,setAddress] = useState(0);

  const handleKepler = async () => {
    const client = await getKeplrClient();
    const newAddress = await getAddres();
    setAddress(newAddress)
  }

  return <>

<Router>
  <Nav handleKeplr={handleKepler}/>
      <Routes>
          <Route path="/" >
            <Route index element={<Home/>} />
            
              <Route path='gallery' element={<Basicgallery/>}>
              </Route>
                
              <Route path='gaming' element= {<Gaming/>} />
              <Route path='about' element={<About/>}/>
              <Route path='create' element={<Create/>}/>
              
              {/* <Route path='dashboard'>
                <Route path=':usedId' element={<Dashboard/>}/>
              </Route> */}
              
          </Route>
      </Routes>
</Router>
  
  </>
}


import React, { useState } from 'react';
import { getAddres, getKeplrClient } from './scripts/keplrUtil.js'
import './App.css';
import Header from './components/widgets/Header/Header.jsx'
import Nav from './components/widgets/Nav/Nav.jsx'
import Actions from './components/widgets/actionContainer/actionContainer.jsx'
import { useNewMoralisObject } from "react-moralis";
import { useMoralisCloudFunction } from "react-moralis";
import DbCall from './components/widgets/cloud/dbCall';
import Home from './components/pages/Home/Home'
import Gallery from './components/pages/Gallery/Gallery'
import Dashboard from './components/pages/Dashboard/Dashboard'
import About from './components/pages/About/About'
import Gaming from './components/pages/Gaming/Gaming'
import Create from './components/pages/Create/Create'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

export default function App() {

  

  let [address,setAddress] = useState(0);

  const handleKepler = async () => {
    // const newAddress = await keplerReadClient();
    const client = await getKeplrClient();
    const newAddress = await getAddres();
    // console.log(newAddress)
    setAddress(newAddress)
  }



// const { save } = useNewMoralisObject("Monster");

//   const saveObject = async () => {
//     const data = {
//       strength: 1024,
//       ownerName: "Aegon",
//       canFly: true,
//     };

//     save(data, {
//       onSuccess: (monster) => {
//         // Execute any logic that should take place after the object is saved.
//         alert("New object created with objectId: " + monster.id);
//       },
//       onError: (error) => {
//         // Execute any logic that should take place if the save fails.
//         // error is a Moralis.Error with an error code and message.
//         alert("Failed to create new object, with error code: " + error.message);
//       },
//     });
//   };

//       const { fetch } = useMoralisCloudFunction(
//         "averageStars",
//         {owner : "Aegon"},
//         {autoFetch: false}
//       );

//       const cloudCall = () =>{
//         fetch({
//           onSuccess: (data) => console.log(data)
//         })
//       }


  return <>
{/* <Nav handleKeplr={handleKepler}/> */}


<Router>
  <Nav handleKeplr={handleKepler}/>
      <Routes>
          <Route path="/" >
            <Route index element={<Home/>} />
            
              <Route path='gallery' element={<Gallery/>}>
              <Route path=':Collection' element={<Gallery/>}/>
                </Route>
                
              <Route path='gaming' element= {<Gaming/>} />
              <Route path='about' element={<About/>}/>
              <Route path='create' element={<Create/>}/>
              
              <Route path='dashboard'>
                <Route path=':usedId' element={<Dashboard/>}/>
              </Route>
              
          </Route>
      </Routes>
</Router>
  
  </>
}


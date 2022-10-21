import React, { useState } from 'react';
import { getAddres, getKeplrClient } from './scripts/keplrUtil.js'
import './App.css';
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav.jsx'
import Actions from './components/actionContainer/actionContainer.jsx'
import { useNewMoralisObject } from "react-moralis";
import { useMoralisCloudFunction } from "react-moralis";
import DbCall from './cloud/components/dbCalls/dbCall';

export default function App() {

  let [address,setAddress] = useState(0);

  const handleKepler = async () => {
    // const newAddress = await keplerReadClient();
    const client = await getKeplrClient();
    const newAddress = await getAddres();
    // console.log(newAddress)
    setAddress(newAddress)
  }

const { save } = useNewMoralisObject("Monster");

  const saveObject = async () => {
    const data = {
      strength: 1024,
      ownerName: "Aegon",
      canFly: true,
    };

    save(data, {
      onSuccess: (monster) => {
        // Execute any logic that should take place after the object is saved.
        alert("New object created with objectId: " + monster.id);
      },
      onError: (error) => {
        // Execute any logic that should take place if the save fails.
        // error is a Moralis.Error with an error code and message.
        alert("Failed to create new object, with error code: " + error.message);
      },
    });
  };

      const { fetch } = useMoralisCloudFunction(
        "averageStars",
        {owner : "Aegon"},
        {autoFetch: false}
      );

      const cloudCall = () =>{
        fetch({
          onSuccess: (data) => console.log(data)
        })
      }


  return <>
  
  <Nav handleKeplr={handleKepler}/>
  <Header/>
  </>
}


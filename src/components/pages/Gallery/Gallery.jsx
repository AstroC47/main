import React, {useEffect, useState} from 'react'
import Nav from '../../widgets/Nav/Nav.jsx'
import GalleryLayout from '../../widgets/Gallery/GalleryLayout.jsx'




export default function Gallery(props) {
  
  const state = {
  nftData : []
}
  
const [nftData,setNftData] = useState([]);

const TestData = [
  {
  key: 0,
  name: "ohWOW",
  ticker: "STARS",
  price: 10000,
  prevImg: "bafybeieiqnrnvah6o6vyhq5cucr6b35i42gdi7lyqvxv5fperijz5r6rou/images",
  tokenId: '100'
},{
  key: 1,
  name: "ohWOW2",
  ticker: "STARS",
  price: 10000,
  prevImg: "bafybeieiqnrnvah6o6vyhq5cucr6b35i42gdi7lyqvxv5fperijz5r6rou/images",
  tokenId: '2'
}
];

const componentDidMount = ()=>{
  const N = [{n:1}]

  const nftDBData = N.map(function(N){
    const M = N
    return{
      key: M.n,
      name: "ohWOW",
      ticker: "STARS",
      price: 10000,
      prevImg: "hi"
    };
    
  })
    console.log(nftDBData)
    setNftData(nftDBData);
    console.log(nftData)
}



useEffect(function() {
  if (nftData.length === 0){
    componentDidMount();
  } else {

  }
})



  return (
    <>
    <Nav/>
    <button></button>
    <h1>Gallery</h1>
    <h2>Coming Soon...</h2>
    <GalleryLayout nftData={TestData}/>
    </>
  )
}

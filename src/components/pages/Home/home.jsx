import React, {useEffect} from 'react'
import Nav from '../../widgets/Nav/Nav.jsx'
import Prev from '../../widgets/bootstrap/Carousell/preview'
import PrevFB from '../../widgets/bootstrap/Carousell/previewFireBucket'
import './home.css'
import RoadMap from '../../widgets/bootstrap/roadmap/Roadmap'
import Infobox from '../../widgets/Infobox/Infobox.jsx'
import Header from '../../widgets/Header/Header.jsx'
import BorderInfoBox from '../../widgets/BorderInfoBox/BorderInfoBox.jsx'
import Slide from '../../widgets/slide/Slide.jsx'
import fireDB, { initializeFireDB, getImgUrl, readDoc, searchAll } from '../../../scripts/fireDB'

import pw1 from '../../../media/pw preview 1 640.png'
import pw2 from '../../../media/pw preview 2 640.png'
import pw3 from '../../../media/pw preview 3 640.png'



export default function Home(props) {

  const firebaseConfig = {

    apiKey: 'AIzaSyDge2EqOTgNqqRXVLulr_xJLa3q9ALTHPo',
  
    authDomain: "area-5f012.firebaseapp.com",
  
    projectId: "area-5f012",
  
    storageBucket: "area-5f012.appspot.com",
  
    messagingSenderId: "200420597498",
  
    appId: "1:200420597498:web:de3172d82ddde9f2a63343",
  
  };


const slideImages = [{imageLink:"",
                    id:1},
                    {imageLink:"",
                    id:2},
                    {imageLink:"",
                    id:3},
                    {imageLink:"",
                    id:4},
                    {imageLink:"",
                    id:5},
                    {imageLink:"",
                    id:6},
                    {imageLink:"",
                    id:7},
                    {imageLink:"",
                    id:8},
                    {imageLink:"",
                    id:9},
                    {imageLink:"",
                    id:10}]

const loadImages = async () =>{
let slideImages = []
for (let i = 1; i < 11; i++) {
  let img = document.getElementById('neo'+i);
  img.setAttribute('src', await getImgUrl('Projects/neoAnimalia/'+i+'.webp'));
}

}




const parallelImages = [
    {
    n: '0',
    name:true,
    image: pw1
  },
  {
    n: '1',
    name:false,
    image: pw2
  },
  {
    n: '2',
    name:false,
    image: pw3
  }
]

const parallelInfo = 'An amazing 1 of 1 art project painted by Spotti and launched by Area47. The first of many!'



useEffect(function() {
  loadImages()
// console.log("home")
})


  return (
    <>
    {/* <img id='myimg'></img> */}
    {/* <Nav handleKeplr = {props.handleKeplr} /> */}
    <Header/>
    {/* <Trending/> */}
    <div className="background">
      <div className="mainHome">

        <div className="carouselPreview">
          <PrevFB/>
        </div>
      
      <div className="subHeadingSection">
      <h2 className="subHeading"> Introducing our newest collection</h2>
      </div>

      <div className="serviceInnerFlex">
        <div className="serviceBorder">
            <div className="service blankLite">
            <Slide images = {slideImages} name={'neo'}/>
            </div>
        </div>
      </div>

      <div className="subHeadingSection">
      <h2 className="subHeading"> Take a look at our previous milestones</h2>
      </div>
            <Infobox/> 
      </div>
    </div>
    </>
  )
}

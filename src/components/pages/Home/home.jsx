import React from 'react'
import Nav from '../../widgets/Nav/Nav.jsx'
import Prev from '../../widgets/bootstrap/Carousell/preview'
import './home.css'
import RoadMap from '../../widgets/bootstrap/roadmap/Roadmap'
import Header from '../../widgets/Header/Header.jsx'

export default function home(props) {
  return (
    <>
    {/* <Nav handleKeplr = {props.handleKeplr} /> */}
    <Header/>
    {/* <Trending/> */}
    <div className="background">
      <div className="">
        <div className="carouselPreview">
          <Prev/>
      
        </div>
        
      </div>
      <RoadMap/>
    </div>
    </>
  )
}

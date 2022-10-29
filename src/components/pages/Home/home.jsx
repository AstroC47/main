import React from 'react'
import Nav from '../../widgets/Nav/Nav.jsx'
import Prev from '../../widgets/bootstrap/Carousell/preview'
import './home.css'
import RoadMap from '../../widgets/bootstrap/roadmap/Roadmap'

export default function home(props) {
  return (
    <>
    <Nav handleKeplr = {props.handleKeplr} />
    {/* <Trending/> */}
    <div className="background">
      <div className="main">
        <div className="carouselPreview">
          <Prev/>
      
        </div>
        
      </div>
      <RoadMap/>
    </div>
    </>
  )
}

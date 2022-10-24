import React from 'react'
import Nav from '../../widgets/Nav/Nav.jsx'
import Prev from '../../widgets/bootstrap/Carousell/preview'
import './home.css'

export default function home(props) {
  return (
    <>
    <Nav handleKeplr = {props.handleKeplr} />
    {/* <Trending/> */}
    <div className="background">
      <div className="main">
        <div className="preview">
          <Prev/>
        </div>
      </div>
    </div>
    </>
  )
}

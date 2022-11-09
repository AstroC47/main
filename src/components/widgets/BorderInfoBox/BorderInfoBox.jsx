import React from 'react'
import './BorderInfoBox.css'

export default function BorderInfoBox(props) {
  return (
    <>
    <div className="serviceInnerFlex">
        <div className="serviceBorder">
            <div className="service blankLite">
                <h3> {props.header} </h3>
                <br/>
                <p>{props.text}</p>
            </div>
        </div>
      </div>
    </>
  )
}

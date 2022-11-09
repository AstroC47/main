import React from 'react'
import CollectionShowCase from './CollectionShowCase'
import './GalleryLayout.css'

export default function GalleryLayout(props) {

  return (
    <>
    <div className="background">
    <div className="mainShowcaseArea">
      
      <div className="blockBorder">
        <div className="blockBorderInner">

        
        <div className="showCaseArea blankLite">

            {
            props.nftData.map( ({key,name,price,prevImg,tokenId}) => 
            <CollectionShowCase 
            key = {key}
            name = {name} 
            prevImg = {prevImg} 
            price = {price}
            tokenId={tokenId}/>)
            }

        </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

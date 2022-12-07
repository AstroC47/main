import React, {useEffect} from 'react'
import'./CollectionShowCase.css'
import { getNftImage } from '../../../scripts/ipfsUtils.js'

export default function CollectionShowCase(props) {
  let preview_URL = null;

const getImg = async() =>{
  preview_URL = await getNftImage(props.prevImg,props.tokenId,props.format)
  const key = '.'+props.id
  const prev = document.querySelector(key)
  // console.log(`.${props.name}`)
  prev.src = preview_URL
}

const nftClick = () =>{

console.log(props.name)
}

  useEffect(function() {
    getImg()
  })

  return (
    <>
    <div className="showCaseMain" onClick={nftClick}>
        <div className="nftPreview" >
            <img className={`${props.id}`} src={preview_URL} alt= 'img' width="100" height="100"/>
        </div>
        <div className="actions">
            {props.name}
        </div>
    </div>
    </>
  )
}

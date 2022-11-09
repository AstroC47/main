import React, {useEffect} from 'react'
import'./CollectionShowCase.css'
import { getNftImage } from '../../../scripts/ipfsUtils.js'

export default function CollectionShowCase(props) {
  let preview_URL = null;

const getImg = async() =>{
  preview_URL = await getNftImage(props.prevImg,props.tokenId,".png")
  const key = '.'+props.name
  const prev = document.querySelector(key)
  // console.log(`.${props.name}`)
  prev.src = preview_URL
  console.log(prev.src)

}
  // getImg()

  useEffect(function() {
    getImg()
  })

  return (
    <>
    <div className="showCaseMain">
        <div className="nftPreview">
            <img className={`${props.name}`} src={preview_URL} alt= 'img' width="100" height="100"/>
        </div>
        <div className="actions">
            {props.price}
        </div>
    </div>
    </>
  )
}

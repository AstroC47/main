import React from 'react'
import Header from'../../widgets/Header/Header.jsx'
import './create.css'
import BorderInfoBox from '../../widgets/BorderInfoBox/BorderInfoBox.jsx'



export default function Create() {
  
  const textForLaunch = 
  `Talk to us on Discord and we can help you launch your own collection be it 1 of 1 art
  pieces or a collection of regenerative art on a variety of blockchains.`

  const textForShow = 
  `We are open to showcase collections from any blockchain!
  DM an admin on our Discord and we will get back to you.`

  const textForAds = `
  Buy an advertisement campaign that fits your budget and reaches the correct audiences.
  `

  const textForArt = `
  We have very talented artists that can design or follow the style that you 
  want for your project. Contact us via Discord or Twitter.
  `

  return (
    <>
    <Header/>
    
    <BorderInfoBox 
    header= {'Want to showcase NFTs on the Area47 gallery?'}
    text= {textForShow}
    />

    <BorderInfoBox 
    header= {'Want to launch your own NFT collection?'}
    text= {textForLaunch}
    />

    <BorderInfoBox 
    header= {'Need art for your NFT collection?'}
    text= {textForArt}
    />

    </>
  )
}

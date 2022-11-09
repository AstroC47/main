import React from 'react'
import Nav from '../../widgets/Nav/Nav.jsx'
import Header from '../../widgets/Header/Header.jsx'
import './About.css'
import BorderInfoBox from '../../widgets/BorderInfoBox/BorderInfoBox.jsx'

export default function About() {
  return (
    <>
    {/* <Nav/> */}
    <Header/>
    <BorderInfoBox header={'Hello and welcome to area47.'}
    text={'We are a small team building the future of web3 entering the space through the NFT market.We aim to build and provide valuable cross chain projects'}/>

    <p>Our current goals are to promote 1:1 Art in the NFT space and in this way help artists around 
      the world to be seen by potential buyers on the NFT market. We are also building a competitive 
      gaming platform for mainstream games.</p>
    </>
  )
}

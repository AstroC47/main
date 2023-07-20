import React from 'react'
import Header from '../../widgets/Header/Header.jsx'
import './About.css'
import BorderInfoBox from '../../widgets/BorderInfoBox/BorderInfoBox.jsx'

export default function About() {
  
  const textForBio = `We are an NFT project that launched in March 2022 with our genesis project Classified Cats on Stargaze. 
  Our goal is to grow a Area47 into a mature cross chain project, focused on developing the web3 space in our own creative way.
  Till date we have launched multiple sucessful NFT projects, both regenerative and 1:1 art collections in collaboration with very talented artists.
  Along side this we are constantly building and developing innovative utilities for our holders, one of the recents being a 1:1 art gallery and soft 
  launchpad which allows us to help more talented artists enter the web3 space in a safe and easy way.`

  return (
    <>
    <Header/>
    <div>
        <BorderInfoBox header={'Welcome to Area47'} text={textForBio}/>
      </div>

    {/* <BorderInfoBox header={'Hello and welcome to area47.'}
    text={'We are a small team building the future of web3 entering the space through the NFT market.We aim to build and provide valuable cross chain projects'}/> */}


    
    </>
  )
}

import React, { useEffect } from 'react'
import Header from '../../widgets/Header/Header.jsx'
import Slide from '../../widgets/slide/Slide.jsx'
import './Basicgallery.css'
import fireDB, {getImgUrl, countNft } from '../../../scripts/fireDB'

export default function Basicgallery() {

    let neoImages = []
    let arcadicImages = []

    for (let i = 1; i <= 10; i++) {
        neoImages.push({id:i});
        
    }

    for (let i = 1; i <= 11; i++) {
        arcadicImages.push({id:i});
        
    }

    const autoFindImages = async (projectName) =>{

        const nftCount = await countNft('project',projectName)

        for (let i = 1; i <= nftCount; i++) {
            const imgLink = await getImgUrl('Projects/'+projectName+'/'+i+'.webp')
            console.log(imgLink)

            let img = document.getElementById(projectName+i);
            img.setAttribute('src', imgLink);
          }
        
       }

    useEffect(function() {
        autoFindImages('neoAnimalia')
        autoFindImages('arcadicBliss')
      })

  return (
    <>
<Header/>

<div className="background">
        <div className="mainHome">

            <h1><b>House of Area47 Art</b></h1>


<div className="serviceInnerFlex">
        <div className="serviceBorder">
            <div className="blankLite serviceHeading">
                
                <div className="slideHeading">
                <div className="slideHeadingLeft">
                    <p className='collectionName'> <b>Neo Animalia</b> </p>
                </div>

                <div className="slideHeadingRight">
                    <p className='artistName'> <b>Siren</b> </p>
                </div>
            </div>

            <Slide images = {neoImages} name={'neoAnimalia'}/>

            <div className="galleryInfo">
                <div className="galleryHeading">Description:</div> 
                <div className="galleryText">Neo Animalia is a 1:1 collection created digitally by the artist Rowan. 
                                            The collection features 10 South African inspired animals with a digital and gaming aesthetic. 
                                            This collection will look great printed out on a wall in a gaming room or living room!</div>
            </div>

            <div className="galleryInfo">
                <div className="galleryHeading">Extras:</div> 
                <div className="galleryText">Holders recieved a custom Twitter banner to show of their Neo Animal</div>
            </div>

            </div>
        </div>
      </div>

        </div>
</div>

<div className="serviceInnerFlex">
        <div className="serviceBorder">
            <div className="blankLite serviceHeading">
                
                <div className="slideHeading">
                <div className="slideHeadingLeft">
                    <p className='collectionName'> <b>Arcadic Bliss</b> </p>
                </div>

                <div className="slideHeadingRight">
                    <p className='artistName'> <b>Spotti</b> </p>
                </div>
            </div>
            <Slide images = {arcadicImages} name={'arcadicBliss'}/>


            <div className="galleryInfo">
                <div className="galleryHeading">Description:</div> 
                <div className="galleryText">   The author envisages a dystopian reality where the dinosaurs are still with us, or better, were still with us: in this collection of 11 watercolours, 
                                                men in redingote and women in crinolines contemplate the remains of a glorious past in the company of the fascinating animals that come from an epoch before history began. 
                                                Every collection piece juggles between different romanticized time planes, with a metagame starting from us in the NFT era, 
                                                observing people from a few centuries ago walking between Roman ruins in the company of impossible pets coming from prehistory. 
                                                The game is clever and the result peaceful and enjoyable, giving us a surprised smile and the acknowledgment that dinosaurs could have been perfectly at ease in the XVIII century Italy. 
                                                The Arcadic bliss is, however, an idyll that we know to be false, and the eleventh piece is there to reveal it to us. Goethe would have adored them, and so you will
</div>
            </div>

            <div className="galleryInfo">
                <div className="galleryHeading">Extras:</div> 
                <div className="galleryText">Holders could receive the original watercolour by paying for only the shipping extra</div>
            </div>


            </div>
        </div>
      </div>

    </>
  )
}

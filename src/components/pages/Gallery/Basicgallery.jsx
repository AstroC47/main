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

            <h3> House of Area47 </h3>


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
            </div>
        </div>
      </div>

    </>
  )
}

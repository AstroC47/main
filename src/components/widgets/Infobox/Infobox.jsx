import React, { useEffect } from 'react'
import './Infobox.css'
import RoadMapPreview from '../bootstrap/Carousell/RoadMapPreview.jsx'
import Slide from '../slide/Slide.jsx'
import fireDB, {getImgUrl, countNfts} from '../../../scripts/fireDB'

import pw1 from '../../../media/pw preview 1 640.png'
import pw2 from '../../../media/pw preview 2 640.png'
import pw3 from '../../../media/pw preview 3 640.png'

export default function Infobox(props) {

  const loadImages = async (projectName) => {

    for (let i = 1; i <= 3; i++) {
      const imgLink = await getImgUrl('preview/'+projectName+'/'+i+'.webp')
      console.log(imgLink)
      console.log(projectName)

      let img = document.getElementById(projectName+i);
      img.setAttribute('src', imgLink);
    }
    
  }

    let parallelImages = []

    for (let i = 1; i <= 3; i++) {

      if (i == 1) {
        console.log('true')
      }
      
      parallelImages.push({n:i,id:'parallelWorlds'+i,active:(i==1?true:false)});
      
  }

  useEffect(function() {
    loadImages('parallelWorlds')
  })

    // const parallelImages = [
    //     {
    //     n: '0',
    //     active:true,
    //     name: "pw",
    //     image: pw1
    //   },
    //   {
    //     n: '1',
    //     active:false,
    //     name: "pw",
    //     image: pw2
    //   },
    //   {
    //     n: '2',
    //     active:false,
    //     name: "pw",
    //     image: pw3
    //   }
    // ]
    
  return (
    <>
    <div className="infoBoxInnerFlex">
    <div className="infoBoxBorder">
    <div className="infoBox blankLite">
        <div className="infoBoxGrid">

            <div className="gridImage"><RoadMapPreview images={parallelImages} index={'1'} /></div>
            
            <div className="gridInfo">
                <div className="infoBoxHeader"> Classified Cats</div> 
                <div className="infoBoxInfo">Classified Cats was the first project launched by Area47 on the stargaze network. 
                      The collection originally featured 7400 absolutely adorable space cats.
                      some of the collection was burned to reduce the supply and increase the 
                      value of holders and <b>1863 phase 1 cats remained.</b></div>
                
                <div className="infoBoxInfo"> <br/> This collection was the start of the Area47 discord, Twitter and brought forth the extremely rare laser eye cats sub-committee</div>
                <div className="extraInfo"></div>
            </div>
        
        </div>
    </div>
    </div>
    </div>





    <div className="infoBoxInnerFlex">
    <div className="infoBoxBorder">
    <div className="infoBox blankLite">
        <div className="infoBoxGrid">
            
            <div className="gridInfo">
                <div className="infoBoxHeader">Parallel Worlds</div> 
                <div className="infoBoxInfo">An amazing 1 of 1 art project painted by <b>Spotti</b> and launched by Area47. The first of many!</div>
                <div className="extraInfo">Physical original paintings available on request on our discord</div>
            </div>

            <div className="gridImage"><RoadMapPreview images={parallelImages} index={'2'} /></div>

        </div>

    </div>
    </div>
    </div>



    <div className="infoBoxInnerFlex">
    <div className="infoBoxBorder">
    <div className="infoBox blankLite">
        <div className="infoBoxGrid">

            <div className="gridImage"><RoadMapPreview images={parallelImages} index={'3'} /></div>

            <div className="gridInfo">
                <div className="infoBoxHeader">Parallel Worlds</div> 
                <div className="infoBoxInfo">An amazing 1 of 1 art project painted by <b>Spotti</b> and launched by Area47. The first of many!</div>
                <div className="extraInfo">Physical original paintings available on request on our discord</div>
            </div>

        </div>

    </div>
    </div>
    </div>

    </>
  )
}

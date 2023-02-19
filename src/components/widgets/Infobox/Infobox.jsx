import React from 'react'
import './Infobox.css'
import RoadMapPreview from '../bootstrap/Carousell/RoadMapPreview.jsx'
import Slide from '../slide/Slide.jsx'

import pw1 from '../../../media/pw preview 1 640.png'
import pw2 from '../../../media/pw preview 2 640.png'
import pw3 from '../../../media/pw preview 3 640.png'

export default function Infobox(props) {

    const parallelImages = [
        {
        n: '0',
        name:true,
        image: pw1
      },
      {
        n: '1',
        name:false,
        image: pw2
      },
      {
        n: '2',
        name:false,
        image: pw3
      }
    ]
    
  return (
    <>
    <div className="infoBoxInnerFlex">
    <div className="infoBoxBorder">
    <div className="infoBox blankLite">
        <div className="infoBoxGrid">

            <div className="gridImage"><RoadMapPreview images={parallelImages} name={'1'} /></div>
            
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

            <div className="gridImage"><RoadMapPreview images={parallelImages} name={'2'} /></div>

        </div>

    </div>
    </div>
    </div>



    <div className="infoBoxInnerFlex">
    <div className="infoBoxBorder">
    <div className="infoBox blankLite">
        <div className="infoBoxGrid">

            <div className="gridImage"><RoadMapPreview images={parallelImages} name={'3'} /></div>

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

import React, { useEffect } from 'react'
import './Infobox.css'
import RoadMapPreview from '../bootstrap/Carousell/RoadMapPreview.jsx'
import fireDB, {getImgUrl} from '../../../scripts/fireDB'

export default function Infobox(props) {

  const loadImages = async (projectName, amountImages) => {

    for (let i = 1; i <= amountImages; i++) {
      const imgLink = await getImgUrl('preview/'+projectName+'/'+i+'.webp')
      console.log(imgLink)
      console.log(projectName)

      let img = document.getElementById(projectName+i);
      img.setAttribute('src', imgLink);
    }
    
  }

    let parallelImages = []
    let classcImages = []

    for (let i = 1; i <= 3; i++) {

      if (i == 1) {
        console.log('true')
      }
      
      parallelImages.push({n:i,id:'parallelWorlds'+i,active:(i==1?true:false)});
      
  }

  for (let i = 1; i <= 4; i++) {

    if (i == 1) {
      console.log('true')
    }
    
    classcImages.push({n:i,id:'classifiedCats'+i,active:(i==1?true:false)});
    
}

  useEffect(function() {
    loadImages('parallelWorlds',3)
    loadImages('classifiedCats',4)
  })
    
  return (
    <>
    <div className="infoBoxInnerFlex">
    <div className="infoBoxBorder">
    <div className="infoBox blankLite">
        <div className="infoBoxGrid">

            <div className="gridImage"><RoadMapPreview images={classcImages} index={'2'} /></div>
            
            <div className="gridInfo">
                <div className="infoBoxHeader"> Classified Cats</div> 
                {/* <div className="infoBoxInfo">Classified Cats was the first project launched by Area47 on the stargaze network. 
                      The collection originally featured 7400 absolutely adorable space cats.
                      some of the collection was burned to reduce the supply and increase the 
                      value of holders and <b>1863 phase 1 cats remained.</b></div> */}
                <div className="infoBoxInfo"> Classified Cats was the first project launched by Area47 on the stargaze network.This collection was the start of the Area47 discord, Twitter and brought forth the extremely rare laser eye cats sub-committee.</div>
                      
                <div className="infoBoxInfo"> <br/> Classified Cats: A New Era was our second phase featuring <b>Dragons, Maverick, storm trooper and more 1:1s.</b> Much more utility has also been added such as crown and 1:1 sub-committees</div>

                <div className="infoBoxInfo"> <br/> An Autumn and Christmas collection has also been released</div>
                
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

            <div className="gridImage"><RoadMapPreview images={parallelImages} index={'1'} /></div>

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
                <div className="infoBoxHeader">Neo Animalia</div> 
                <div className="infoBoxInfo"> Neo Animalia features animals native to South Africa with a beautiful digital gaming aesthetic. <b>Rowan</b></div>
                <div className="extraInfo">The first 1:1 collection on Teritori!</div>
                <div className="extraInfo"></div>
            </div>

        </div>

    </div>
    </div>
    </div>

    </>
  )
}

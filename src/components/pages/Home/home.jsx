import React, {useEffect} from 'react'
import PrevFB from '../../widgets/bootstrap/Carousell/previewFireBucket'
import './home.css'
import Infobox from '../../widgets/Infobox/Infobox.jsx'
import Header from '../../widgets/Header/Header.jsx'
import Slide from '../../widgets/slide/Slide.jsx'
import fireDB, {getImgUrl} from '../../../scripts/fireDB'

export default function Home(props) {

  let slideImages = []

  for (let i = 1; i <= 11; i++) {
    slideImages.push({id:i});
  }

const loadImages = async (projectName, amountImages) =>{
for (let i = 1; i <= amountImages; i++) {
  let img = document.getElementById('newextCollectionSlide'+i);
  img.setAttribute('src', await getImgUrl('Projects/'+projectName+'/'+i+'.webp'));
}

}


useEffect(function() {
  loadImages('arcadicBliss', 11)
})


  return (
    <>
    <Header/>
    <div className="background">
      <div className="mainHome">

        <div className="carouselPreview">
          <PrevFB/>
        </div>
      
      <div className="subHeadingSection">
      <h2 className="subSubHeading"> Introducing our newest collection</h2>
      <h1 className="subHeading"> <b>Neo Animalia</b></h1>
      </div>

      <div className="serviceInnerFlex">
        <div className="serviceBorder">
            <div className="service blankLite">
            <Slide images = {slideImages} name={'newextCollectionSlide'}/>
            </div>
        </div>
      </div>

      <div className="subHeadingSection">
      <h2 className="subHeading"> Take a look at our previous milestones</h2>
      </div>
            <Infobox/> 
      </div>
    </div>
    </>
  )
}

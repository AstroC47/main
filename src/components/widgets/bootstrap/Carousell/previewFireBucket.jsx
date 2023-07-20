import React from 'react'
import fireDB, {getImgUrl} from '../../../../scripts/fireDB'
import "./prevFB.css"


export default function preview() {

  const init = async () =>  {
    let url = ''
    let id = ''
    let img = ''

    const homeBannerNumbers = ['1','2','3']

    for (let i = 0; i < homeBannerNumbers.length; i++) {
      id = i
      id = id +1
        url = await getImgUrl('homeBanner/'+homeBannerNumbers[i]+'.webp');
      
      toString(id)

    img = document.getElementById('Prev'+id);
    img.setAttribute('src', url);
      
    }
  
    
  }

  const previewClick = (e) => {
    console.log(e.target.name)
    window.open(e.target.name, '_blank');
  }

  init()

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active" >
      <img id='Prev1' className="d-block w-100" name='https://app.teritori.com/collection/tori-tori1rcmvfsn77pd6m04ctqj3wcu66pvrw9p265cdl72w4zarfup2rv7qnjklmn' alt="Neo Animalia" onClick={previewClick}/>
    </div>
    <div className="carousel-item">
      <img id='Prev2'className="d-block w-100" name='https://www.stargaze.zone/launchpad/stars10w3rklmha7uk0tzn0yn8jrsfs4yqxyckvyatmeygexf74h2xfvlsppflhe' alt="Parallel Worlds" onClick={previewClick}/>
    </div>
    <div className="carousel-item">
      <img id='Prev3'className="d-block w-100" name='https://www.stargaze.zone/launchpad/stars1a62akq3au3m58ya3860su3weldumppwse4hktt7vgqxtdm7cu7nshy98ht' alt="Classified Cats" onClick={previewClick}/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

  )
}

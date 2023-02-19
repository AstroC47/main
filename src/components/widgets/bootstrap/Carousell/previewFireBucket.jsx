import React from 'react'
import prev from '../../../../media/ClassCHD.png'
import prev1 from '../../../../media/previewLrg.webp'
import prev2 from '../../../../media/Parallel Worlds Banner.png'
import prev3 from '../../../../media/Neo Animalia Banner web.png'
import fireDB, { initializeFireDB, initStorage, readDoc, searchAll } from '../../../../scripts/fireDB'


export default function preview() {

  const init = async () =>  {
  const url = await initStorage();
  console.log(url)

    const img = document.getElementById('myimg');
    img.setAttribute('src', url);
  }

  const previewClick = (e) => {
    console.log(e.target.alt)
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
      <img src= { prev2 } className="d-block w-100" alt="ClassC" onClick={previewClick}/>
    </div>
    {/* <div className="carousel-item">
      <img className="d-block w-100" src= { prev1 } alt="Parallel Worlds"/>
    </div> */}
    <div className="carousel-item">
      <img className="d-block w-100" src= { prev2 } alt="Parallel Worlds"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src= { prev3 } alt="Neo Animalia"/>
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
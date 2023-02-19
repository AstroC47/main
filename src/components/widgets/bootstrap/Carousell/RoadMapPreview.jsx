import React,{ useEffect } from 'react'


export default function RoadMapPreview(props) {

  const name = props.name;  
  
  // useEffect(function() {
    //   const sliders = document.querySelector('.carouselExampleIndicators1');
    //   console.log(sliders)

    //   })

  return (
    <div id={`carouselExampleIndicators${name}`} className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
        {
        props.images.map( ({n, name, image}) => 
        <li data-target={`#carouselExampleIndicators${name}`} key = {n} data-slide-to={n} className={`${name?"active":""}`}></li>)
        }
  </ol>

  <div className="carousel-inner">
  {props.images.map( ({n, name, image}) => 
        <div key = {n}  className={`carousel-item ${name?"active":""}`}>
        <img src= { image } className="d-block w-100" alt="slide"/>
        </div>
    )
    }
  </div>

  <a className="carousel-control-prev" href={`#carouselExampleIndicators${name}`} role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href={`#carouselExampleIndicators${name}`} role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

  )
}
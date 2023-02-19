import React, {useEffect, useState} from 'react'
import "./slide.css"

export default function Slide(props) {

const name = props.name

const [init,setInit] = useState(false)

const images = props.images
let slider = null
let image = null
let arrowIcons = null
let clickable = true;

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
let firstImageWidth = null;
let firstImage = null;
let scrollWidth = null;

const componentDidMount = () =>{

  setInit(true)
  slider = document.querySelector(".slider"+name);
  image = document.querySelectorAll(".sliderImage"+name);
  firstImage = slider.querySelectorAll(".sliderImage"+name)[0];
  arrowIcons = document.querySelectorAll(".sliderWrapper"+name+" i")

  slider.addEventListener("mousedown",dragStart);
  slider.addEventListener("mousemove",dragging);
  slider.addEventListener("mouseup",dragStop);
  slider.addEventListener("mouseleave",dragStop);

  slider.addEventListener("touchstart",dragStart);
  slider.addEventListener("touchmove",dragging);
  slider.addEventListener("touchend",dragStop);

  scrollWidth =  slider.scrollWidth - slider.clientWidth;

  arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      slider.scrollLeft += icon.id == "left" ? -firstImageWidth : firstImageWidth
      firstImageWidth = (firstImage.clientWidth + 14);
      let amountOfFrames = (Math.abs(Math.round(slider.scrollLeft / firstImageWidth)));

      if (slider.scrollLeft%firstImageWidth != 0){
        slider.scrollLeft = amountOfFrames*firstImageWidth
      }
      const sliderBodyWidth = document.querySelector(".sliderBody"+name).clientWidth
      console.log('sliderBody width', sliderBodyWidth)
      console.log('images Width',firstImageWidth*6)
      console.log('slider scroll left', slider.scrollLeft)
      console.log('first img width 6.5', firstImageWidth*3.5)

      if ((sliderBodyWidth <= firstImageWidth) && (slider.scrollLeft >= firstImageWidth*8.5)){
      slider.scrollLeft = (amountOfFrames-1)*firstImageWidth
    } else if ((sliderBodyWidth <= firstImageWidth*2) && (sliderBodyWidth > firstImageWidth) && (slider.scrollLeft >= firstImageWidth*7.5)){
      slider.scrollLeft = (amountOfFrames-1)*firstImageWidth
    } else if ((sliderBodyWidth <= firstImageWidth*3) && (sliderBodyWidth > firstImageWidth) && (slider.scrollLeft >= firstImageWidth*6.5)){
      slider.scrollLeft = (amountOfFrames-1)*firstImageWidth
    } else if ((sliderBodyWidth <= firstImageWidth*4) && (sliderBodyWidth > firstImageWidth*3.5) && (slider.scrollLeft >= firstImageWidth*5.5)){
      slider.scrollLeft = (amountOfFrames-1)*firstImageWidth
    } else if ((sliderBodyWidth <= firstImageWidth*5) && (sliderBodyWidth > firstImageWidth) && (slider.scrollLeft >= firstImageWidth*4.5)){
      slider.scrollLeft = (amountOfFrames-1)*firstImageWidth
    }else if ((sliderBodyWidth > firstImageWidth*5) && (slider.scrollLeft >= firstImageWidth*3.5)){
      slider.scrollLeft = (amountOfFrames-1)*firstImageWidth
    }

    })
  })
  
  for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("mouseup",openImage);
  }

}

const refresh = () =>{

}

const dragStart = (e) => {
  e.preventDefault()
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = slider.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    clickable = false;
    e.preventDefault()
    // slider.scrollLeft = e.pageX;
    isDragging = true
    slider.classList.add("dragging")
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDiff;
    // showHideIcons();
}

const dragStop = () => {
  clickable = true;
  isDragStart = false;
  slider.classList.remove("dragging")
  if(!isDragging) return;
  isDragging = false;
  autoSlide();
}

const openImage = (e) => {
  if (clickable == true){
  e.preventDefault()
  // console.log(e.target.src)
}
}

const showHideIcons = () => {
  arrowIcons[0].style.display = slider.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display = slider.scrollLeft == scrollWidth ? "none" : "block";
}

const autoSlide = () => {
  if(slider.scrollLeft == (slider.scrollWidth - slider.clientWidth)) return;
  if(slider.scrollLeft == 0) return;

  positionDiff = Math.abs(positionDiff)
  let firstImageWidth = firstImage.clientWidth + 14;
  let valDifference = firstImageWidth - positionDiff;
  // let amountOfFrames = (Math.abs(Math.round(valDifference / firstImageWidth)));
  let amountOfFrames = (Math.abs(Math.round(slider.scrollLeft / firstImageWidth)));

  if (slider.scrollLeft > prevScrollLeft){
    slider.scrollLeft += positionDiff > firstImageWidth / 3 ? ((firstImageWidth * amountOfFrames) + valDifference) : -positionDiff
    // console.log(slider.scrollLeft)
  } else {
    slider.scrollLeft -= positionDiff > firstImageWidth / 3 ? ((firstImageWidth * amountOfFrames) + valDifference) : -positionDiff
    // console.log(slider.scrollLeft)
  }
  
  if (slider.scrollLeft%firstImageWidth != 0){
    // console.log('here', slider.scrollLeft/firstImageWidth)
    slider.scrollLeft = amountOfFrames*firstImageWidth
  }
}


useEffect(function() {
  if (init === false){
    componentDidMount()
  } else {
    refresh()
  }
})

  return (
    <>
    <div className={`sliderBody${name} sliderBody`}>
        <div className={`sliderWrapper${name} sliderWrapper`}>
            <i id="left" className="fa-solid fa-angle-left"></i>
            <div className={`slider${name} slider`}>

            {images.map(({imageLink,id}) =>
            {
                return(
                <img className={`sliderImage${name} sliderImage`} key={id} src={imageLink} alt="img" />
            )}
            )}

            </div>
            <i id = "right" className="fa-solid fa-angle-right"></i>
        </div>
    </div>
    </>
  )
}

import React, {useEffect, useState} from 'react'
import "./slide.css"

export default function Slide(props) {

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
  slider = document.querySelector(".slider");
  image = document.querySelectorAll(".sliderImage");
  firstImage = slider.querySelectorAll(".sliderImage")[0];
  arrowIcons = document.querySelectorAll(".sliderWrapper i")

  slider.addEventListener("mousedown",dragStart);
  slider.addEventListener("mousemove",dragging);
  slider.addEventListener("mouseup",dragStop);
  slider.addEventListener("mouseleave",dragStop);

  slider.addEventListener("touchstart",dragStart);
  slider.addEventListener("touchmove",dragging);
  slider.addEventListener("touchend",dragStop);

  scrollWidth =  slider.scrollWidth - slider.clientWidth;
  console.log(scrollWidth)

  arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      slider.scrollLeft += icon.id == "left" ? -firstImageWidth : firstImageWidth
      firstImageWidth = (firstImage.clientWidth + 14);
      console.log(firstImageWidth)
      // setTimeout(() => showHideIcons(),60);
    })
  })
  
  for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("mouseup",openImage);
  }

  console.log("loaded")

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
  console.log(e.target.src)
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
  let amountOfFrames = (Math.abs(Math.round(valDifference / firstImageWidth)));

  if (slider.scrollLeft > prevScrollLeft){
    slider.scrollLeft += positionDiff > firstImageWidth / 3 ? ((firstImageWidth * amountOfFrames) + valDifference) : -positionDiff
    console.log(slider.scrollLeft) 
  } else {
    slider.scrollLeft -= positionDiff > firstImageWidth / 3 ? ((firstImageWidth * amountOfFrames) + valDifference) : -positionDiff
    console.log(slider.scrollLeft)
  }
  
  if (slider.scrollLeft != firstImageWidth){

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
    <div className="sliderBody">
        <div className="sliderWrapper">
            <i id="left" className="fa-solid fa-angle-left"></i>
            <div className="slider">

            {images.map(({imageLink,id}) =>
            {
                return(
                <img className="sliderImage" key={id} src={imageLink} alt="img" />
            )}
            )}

            </div>
            <i id = "right" className="fa-solid fa-angle-right"></i>
        </div>
    </div>
    <script src='./slide.js'></script>
    </>
  )
}

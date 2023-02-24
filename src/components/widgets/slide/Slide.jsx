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

  const nftCount = image.length

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
      firstImageWidth = (firstImage.clientWidth + 14);
      slider.scrollLeft += icon.id == "left" ? -firstImageWidth : firstImageWidth
      let amountOfFrames = (Math.abs(Math.round(slider.scrollLeft / firstImageWidth)));
      // autoSlide()

      // if (slider.scrollLeft%firstImageWidth != 0){
      //   slider.scrollLeft = amountOfFrames*firstImageWidth
      // }

    //   const sliderBodyWidth = document.querySelector(".sliderBody"+name).clientWidth
    //   console.log('')
    //   console.log('sliderBody width', sliderBodyWidth)
      // console.log('images Width',firstImageWidth)
      // console.log('slider scroll left', slider.scrollLeft)
    //   // console.log('first img width 6.5', firstImageWidth*0.40*nftCount)

    //   if ((sliderBodyWidth <= firstImageWidth) && (slider.scrollLeft >= firstImageWidth*0.85*nftCount)){
    //   slider.scrollLeft = (amountOfFrames-1)*firstImageWidth
    //   console.log('first img width 0.85', firstImageWidth*0.85*nftCount)
    // } else if ((sliderBodyWidth <= firstImageWidth*2) && (sliderBodyWidth > firstImageWidth) && (slider.scrollLeft >= firstImageWidth*0.75*nftCount)){
    //   slider.scrollLeft = (amountOfFrames-1)*firstImageWidth
    //   console.log('first img width 0.75', firstImageWidth*0.75*nftCount)
    // } else if ((sliderBodyWidth <= firstImageWidth*3) && (sliderBodyWidth > firstImageWidth*2) && (slider.scrollLeft >= firstImageWidth*0.65*nftCount)){
    //   slider.scrollLeft = (amountOfFrames-1)*firstImageWidth
    //   console.log('first img width 0.65', firstImageWidth*0.65*nftCount)
    // } else if ((sliderBodyWidth <= firstImageWidth*4) && (sliderBodyWidth > firstImageWidth*3) && (slider.scrollLeft >= firstImageWidth*0.55*nftCount)){
    //   slider.scrollLeft = (amountOfFrames-1)*firstImageWidth
    //   console.log('first img width 0.55', firstImageWidth*0.55*nftCount)
    // } else if ((sliderBodyWidth <= firstImageWidth*5) && (sliderBodyWidth > firstImageWidth*4) && (slider.scrollLeft >= firstImageWidth*(nftCount-5.5))){
    //   slider.scrollLeft = (amountOfFrames-1)*firstImageWidth
    //   console.log('first img width 0.45', firstImageWidth*0.45*nftCount)
    // }else if ((sliderBodyWidth <= firstImageWidth*7) && (sliderBodyWidth > firstImageWidth*5) && (slider.scrollLeft >= firstImageWidth*(nftCount-6.5))){
    //   console.log('first img width 0.35', firstImageWidth*0.35*nftCount)
    //   slider.scrollLeft = (amountOfFrames-1)*firstImageWidth
    // }
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
            <div id={`slider${name}`} className={`slider${name} slider`}>

            {images.map(({imageLink,id}) =>
            {
                return(
                <img id ={`${name+id}`} className={`sliderImage${name} sliderImage`} key={id} src={''} alt="img" />
            )}
            )}

            </div>
            <i id = "right" className="fa-solid fa-angle-right"></i>
        </div>
    </div>
    </>
  )
}

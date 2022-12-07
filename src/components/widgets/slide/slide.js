const slider = document.querySelector(".slider");

let isDragStart = false;

const dragStart = () => {
    isDragStart = true;
}

const dragging = (e) =>{
    if(!isDragStart) return;
    e.preventDefault
    slider.scrollLeft = e.pageX;
    console.log(e.pageX)
}

slider.addEventListener("mousedown",dragStart);
slider.addEventListener("mouseMove",dragging);
import React, {useEffect} from 'react'

export default function TimeLineBubble(props) {

    const info = {
        N : props.N,
        secHeading: props.secHeading,
        heading: props.heading,
        paragraph1: props.paragraph1,
        paragraph2: props.paragraph2,
        pill1: props.pill1,
        pill2: props.pill2,
        img1: props.img1


    }
        
    useEffect(function() {
        const imgContainer = document.querySelector('.imgcontainer')
        imgContainer.className = info.N + " img-fluid rounded"
        const imgContainerNew = document.querySelector('.'+info.N)
        imgContainerNew.src = info.img1
    
      })

  return (
    <>
    <div className="timeline-row">
        <div className="timeline-time">
       <large>{info.secHeading}</large>
       <img className="imgcontainer img-fluid rounded" src='' alt="Laser cat"/>
        </div>
            <div className="timeline-content">
                <i className="icon-attachment"></i>
                <h4>{info.heading}</h4>
                <p>{info.paragraph1}</p>
                <p>{info.paragraph2}</p>
                <div className="thumbs">
                    {/* <img class="img-fluid rounded" src="./media/10.webp" alt="Laser cat"/>
                    <img class="img-fluid rounded" src="./media/139.webp" alt="party cat"/>
                    <img class="img-fluid rounded" src="./media/8.webp" alt="aviator cat"/> */}
                </div>
                <div className="">
                    <span className="badge badge-pill">{info.pill1}</span>
                    <span className="badge badge-pill">{info.pill2}</span>
                </div>
            </div>
     </div>
    </>
  )
}

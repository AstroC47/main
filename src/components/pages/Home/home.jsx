import React, {useEffect} from 'react'
import Nav from '../../widgets/Nav/Nav.jsx'
import Prev from '../../widgets/bootstrap/Carousell/preview'
import PrevFB from '../../widgets/bootstrap/Carousell/previewFireBucket'
import './home.css'
import RoadMap from '../../widgets/bootstrap/roadmap/Roadmap'
import Infobox from '../../widgets/Infobox/Infobox.jsx'
import Header from '../../widgets/Header/Header.jsx'
import BorderInfoBox from '../../widgets/BorderInfoBox/BorderInfoBox.jsx'
import Slide from '../../widgets/slide/Slide.jsx'

import pw1 from '../../../media/pw preview 1 640.png'
import pw2 from '../../../media/pw preview 2 640.png'
import pw3 from '../../../media/pw preview 3 640.png'

export default function Home(props) {
const slideImages = [{imageLink:"https://ipfs.io/ipfs/bafybeieepkuu54pppq2v5gpo3vkrl7t55wes7kdyireaz3tj7l7ry4z6pq/images/1.jpg",
                    id:1},
                    {imageLink:"https://ipfs.io/ipfs/bafybeieepkuu54pppq2v5gpo3vkrl7t55wes7kdyireaz3tj7l7ry4z6pq/images/2.jpg",
                    id:2},
                    {imageLink:"https://ipfs.io/ipfs/bafybeieepkuu54pppq2v5gpo3vkrl7t55wes7kdyireaz3tj7l7ry4z6pq/images/3.jpg",
                    id:3},
                    {imageLink:"https://ipfs.io/ipfs/bafybeieepkuu54pppq2v5gpo3vkrl7t55wes7kdyireaz3tj7l7ry4z6pq/images/4.jpg",
                    id:4},
                    {imageLink:"https://ipfs.io/ipfs/bafybeieepkuu54pppq2v5gpo3vkrl7t55wes7kdyireaz3tj7l7ry4z6pq/images/5.jpg",
                    id:5},
                    {imageLink:"https://ipfs.io/ipfs/bafybeieepkuu54pppq2v5gpo3vkrl7t55wes7kdyireaz3tj7l7ry4z6pq/images/6.jpg",
                    id:6},
                    {imageLink:"https://ipfs.io/ipfs/bafybeieepkuu54pppq2v5gpo3vkrl7t55wes7kdyireaz3tj7l7ry4z6pq/images/7.jpg",
                    id:7},
                    {imageLink:"https://ipfs.io/ipfs/bafybeieepkuu54pppq2v5gpo3vkrl7t55wes7kdyireaz3tj7l7ry4z6pq/images/8.jpg",
                    id:8},
                    {imageLink:"https://ipfs.io/ipfs/bafybeieepkuu54pppq2v5gpo3vkrl7t55wes7kdyireaz3tj7l7ry4z6pq/images/9.jpg",
                    id:9},
                    {imageLink:"https://ipfs.io/ipfs/bafybeieepkuu54pppq2v5gpo3vkrl7t55wes7kdyireaz3tj7l7ry4z6pq/images/10.jpg",
                    id:10}]


const parallelImages = [
    {
    n: '0',
    name:true,
    image: pw1
  },
  {
    n: '1',
    name:false,
    image: pw2
  },
  {
    n: '2',
    name:false,
    image: pw3
  }
]

const parallelInfo = 'An amazing 1 of 1 art project painted by Spotti and launched by Area47. The first of many!'



useEffect(function() {
// console.log("home")
})


  return (
    <>
    {/* <img id='myimg'></img> */}
    {/* <Nav handleKeplr = {props.handleKeplr} /> */}
    <Header/>
    {/* <Trending/> */}
    <div className="background">
      <div className="mainHome">

        <div className="carouselPreview">
          <PrevFB/>
        </div>
      
      <div className="subHeadingSection">
      <h2 className="subHeading"> Introducing our newest collection</h2>
      </div>

      <div className="serviceInnerFlex">
        <div className="serviceBorder">
            <div className="service blankLite">
            <Slide images = {slideImages} name={'neo'}/>
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

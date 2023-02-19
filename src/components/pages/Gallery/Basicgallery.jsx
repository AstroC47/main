import React from 'react'
import Header from '../../widgets/Header/Header.jsx'
import Slide from '../../widgets/slide/Slide.jsx'
import './Basicgallery.css'

export default function Basicgallery() {

    const neoImages = [{imageLink:"https://ipfs.io/ipfs/bafybeieepkuu54pppq2v5gpo3vkrl7t55wes7kdyireaz3tj7l7ry4z6pq/images/1.jpg",
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

    const arcadicImages = [{imageLink:"https://ipfs.io/ipfs/bafybeiauh7qv4hl6vbjcveyo6rzthjh3ys2xvoe3rqlebmecr6i6hhmp54/images/1.png",
    id:1},
    {imageLink:"https://ipfs.io/ipfs/bafybeiauh7qv4hl6vbjcveyo6rzthjh3ys2xvoe3rqlebmecr6i6hhmp54/images/2.png",
    id:2},
    {imageLink:"https://ipfs.io/ipfs/bafybeiauh7qv4hl6vbjcveyo6rzthjh3ys2xvoe3rqlebmecr6i6hhmp54/images/3.jpg",
    id:3},
    {imageLink:"https://ipfs.io/ipfs/bafybeiauh7qv4hl6vbjcveyo6rzthjh3ys2xvoe3rqlebmecr6i6hhmp54/images/4.jpg",
    id:4},
    {imageLink:"https://ipfs.io/ipfs/bafybeiauh7qv4hl6vbjcveyo6rzthjh3ys2xvoe3rqlebmecr6i6hhmp54/images/5.jpg",
    id:5},
    {imageLink:"https://ipfs.io/ipfs/bafybeiauh7qv4hl6vbjcveyo6rzthjh3ys2xvoe3rqlebmecr6i6hhmp54/images/6.jpg",
    id:6},
    {imageLink:"https://ipfs.io/ipfs/bafybeiauh7qv4hl6vbjcveyo6rzthjh3ys2xvoe3rqlebmecr6i6hhmp54/images/7.jpg",
    id:7},
    {imageLink:"https://ipfs.io/ipfs/bafybeiauh7qv4hl6vbjcveyo6rzthjh3ys2xvoe3rqlebmecr6i6hhmp54/images/8.jpg",
    id:8},
    {imageLink:"https://ipfs.io/ipfs/bafybeiauh7qv4hl6vbjcveyo6rzthjh3ys2xvoe3rqlebmecr6i6hhmp54/images/9.jpg",
    id:9},
    {imageLink:"https://ipfs.io/ipfs/bafybeiauh7qv4hl6vbjcveyo6rzthjh3ys2xvoe3rqlebmecr6i6hhmp54/images/10.jpg",
    id:10},
    {imageLink:"https://ipfs.io/ipfs/bafybeiauh7qv4hl6vbjcveyo6rzthjh3ys2xvoe3rqlebmecr6i6hhmp54/images/11.jpg",
    id:11}]

  return (
    <>
<Header/>

<div className="background">
        <div className="mainHome">

            <h3> House of Area47 </h3>


<div className="serviceInnerFlex">
        <div className="serviceBorder">
            <div className="blankLite serviceHeading">
                
                <div className="slideHeading">
                <div className="slideHeadingLeft">
                    <p className='collectionName'> <b>Neo Animalia</b> </p>
                </div>

                <div className="slideHeadingRight">
                    <p className='artistName'> <b>Siren</b> </p>
                </div>
            </div>

            <Slide images = {neoImages} name={'neo'}/>
            </div>
        </div>
      </div>

        </div>
</div>

<div className="serviceInnerFlex">
        <div className="serviceBorder">
            <div className="blankLite serviceHeading">
                
                <div className="slideHeading">
                <div className="slideHeadingLeft">
                    <p className='collectionName'> <b>Neo Animalia</b> </p>
                </div>

                <div className="slideHeadingRight">
                    <p className='artistName'> <b>Siren</b> </p>
                </div>
            </div>
            <Slide images = {arcadicImages} name={'classc'}/>
            </div>
        </div>
      </div>

    </>
  )
}

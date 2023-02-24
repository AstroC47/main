import React from 'react'
import './area47Styles.css'
import './styles.css'
import './timelineStyles.css'
import pw1 from '../../../../media/pw preview 1 640.png'
import pw2 from '../../../../media/pw preview 2 640.png'
import pw3 from '../../../../media/pw preview 3 640.png'
import laserEyes from '../../../../media/10.webp'
import RoadMapPreview from '../Carousell/RoadMapPreview.jsx'

export default function Roadmap() {

  const parallelImages = [
    {
    n: '0',
    name:'Parallel Worlds',
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

  return (
    <>
{/* <section className="blank">
      <div className="preview-holder colour">
          <img className="ClassCName" src="./media/ClassCHD.png" alt="Classified Cats Preview"/>
          <div className="mintContainer">
            <a id="mintButton" target="_blank" href="https://app.stargaze.zone/launchpad/stars1klg9pj576qra5862svgwcs07r40sdks4xk62j3t9567k2z79nr6qn406kq" >
            <img className= "mintBtn glowing-border" alt="Mint button" src="./media/mintFilmGray.png"/>
            </a>
          </div>
          
      </div>
      </section> */}

      {/* <section >
        <p className='info text'>
        (Classified Cats is a set of 7400 mys-curious cats that originated from the Area47 research facility as the genesis project. Nobody exactly knows why or how these cats came into existence, but it will be a fun filled journey trying to solve the mystery.
             
             Throughout this mysterious adventure Classified Cat owners can look forward to multiple utilities, while Area47 revolutionises the web3.0 space.
             Talking about space... have you seen those dazzling backgrounds... WOW, these cats have seen some stuff...)
        </p>
      </section> */}

      {/* <section className="colour">
            <h1>Area47</h1>
          </section> */}

          {/* <section className="blank">
            <div className="area47Content">
  
                <h3>Area47's plans to revolutionize the NFT space</h3>
                  <p>
                  Area47 plans to revolutionize the NFT space by developing a base for multichain-NFT projects and dapps.
                 
            
                  Area47 aims to produce beautiful NFT art for the community, as we believe that the art should be the main utility of any NFT,
                  while also trying to incorporate special features or utilities into all our NFTs. 
                  We want to collaborate with other projects, artists and developers to build a strong foundation in the web3.0 space for all to enjoy and appreciate
                  in multiple areas, be it art, metaverse games or even physical products. No plans are certain, but no plans are off the table either.
                 
               
                  This means that there will be opportunities for our holders to take part in this spectacular journey to make this dream a reality.
                  Our Discord server is always open and we invite you to join the fun as well as the discussions. PS.. We like memes, cats, space and art and 
                  will be sharing interesting and fun content on these topics, but also lots more.
               
                 
                  We also aim to share some education on our social channels for our holders
                  on topics such as web3.0 and space facts or other relevant topics our holders might want to hear about.
               
             
                  We are taking this base to the moon, are you coming along?
                  </p>
            </div>
          </section> */}

          {/* <section className="colour">
            
           <a id="timeline"></a> <h1>Timeline</h1>

          </section> */}

          <section className="blank">
            

              <div className="timeline">

              <div className="timeline-row">
                    <div className="timeline-time">
                      <div className='large'>Genesis Project</div>
                    </div>
                    <div className="timeline-content">
                      {/* <i className="icon-code"></i> */}

                      
                      <img className = 'img-fluid rounded' src={laserEyes}/>

                            <div className="writeSpace">
                      <h4>Classified Cats</h4>
                      <p>
                      Classified Cats was the first project launched by Area47 on the stargaze network. 
                      The collection originally featured 7400 absolutely adorable space cats.
                      some of the collection was burned to reduce the supply and increase the 
                      value of holders and <b>1863 phase 1 cats remained.</b>
                      </p>
                      <p>
                        This collection was the start of the Area47 discord, Twitter and brought forth the extremely rare laser eye cats sub-committee
                      </p>

                      <a className="buyHere" target="_blank" rel="noreferrer" href='https://app.stargaze.zone/marketplace/stars1j875gkljknhq7n2g5lsckl3zuj2tyxvqgz5gyku0xxssl0usm5wqc750p3'>Buy</a>
                      {/* <div className="thumbs">
                        <div className="thumbs">
                      </div>
                      </div> */}
                      <div className="">
                        <span className="badge badge-pill">ClassC</span>
                        <span className="badge badge-pill">Laser Legend</span>
                        <span className="badge badge-pill">Staking Rewards</span>
                        <span className="badge badge-pill">Discord</span>
                        <span className="badge badge-pill">Twitter</span>
                        
                                      </div>
                      </div>
                    </div>
                  </div>
              
                  <div className="timeline-row">
                    <div className="timeline-time">
                      <div className='large'>First 1:1 project</div>
                    </div>
                    <div className="timeline-content">
                    <i className="icon-code"></i>
                    {/* <img className = 'icon-code img-fluid rounded' src={laserEyes}/> */}
                    <RoadMapPreview images={parallelImages} name={'1'} />
                    {/* <RoadMapPreview images={parallelImages} /> */}
                                  <div className="writeSpace">
                      <h4>Parallel Worlds</h4>
                      <p>
                      An amazing 1 of 1 art project painted by Spotti and launched by Area47. The first of many!
                      </p>

                      <p> <b>Physical original paintings available on request on our discord</b></p>

                      <a className="buyHere" target="_blank" rel="noreferrer" href='https://app.stargaze.zone/launchpad/stars10w3rklmha7uk0tzn0yn8jrsfs4yqxyckvyatmeygexf74h2xfvlsppflhe'>Buy</a>
                      {/* <div className="thumbs">
                        <div className="thumbs">
                      </div>
                      </div> */}
                      <div className="">
                        <span className="badge badge-pill">Spotti</span>
                        <span className="badge badge-pill">1:1 Art</span>
                        <span className="badge badge-pill">Physical</span>
                                      </div>
                      </div>
                    </div>
                  </div>
              
                  <div className="timeline-row">
                    <div className="timeline-time">
                      <div className='large'>ClassC Phase 2</div>
                    </div>
                    <div className="timeline-content">
                      <i className="icon-turned_in_not"></i>
                      <h4>ClassC A New Era</h4>
                      <p>The follow up of Classified Cats with way more utility added and stunnning cats ready to know you of the table.</p>
                      <ul>
                        <li>Ten 1 of 1 cats</li>
                        <li>Crowned cats</li>
                        <li>Elixer cat brewing</li>
                        <li>Sub-commitees</li>
                        <li>Gaming tournaments</li>
                      </ul>
                      {/* <p>This collection features brand new utilities such as the Elixer cats, 10 original 1 of 1s and sub-Comitees. We also implemented gaming tournaments and </p> */}
                      {/* <p>Crowned cats and wizzard hats, come visit South Africa and much more than only that.</p> */}
                      <div>
                        <span className="badge badge-pill">1:1s</span>
                        <span className="badge badge-pill">Crowns</span>
                        <span className="badge badge-pill">Gaming</span>
                      </div>
                    </div>
                  </div>
              
  

                  <div className="timeline-row">
                    <div className="timeline-time">
                      <div className='large'>1:1 Art Set</div>
                    </div>
                    <div className="timeline-content">
                      <i className="icon-code"></i>
                      <h4>Neo Animalia</h4>
                      <p>
                      This special set features animals native to South Africa in combination with gaming aesthetic and digital elements. Keep your eyes peeled for the second collection dropping soon...
                      </p>
                      <p>
                        This set is digital, but is high resolution and will look wonderful when printed and put on a wall.
                      </p>
                      <p><b>Give your gaming room some extra digital vibe</b></p>
                      <div className="thumbs">
                      </div>
                      <div className="">
                        <span className="badge badge-pill">Siren</span>
                        <span className="badge badge-pill">1:1 Art</span>
                        <span className="badge badge-pill">Digital</span>
                        <span className="badge badge-pill">Whitelist</span>
                      </div>
                    </div>
                  </div>
                  


                  <div className="timeline-row">
                    <div className="timeline-time">
                      <div className='large'>Autumn Mini Set</div>
                    </div>
                    <div className="timeline-content">
                      <i className="icon-directions"></i>
                      <h4>ClassC Autumn Set</h4>

                      <ul>
                        <li>Drops for holders of 3 or more phase 2 ClassC NFTs.</li>
                        <li>Rare ghost cats for crowned cats, Whales and 1:1 holders</li>
                      </ul>
                      <a className="buyHere" target="_blank" rel="noreferrer" href='https://app.stargaze.zone/launchpad/stars1a62akq3au3m58ya3860su3weldumppwse4hktt7vgqxtdm7cu7nshy98ht'>Buy</a>
                      {/* <div className="thumbs">
                      
                      {/* <p></p> */}
                      <div>
                        <span className="badge badge-pill">Rare Drops</span>
                        <span className="badge badge-pill">Airdrops</span>
                      </div>
                    </div>
                  </div>


              
                  <div className="timeline-row">
                    <div className="timeline-time">
                      <div className='large'>1:1 Art Set</div>
                    </div>
                    <div className="timeline-content">
                      <i className="icon-change_history"></i>
                      <h4>Dinosaurs: XVII Century</h4>
                      <p className="no-margin">How would XVII Italy look like if dinosaurs roamed these landscapes? </p> 
                      <p> This set was painted in monotone fashion, because they obviously didn't have colour cameras in the XVII century... </p>
                      <p> This set was once again done by the amazing Spotti. <b>Physical original paintings available on request on our discord</b></p>
                      <div className="thumbs">
                      </div>
                      <div>
                        <span className="badge badge-pill">Spotti</span>
                        <span className="badge badge-pill">1:1 Art</span>
                        <span className="badge badge-pill">Physical</span>
                      </div>
                    </div>
                  </div>
              
                </div>

          </section>
    </>
  )
}

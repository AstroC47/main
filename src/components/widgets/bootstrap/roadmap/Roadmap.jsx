import React from 'react'
import './area47Styles.css'
import './styles.css'
import './timelineStyles.css'
import laserEyes from '../../../../media/10.webp'
import parallel from '../../../../media/8.webp'
import RoadMapPreview from '../Carousell/RoadMapPreview.jsx'

export default function Roadmap() {

  const parallelImages = [
    {
    n: '0',
    name:true,
    image: parallel
  },
  {
    n: '1',
    name:false,
    image: laserEyes
  }
]

  return (
    <>
{/* <section class="blank">
      <div class="preview-holder colour">
          <img class="ClassCName" src="./media/ClassCHD.png" alt="Classified Cats Preview"/>
          <div class="mintContainer">
            <a id="mintButton" target="_blank" href="https://app.stargaze.zone/launchpad/stars1klg9pj576qra5862svgwcs07r40sdks4xk62j3t9567k2z79nr6qn406kq" >
            <img class= "mintBtn glowing-border" alt="Mint button" src="./media/mintFilmGray.png"/>
            </a>
          </div>
          
      </div>
      </section> */}

      {/* <section >
        <p class='info text'>
        (Classified Cats is a set of 7400 mys-curious cats that originated from the Area47 research facility as the genesis project. Nobody exactly knows why or how these cats came into existence, but it will be a fun filled journey trying to solve the mystery.
             
             Throughout this mysterious adventure Classified Cat owners can look forward to multiple utilities, while Area47 revolutionises the web3.0 space.
             Talking about space... have you seen those dazzling backgrounds... WOW, these cats have seen some stuff...)
        </p>
      </section> */}

      {/* <section class="colour">
            <h1>Area47</h1>
          </section> */}

          {/* <section class="blank">
            <div class="area47Content">
  
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

          {/* <section class="colour">
            
           <a id="timeline"></a> <h1>Timeline</h1>

          </section> */}

          <section class="blank">
            

              <div class="timeline">

              <div class="timeline-row">
                    <div class="timeline-time">
                      <large>First Project: Classified Cats!</large>
                    </div>
                    <div class="timeline-content">
                      <i class="icon-code"></i>
                      <img className = 'img-fluid rounded' src={laserEyes}/>
                      <h4>Classified Cats Phase 1</h4>
                      <p>
                      Classified Cats was the first project launched by Area47 on the stargaze network. 
                      The collection originally featured 7400 absolutely adorable space cats.
                      some of the collection was burned to reduce the supply and increase the 
                      value of holders and 1863 phase 1 cats remained.
                      </p>
                      <p>
                        This collection was the start of the Area47 discord, Twitter and brought forth the extremely rare laser eye cats sub-committee
                      </p>

                      <a class="buyHere" target="_blank" rel="noreferrer" href='https://app.stargaze.zone/marketplace/stars1j875gkljknhq7n2g5lsckl3zuj2tyxvqgz5gyku0xxssl0usm5wqc750p3'>Buy</a>
                      {/* <div class="thumbs">
                        <div class="thumbs">
                      </div>
                      </div> */}
                      <div class="">
                        <span class="badge badge-pill">ClassC</span>
                        <span class="badge badge-pill">Laser Legend</span>
                        <span class="badge badge-pill">Staking Rewards</span>
                        <span class="badge badge-pill">Discord</span>
                        <span class="badge badge-pill">Twitter</span>
                      </div>
                    </div>
                  </div>
              
                  <div class="timeline-row">
                    <div class="timeline-time">
                      <large>First 1:1 project</large>
                    </div>
                    <div class="timeline-content">
                    <i class="icon-code"></i>
                    {/* <img className = 'icon-code img-fluid rounded' src={laserEyes}/> */}
                    <RoadMapPreview images={parallelImages} />
                      <h4>Parallel Worlds</h4>
                      <p>
                      An amazing 1 of 1 art project painted by Spotti and launched by Area47. The first of many!
                      </p>

                      <p> <b>Physical original paintings available on request on our discord</b></p>

                      <a class="buyHere" target="_blank" rel="noreferrer" href='https://app.stargaze.zone/launchpad/stars10w3rklmha7uk0tzn0yn8jrsfs4yqxyckvyatmeygexf74h2xfvlsppflhe'>Buy</a>
                      {/* <div class="thumbs">
                        <div class="thumbs">
                      </div>
                      </div> */}
                      <div class="">
                        <span class="badge badge-pill">Spotti</span>
                        <span class="badge badge-pill">1:1 Art</span>
                        <span class="badge badge-pill">Physical</span>
                      </div>
                    </div>
                  </div>
              
                  <div class="timeline-row">
                    <div class="timeline-time">
                      <large>ClassC Phase 2</large>
                    </div>
                    <div class="timeline-content">
                      <i class="icon-turned_in_not"></i>
                      <h4>ClassC A New Era</h4>
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
                        <span class="badge badge-pill">1:1s</span>
                        <span class="badge badge-pill">Crowns</span>
                        <span class="badge badge-pill">Gaming</span>
                      </div>
                    </div>
                  </div>
              
                  <div class="timeline-row">
                    <div class="timeline-time">
                      <large>Autumn Mini Set</large>
                    </div>
                    <div class="timeline-content">
                      <i class="icon-directions"></i>
                      <h4>ClassC Autumn Set</h4>

                      <ul>
                        <li>Drops for holders of 3 or more phase 2 ClassC NFTs.</li>
                        <li>Rare ghost cats for crowned cats, Whales and 1:1 holders</li>
                      </ul>
                      <a class="buyHere" target="_blank" rel="noreferrer" href='https://app.stargaze.zone/launchpad/stars1a62akq3au3m58ya3860su3weldumppwse4hktt7vgqxtdm7cu7nshy98ht'>Buy</a>
                      {/* <div class="thumbs">
                      
                      {/* <p></p> */}
                      <div>
                        <span class="badge badge-pill">Rare Drops</span>
                        <span class="badge badge-pill">Airdrops</span>
                      </div>
                    </div>
                  </div>

                  <div class="timeline-row">
                    <div class="timeline-time">
                      <large>1:1 Art Set</large>
                    </div>
                    <div class="timeline-content">
                      <i class="icon-code"></i>
                      <h4>Neo Animalia</h4>
                      <p>
                      This special set features Animals native to South Africa in combination with gaming peripherals.
                      </p>
                      <p>
                        This set is digital, but is high resolution and will look wonderful when printed and put on a wall.
                      </p>
                      <p><b>Give your gaming room some extra digital vibe</b></p>
                      <div class="thumbs">
                      </div>
                      <div class="">
                        <span class="badge badge-pill">Siren</span>
                        <span class="badge badge-pill">1:1 Art</span>
                        <span class="badge badge-pill">Digital</span>
                        <span class="badge badge-pill">Whitelist</span>
                      </div>
                    </div>
                  </div>
              
                  <div class="timeline-row">
                    <div class="timeline-time">
                      <large>1:1 Art Set</large>
                    </div>
                    <div class="timeline-content">
                      <i class="icon-change_history"></i>
                      <h4>Dinosaurs: XVII Century</h4>
                      <p class="no-margin">How would XVII Italy look like if dinosaurs roamed these landscapes? </p> 
                      <p> This set was painted in monotone fashion, because they obviously didn't have colour cameras in the XVII century... </p>
                      <p> This set was once again done by the amazing Spotti. <b>Physical original paintings available on request on our discord</b></p>
                      <div class="thumbs">
                      </div>
                      <div>
                        <span class="badge badge-pill">Spotti</span>
                        <span class="badge badge-pill">1:1 Art</span>
                        <span class="badge badge-pill">Physical</span>
                      </div>
                    </div>
                  </div>
              
                </div>

          </section>
    </>
  )
}

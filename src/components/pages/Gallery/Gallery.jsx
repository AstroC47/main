import React, {useEffect, useState} from 'react'
import Header from '../../widgets/Header/Header.jsx'
import GalleryList from '../../widgets/Gallery/GalleryList.jsx'
import { Link, Outlet, useSearchParams } from "react-router-dom"
import './Gallery.css'

export default function Gallery(props) {

  const [searchParams, setSearchParams] = useSearchParams()
  const [checkNft,setCheckNft] = useState('true')
  const [searchValue,setSearchValue] = useState(searchParams.get('search'))

  const handleSearch = () => {
    const searchBox = document.querySelector(".searchInput")
    if (searchBox.value.length>0){
    setSearchValue(searchBox.value)
    setSearchParams({search: searchBox.value})
  }
  }

  return (
    <>
    <Header/>
    
    <div className="mainShowcaseArea">
        <div className="showCaseArea">
          <div className="blockBorder">
            <div className="showCaseArea blankLite">
              
                <div className="searchActions">

                  <div className="searchArea">
                    <input className="searchInput"/>
                    <button className= "searchButton" onClick={handleSearch}>Search</button>
                  </div>
                  
                  
                  <div className="searchButtons">

                    <div className="check">
                      <input type="checkbox" id="collectionCheck" defaultChecked="true"/>
                      <label> Collections </label>
                    </div>

                    <div className="check">
                      <input type="checkbox" id="nftCheck" defaultChecked="true"/>
                      <label> NFTs </label>
                    </div>

                    <div className="check">
                      <input type="checkbox" id="ArtistCheck" defaultChecked="true"/>
                      <label> Artist </label>
                    </div>

                  </div>

                </div>

            </div>
          </div>
        </div>
    </div>

    {/* <Outlet context = {{searchValue:searchValue}}/> */}
    <GalleryList />
    </>
  )
}

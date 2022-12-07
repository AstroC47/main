import React, {useEffect, useState} from 'react'
import { Link, Outlet, useSearchParams, useOutletContext } from "react-router-dom"
import fireDB, { initializeFireDB, readDoc, searchAll } from '../../../scripts/fireDB.js'
import CollectionShowCase from './CollectionShowCase'

export default function GalleryList(props) {

const [searchParams,setSearchParams] = useSearchParams()
const [searchValue,setSearchValue] = useState('')
const [loaded,setLoaded] = useState(false)

const [nftData,setNftData] = useState([]);

const db = initializeFireDB();

const componentDidMount = async () =>{

  const docs = await searchAll(db,'',true,true)
  console.log("Load")
  setNftData(docs)
  setLoaded(true)

}

const refreshList = async () => {
  setSearchValue(searchParams.get("search"))
  const docs = await searchAll(db,searchParams.get('search'),true,true)
  console.log("Refresh")
  console.log(docs)
  setNftData(docs)
}

useEffect(function() {
  if ((nftData.length === 0) && (!loaded)){
    componentDidMount();
  } else if (loaded && searchValue != searchParams.get('search')){
    refreshList();
  }

})

  return (
    <>
    <h1>Collection Name: {searchValue}</h1>


    <div className="background">
      <div className="mainShowcaseArea">
        <div className="blockBorder">
          <div className="blockBorderInner">
            <div className="showCaseArea blankLite">
              
              {
              nftData.map( ({id,name,amount,previewLink,tokenId, format}) => 
              <CollectionShowCase 
              key = {id}
              id = {id}
              name = {name} 
              prevImg = {previewLink} 
              amount = {amount}
              tokenId={tokenId}
              format= {format}/>)
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

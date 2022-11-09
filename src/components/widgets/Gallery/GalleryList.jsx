import React from 'react'
import { Link, Outlet, useSearchParams } from "react-router-dom"

export default function GalleryList() {
const [searchParams, setSearchParams] = useSearchParams({collection:''})
const collection = searchParams.get("collection")

  return (
    <>
    <h1>Collection Name: {collection}</h1>
    </>
  )
}

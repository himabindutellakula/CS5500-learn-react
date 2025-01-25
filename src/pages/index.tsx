// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Gallery from './qcomps/gallery_props'
import List from './qcomps/list_keys_id'
import RecipeList from './qcomps/recipes'

export default function Home() {
  return (
    <>
      <h2 style={{ color: 'red' }}>Component 1 - Gallery Props:</h2>
      <Gallery /> <br></br>
      <h2 style={{ color: 'red' }}>Component 2 - List Keys Id:</h2>
      <List />
      <h2 style={{ color: 'red' }}>Component 3 - Recipes:</h2>
      <RecipeList />
    </> 
  )
}




// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Gallery from './qcomps/gallery_props'
import List from './qcomps/list_keys_id'
import RecipeList from './qcomps/recipes'
import State from './qcomps/state'
import StuckForm from './qcomps/stuckForm' 
import ShoppingCart from './qcomps/shoppingCart'
import Form from './qcomps/updObjectsForm'
import Arrays from './qcomps/artistsRemoveArr'
import CopyArrays from './qcomps/arrObj'

export default function Home() {
  return (
    <>
      <h2 style={{ color: 'red' }}>Component 1 - state</h2>
      <State /> 
      <br /><br />
      <h2 style={{ color: 'red' }}>Component 2 - stuckForm</h2>
      <StuckForm /> 
      <br /><br />
      <h2 style={{ color: 'red' }}>Component 3 - shoppingCart</h2>
      <ShoppingCart /> 
      <br /><br />
      <h2 style={{ color: 'red' }}>Component 4 - updObjectsForm</h2>
      <Form /> 
      <br /><br />
      <h2 style={{ color: 'red' }}>Component 5 - arrObj</h2>
      <CopyArrays /> 
    </>
  )
}




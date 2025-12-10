import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from '../src/components/Hero.jsx'
import Header from '../src/components/Header.jsx'

//prpos - data that parent passes to child component
//Task() is just a function
//props = function aruguments
//JSX uses {} to show dynamic values


function App() {
 

  return (

<>
   <Hero/>
   <Header/>


</>



  )
}

export default App

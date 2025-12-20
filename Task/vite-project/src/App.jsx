import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/Navigation'
import Cards from './Components/cards'
import Badges from './Components/Badges'
import Sidebar from './Components/Sidebar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      {/* <h1> Hello react</h1> */}
      <Navigation/>
      <Cards/>
      <Badges/>
      <Sidebar/>
     
      
    </div>
    </>
  )
}

export default App

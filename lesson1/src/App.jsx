import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Header.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Campaigns from './campaigns.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      
      <Campaigns /> 
      <Footer />

    </>
  )
}

export default App

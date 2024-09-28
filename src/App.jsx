import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marqee from './components/Marqee'
import About from './components/About'
import Eyes from './components/Eyes'
import Footer from './components/Footer'
import Cards from './components/Cards'
import Featured from './components/Featured'

const App = () => {
  return (
    <div className='w-full mh-screen  text-white bg-zinc-900'>
      <Navbar/>
      <LandingPage/>
      <Marqee/>
      <About/>
      <Eyes/>
      <Cards/>
      <Featured/>
      <Footer/>
    </div>
  )
}

export default App
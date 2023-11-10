import React from 'react'
import { Navbar, Header, About, Projects } from '@components/index'

const Home = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
    </div>
  )
}

export default Home
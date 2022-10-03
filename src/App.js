import React from 'react'
import Crousel from './components/Crousel'
import NavigationBar from './components/layouts/NavigationBar'
import Footer from './components/layouts/Footer'

export default function App() {
  return (
    <div>
      <NavigationBar/>
      <Crousel/>
      <Footer />
    </div>
  )
}

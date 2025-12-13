import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { ContentComponent } from './components/ContentComponent'
import HeaderComponent from './components/HeaderComponent'
import { FooterComponent } from './components/FooterComponent'


function App() {
  // //jsx
  // var year = 2025
  // var country = "India"
  // var isAvailable = true
  // var user = {
  //   name:"amit",
  //   age:23
  // }

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <ContentComponent></ContentComponent>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { ContentComponent } from './components/ContentComponent'
import HeaderComponent from './components/HeaderComponent'
import { FooterComponent } from './components/FooterComponent'
import { MapDemo1 } from './components/MapDemo1'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo3 } from './components/MapDemo3'
import { MapDemo4 } from './components/MapDemo4'
import { MapDemo5 } from './components/MapDemo5'
import { MapDemo6 } from './components/MapDemo6'
import { Route, Routes } from 'react-router-dom'
import { NetflixHome } from './components/netflix/NetflixHome'
import { NetflixShows } from './components/netflix/NetflixShows'


function App() {
  

  return (
    <div>
      
      <Routes>
          <Route path='/netflixhome' element = {<NetflixHome/>}></Route>
          <Route path='/netflixshows' element = {<NetflixShows></NetflixShows>}></Route>
      </Routes>
      
      
    </div>
  )
}

export default App

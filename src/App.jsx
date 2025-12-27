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
import { Navbar } from './components/Navbar'
import { HomeComponent } from './components/HomeComponent'
import { Error404 } from './components/Error404'
import { PlayContent } from './components/netflix/PlayContent'


function App() {
  

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
          <Route path='/' element ={<HomeComponent/>}></Route>
          <Route path='/netflixhome' element = {<NetflixHome/>}></Route>
          <Route path='/netflixshows' element = {<NetflixShows></NetflixShows>}></Route>
          {/* <Route path='/watch' element = {<PlayContent/>}></Route> */}
          <Route path='/watch/:id' element = {<PlayContent/>}></Route>
          <Route path='/*' element ={<Error404/>}></Route>
      </Routes>
      
      
    </div>
  )
}

export default App

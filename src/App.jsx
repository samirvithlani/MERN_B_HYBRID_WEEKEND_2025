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
import { NetflixMovies } from './components/netflix/NetflixMovies'
import { UseStateDemo } from './components/UseStateDemo'
import { UseStateDemo2 } from './components/UseStateDemo2'
import { UseStateDemo3 } from './components/UseStateDemo3'
import { ProductList } from './components/ProductList'
import { Products } from './components/Products'
import { InputDemo1 } from './components/input/InputDemo1'
import { InputDemo2 } from './components/input/InputDemo2'
import { DepedentDropdown } from './components/input/DepedentDropdown'
import { FormDemo1 } from './components/forms/FormDemo1'
import { FormDemo2 } from './components/forms/FormDemo2'


function App() {
  

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
          <Route path='/' element ={<HomeComponent/>}></Route>
          <Route path='/netflixhome' element = {<NetflixHome/>}></Route>
          <Route path='/netflixshows' element = {<NetflixShows></NetflixShows>}></Route>
          <Route path='/netflixmovies' element = {<NetflixMovies/>}></Route>
          {/* <Route path='/watch' element = {<PlayContent/>}></Route> */}
          <Route path='/watch/:id' element = {<PlayContent/>}></Route>
          <Route path='/useStateDemo' element = {<UseStateDemo/>}></Route>
          <Route path='/useStateDemo2' element = {<UseStateDemo2/>}></Route>
          <Route path='/useStateDemo3' element = {<UseStateDemo3/>}></Route>
          <Route path='/products' element = {<Products/>}></Route>
          <Route path='/inputdemo1' element={<InputDemo1/>}></Route>
          <Route path='/inputdemo2' element={<InputDemo2/>}></Route>
          <Route path='/dropdown' element ={<DepedentDropdown/>}></Route>
          <Route path='/formdemo1' element ={<FormDemo1/>}></Route>
          <Route path='/formdemo2' element= {<FormDemo2/>}></Route>
          <Route path='/*' element ={<Error404/>}></Route>
      </Routes>
      
      
    </div>
  )
}

export default App

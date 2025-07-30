import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import LandlingPage from './Strores/Pages/LandlingPage'
import MobilePage from './Strores/Pages/MobilePage'
import CompPage from './Strores/Pages/CompPage'
import FridgePage from './Strores/Pages/FridgePage'
import FurniturePage from './Strores/Pages/FurniturePage'
import KitchenPage from './Strores/Pages/KitchenPage'
import MenPage from './Strores/Pages/MenPage'
import WomanPage from './Strores/Pages/WomanPage'
import AcPage from './Strores/Pages/ACPage'
import WatchPage from './Strores/Pages/WatchPage'
import MobileSingle from './Singles/MobileSingle'
import AcSingle from './Singles/AcSingle'
import ComputerSingle from './Singles/ComputerSingle'
import FurnitureSingle from './Singles/FurnitureSingle'
import KitchenSingle from './Singles/KitchenSingle'
import MenSingle from './Singles/MenSingle'
import WatchSingle from './Singles/WatchSingle'
import WomanSingle from './Singles/WomanSingle'
import FridgeSingle from './Singles/FridgeSingle'
import UserCart from './Strores/UserCart'








const App=()=>{
  return(
    <div>
      <Routes>
    <Route path='/' element={ <LandlingPage/>}/>
    <Route path='/mobiles' element={<MobilePage/>}/>
    <Route path='/computers' element={<CompPage/>}/>
    <Route path='/fridge' element={<FridgePage/>}/>
    <Route path='/furniture' element={<FurniturePage/>}/>
    <Route path='/kitchen' element={<KitchenPage/>}/>
    <Route path='/men' element={<MenPage/>}/>
  <Route path='/watches' element={<WatchPage/>}/>
    <Route path='/woman' element={<WomanPage/>}/>
    <Route path='/ac' element={<AcPage/>}/>
    <Route path='/mobiles/:id' element={<MobileSingle/>}/>
      <Route path='/cart' element = {<UserCart/>} />
      <Route path='/ac/:id' element = {<AcSingle/>} />
      <Route path='/computers/:id' element = {<ComputerSingle/>} />
      <Route path='/furniture/:id' element = {<FurnitureSingle />} />
      <Route path='/kitchen/:id' element = {<KitchenSingle />} />
      <Route path='/men/:id' element = {<MenSingle />} />
      <Route path='/watch/:id' element = {<WatchSingle />} />
      <Route path='/woman/:id' element = {<WomanSingle/>} />
      <Route path='/fridge/:id' element = {<FridgeSingle />} />

   </Routes>

    </div>
  )
}
export default App


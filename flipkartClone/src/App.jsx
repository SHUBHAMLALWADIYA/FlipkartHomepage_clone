import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import SliderComponent from './components/SliderComponent'
import MainCategoryMenu from './components/MainCategoryMenu'
import MobileSlider from './components/MobileSlider'

function App() {
 
  return (
    <>
      <Navbar/>
      <MainCategoryMenu/>
      <SliderComponent/>
      <MobileSlider/>
    </>
  )
}
export default App

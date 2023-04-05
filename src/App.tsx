import { useState } from "react"
import "./App.css"
import background from "../assets/images/background-image.jpg"
import özerpicture from "../assets/images/Salon.jpg"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import TextBanner from "./components/TextBanner"

function App() {
  return (
    <>
      <div className="w-screen h-auto min-h-screen absolute top-0 left-0 -z-10 bg-[url('../assets/images/bg-image.png')] bg-center lg:bg-cover">
      <Header />
      <Navbar />
      <TextBanner />
      </div>

    
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Nav from './assets/compo/Nav'
import { BsBalloonHeartFill } from "react-icons/bs";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Outlet/>  
    <footer className='opa'> site criado por samuel tz <BsBalloonHeartFill/></footer>
    </>
  )
}

export default App

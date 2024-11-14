import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './layouts/Sidebar'
import SalesComponent from './components/SalesComponent'

function App() {
 

  return (
    <div >
    <Sidebar>
    <SalesComponent />
    </Sidebar>
    </div>
  )
}

export default App

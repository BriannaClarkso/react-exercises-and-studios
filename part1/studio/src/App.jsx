import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeDescription from './components/Description'

function App() {

  return (
    <>
      <div className='App'>
        <div>
        <RecipeDescription />
        </div>
      </div>
      
    </>
  )
}

export default App

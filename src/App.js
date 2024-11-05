import React from 'react'
import './App.css'
import mysty from './style/Mystyle'

const App = () => {
  
  return (
    <>
    <h1 className='App'>Hello</h1>
    <p style={{color:"Blue", backgroundColor:"red", fontSize:"40px"}}>Inline Styling</p>
    <p style={mysty}>INTERNAL STYLING</p>
    <p style={mysty.header}>STyle inside style</p>

    </>
  )
}

export default App
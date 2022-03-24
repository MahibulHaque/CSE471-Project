import React from 'react'
import Navbar from '../components/Navbar'
import Register from '../components/RegisterScreen'

const register = () => {
  return (
    <>
      <Navbar whiteBar={true}/>
      <Register/>
    </>
  )
}

export default register
import React from 'react'
import { BiUserCircle } from 'react-icons/bi'

const LoginHead = () => {
  return (
    <div>
      <h1 className="text-12 font-400">BIENVENIDO A</h1>
      <p className="font-700 text-24">
        <span className="text-red-600">apuesta</span>total
      </p>
      <div className="w-full flex justify-center mt-12">
        <BiUserCircle size="60" color="#757575" />
      </div>
      <p className="font-400 mt-4">INICIA SESIÓN</p>
    </div>
  )
}

export default LoginHead

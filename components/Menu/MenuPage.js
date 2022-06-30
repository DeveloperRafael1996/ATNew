import React from 'react'
import NavbarPage from './NavbarPage'

const MenuPage = () => {
  return (
    <div
      className="w-full flex items-center justify-between"
      style={{ height: '40px' }}
    >
      <div className="text-xl font-800">
        <span className="text-red-600">apuesta</span>
        <span>total</span>
      </div>
      <NavbarPage />
    </div>
  )
}

export default MenuPage

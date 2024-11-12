import React from 'react'
import Logo from '../MovieLogo.png'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4 '>
        <img className='w-[50px]' src={Logo} alt="" />
        <Link to="/" className='text-pink-600 text-xl font-style hover:scale-110 duration-300 hover:cursor-pointer: italic hover:text-blue-800  p-1 px-3 '>Movies</Link>
        <Link to="/watchlist" className='text-pink-600 text-xl font-style: italic hover:scale-110 duration-300 hover:cursor-pointer hover:text-blue-800 p-1 px-3'>Watchlist</Link>
    </div>
  )
}

export default Navbar
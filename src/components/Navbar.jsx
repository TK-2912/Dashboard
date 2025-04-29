import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
  return (

    <div className="flex items-center justify-between bg-white shadow-sm px-4 py-2">
    <div className="flex items-center">
      
    <div className="relative group">

      <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
        <RxHamburgerMenu className="h-5 w-5 text-gray-800"/>
      </button>

      <ul className="absolute left-0 mt-2 w-52 rounded-md bg-white p-2 shadow-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-100 z-40">
        <li> <a href="#home" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Homepage</a> </li>
        <li> <a href="#setting" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Setting</a> </li>
        <li> <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">About</a> </li>
      </ul>
    </div>
  
</div>

      <div>
        <a href="#dashboard" className="text-xl font-semibold text-gray-800">Dashboard</a>
      </div>

      <div className="flex items-center gap-2">

      <button className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
        <IoIosNotificationsOutline className="w-6 h-6" />
        <span className="absolute top-1 right-2  h-2 w-2 bg-red-500 rounded-full"></span>
      </button>
      
      </div>
</div>

  )
}

export default Navbar
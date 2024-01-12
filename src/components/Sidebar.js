import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen)

  //Early return pattern
  if(!isMenuOpen){
    return null;
  }

  return (
    <div className='py-4 m-2 min-w-48 min-h-screen '>
        <ul className='pb-2'>
          <li className='py-2 px-6 bg-gray-100 rounded-lg'><Link to="/">Home</Link></li>
          <li className='py-2 px-6 hover:bg-gray-100 rounded-lg'>Shorts</li>
          <li className='py-2 px-6 hover:bg-gray-100 rounded-lg'>Subsription</li>
          <li className='py-2 px-6 hover:bg-gray-100 rounded-lg'>Live</li>
        </ul>
        <hr/>
        <h1 className='pt-5 pl-3 font-bold'>Explore</h1>
        <ul className='pb-2'>
          <li className='py-2 px-6 hover:bg-gray-100 rounded-lg'>Trending</li>
          <li className='py-2 px-6 hover:bg-gray-100 rounded-lg'>Shopping</li>
          <li className='py-2 px-6 hover:bg-gray-100 rounded-lg'>Music</li>
          <li className='py-2 px-6 hover:bg-gray-100 rounded-lg'>Live</li>
          <li className='py-2 px-6 hover:bg-gray-100 rounded-lg'>Gaming</li>
        </ul>
        <hr/>
        <h1 className='pt-5 pl-3 font-bold'>Subsription</h1>
        <ul className='pb-2'>
          <li className='py-2 px-6 hover:bg-gray-100 rounded-lg'>Akshay Saini</li>
          <li className='py-2 px-6 hover:bg-gray-100 rounded-lg'>Harkirat Singh</li>
        </ul>
    </div>
  )
}

export default Sidebar

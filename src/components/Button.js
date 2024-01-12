import React from 'react'

const Button = (props) => {
    const {name} = props
  return (
    <div className=''>
      <button className='px-3 py-1 text-sm mr-2 rounded-lg font-semibold bg-gray-200 cursor-pointer'><span className='whitespace-nowrap'>{name}</span></button>
    </div>
  )
}

export default Button

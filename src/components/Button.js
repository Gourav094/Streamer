import React from 'react'

const Button = (props) => {
    const {name} = props
  return (
    <div className='mt-3'>
      <button className='px-2 py-1 text-sm mr-3 rounded-lg border-2 font-semibold bg-gray-200 cursor-pointer'>{name}</button>
    </div>
  )
}

export default Button

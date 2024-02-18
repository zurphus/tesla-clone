import React from 'react'
import './ButtonSecondary.css'

const ButtonSecondary = ({ name }) => {
  return (
    <button className='button-secondary'>
      {name}
    </button>
  )
}

export default ButtonSecondary
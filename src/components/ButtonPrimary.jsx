import React from 'react'
import './ButtonPrimary.css'

const ButtonPrimary = ({ name, type, onClick}) => {
  return (
    <button className='button-primary' name={name} type={type} onClick={onClick}>
        {name}
    </button>
  )
}

export default ButtonPrimary
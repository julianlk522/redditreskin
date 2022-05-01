import React from 'react'
import spinner from '../assets/spinner.gif'

function Spinner() {
  return (
    <div>
        <img className='spinner'
        src={spinner}
        alt="Loading..." 
        width={180}
        />
    </div>
  )
}

export default Spinner
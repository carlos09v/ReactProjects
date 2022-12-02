import React from 'react'
import Mountain from '../assets/f5.jpg'

const Images = () => {
  return (
    <div>
        <img src="/f2.jpg" alt="F2 Image" />
        <img src={Mountain} alt="Mountain" />
    </div>
  )
}

export default Images
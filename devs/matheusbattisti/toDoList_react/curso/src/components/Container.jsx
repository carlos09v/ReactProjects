import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='container'>
        {/* Utilizar o componente como uma tag html */}
        {children}
    </div>
  )
}

export default Container
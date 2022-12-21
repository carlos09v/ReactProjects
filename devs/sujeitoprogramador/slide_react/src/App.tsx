import './App.css'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

import image1 from './imgs/1.jpg'
import image2 from './imgs/2.jpg'
import image3 from './imgs/3.jpg'
import image4 from './imgs/4.jpg'

const images = [image1, image2, image3, image4]

function App() {
  const carrossel = useRef<any>()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    // Largura Máxima do Drag no Carrossel
    console.log(carrossel.current?.scrollWidth, carrossel.current?.offsetWidth)
    
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  }, [])

  return (
    <div className="App">
      {/* <motion.h1 animate={{ x: 200, y: 100 }}>Sujeito Programador</motion.h1> */}

      <motion.div ref={carrossel} className='carrossel' whileTap={{ cursor: 'grabbing' }}>
        <motion.div className='inner'
        drag='x'
        dragConstraints={{ right: 0, left: -width }}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: .8 }}>
          
          {images.map(image => (
            <motion.div className='item' key={image}>
              <img src={image} alt='Text' />
            </motion.div>
          ))}

        </motion.div>
      </motion.div>
    </div>
  )
}

export default App

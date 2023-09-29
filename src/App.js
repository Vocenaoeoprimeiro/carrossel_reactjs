import React, { useState, useEffect, useRef} from 'react';
import { motion } from 'framer-motion';
import './App.css';

import { myImages } from './utils/images';

function App() {

  const carrossel = useRef();
  const [sizeWindow, setSizeWindow] = useState(0);

  useEffect(() => {
    //console.log(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth);
    setSizeWindow(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth);
  })

  return (
    <div className="container">
      {/* <motion.h1 animate={{x: 500, y: 500}}>Slides</motion.h1> */}
      <motion.div className='carrosselContainer' ref={carrossel} whileTap={{cursor: 'grabbing'}}>
        <motion.div 
          className='carrossel'
          drag='x'
          dragConstraints={{right: 0, left: -sizeWindow}}
          initial={{x: 100}}
          animate={{x: 0}}
          transition={{duration: 0.6}}
        >

          {myImages.map((img, index) => (
            <motion.div key={index} className='image'>
              <img src={img} alt='Nome Imagem' />
            </motion.div>
          ))}

        </motion.div>
      </motion.div>

    </div>
  );
}

export default App;

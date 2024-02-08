import React from 'react'
import {motion} from 'framer-motion'

const AnimatingElements = () => {
  return (
    <motion.div animate={{x: 100}} style={{backgroundColor : 'dodgerblue', paddingLeft: '15px' , paddingRight: '15px'}}>
      <h1>Hello</h1>
    </motion.div>
  )
}

export default AnimatingElements
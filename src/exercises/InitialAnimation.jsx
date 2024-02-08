import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const InitialAnimation = () => {
  return (
    <motion.div
        initial={{x: 0}}
        animate={{x: '-100vw'}}
        transition={{duration: 1}}
    >
        <h1>InitialAnimation</h1>
    </motion.div>
  )
}

export default InitialAnimation
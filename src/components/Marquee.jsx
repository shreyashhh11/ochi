import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    
  return (
    <div className='w-full py-10 bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'>
            <motion.h1 intial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat:Infinity, duration: 5}} className='text-[9.5vw] leading none font-["Test_Founders_Grotesk "] uppercase  font-semibold'> We are ochi</motion.h1>
            <motion.h1 intial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat:Infinity,duration: 5}} className='text-[9.5vw] leading none font-["Test_Founders_Grotesk "] uppercase  font-semibold'> We are ochi</motion.h1>
            
        </div>
    </div>
  )
}

export default Marquee
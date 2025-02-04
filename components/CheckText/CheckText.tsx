import React from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import * as motion from 'motion/react-client'


interface CheckTextProps {
    text: string
}


const CheckText = ({ text }: CheckTextProps) => {
  return (
    <div className='flex items-center gap-4'>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
                    <IoIosCheckmarkCircleOutline className='text-primary text-2xl'/>
        </motion.div>
        <p className='text-primary font-montserrat text-lg w-80'>{text}</p>
    </div>
  )
}

export default CheckText
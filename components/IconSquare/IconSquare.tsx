import React from 'react'
import * as motion from 'motion/react-client'


interface IconSquareProps {
    icon: string
    title: string
    text?: string
    color: string,
    list ?: string[]
}

const IconSquare = ({ icon, title, text, color, list }: IconSquareProps) => {
  return (
    <div className={`icon-square_container font-montserrat ${color} p-10`}>
        <motion.img
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 3.5 }} 
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            src={icon} alt="icon" className='md:w-20 md:h-20 w-16 h-16'/>

        <h2 className='text-2xl font-medium text-white text-center'>{title}</h2>
        {
            text && <p className='text-center text-white'>{text}</p>
        }
        {
            list && <ul className='text-white text-start w-5/6'>
                {
                    list.map(item => <li className='list-disc w-full' key={item}>{item}</li>)
                }
            </ul>
        }
    </div>
  )
}

export default IconSquare
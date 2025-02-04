import React from 'react' 
import * as motion from 'motion/react-client'

interface ImageTextProps {
    image: string
    title : string
    text: string
    icon: string
    reverse?: boolean
}

const ImageText = ({ image, title, text, icon, reverse }: ImageTextProps) => {
  return (
    <div className={`image-text_container ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
        <div 
        className='lg:w-1/2 flex flex-col justify-center items-center md:p-20 p-10 bg-tertiary gap-4'>
            <motion.img
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5 }} 
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}    
            src={icon} alt="image" className='md:w-20 md:h-20 w-16 h-16'/>
            <h2 className='text-2xl font-medium text-primary text-center'>{title}</h2>
            <p className='text-center text-primary'>{text}</p>
        </div>
        <div className='lg:w-1/2 relative'>
            <div className='absolute inset-0 bg-black bg-opacity-40 z-10'></div>
            <img src={image} alt="image" className='w-full h-full object-cover lg:h-full h-[400px]'/>
        </div>

    </div>
  )
}

export default ImageText
import Link from 'next/link'
import React from 'react'
import * as motion from 'motion/react-client'

interface InfoSquareProps {
    title: string
    description?: string
    image?: string
    btnText?: string
    url?: string
}

const InfoSquare = ({ title, description, image, btnText, url }: InfoSquareProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-tertiary flex flex-col rounded-lg flex-1"
        >
            <div className="relative">
                {
                    !btnText && description && image && (
                        <div className="absolute inset-0 bg-black bg-opacity-20 z-10 rounded-t-md"></div>
                    )
                }
                {
                    image && (
                        <img
                            src={image}
                            alt={title}
                            className={`w-full h-[250px] bg-white rounded-t-md ${btnText ? 'object-contain' : 'object-cover'}`}
                        />
                    )
                }
            </div>
            <div className="flex flex-col items-center justify-between px-8 py-4 h-full">
                <h2 className="xl:text-2xl text-xl font-bold text-primary font-league-spartan">
                    {title}
                </h2>
                {
                    description && (
                        <p className={`text-primary text-justify xl:text-lg text-sm font-montserrat tracking-tight font-normal ${btnText ? 'md:h-48 xl:h-64' : ''}`}>
                            {description}
                        </p>
                    )
                }
                {
                    btnText && url && (
                        <Link
                            href={url}
                            className="btn bg-primary rounded-lg text-tertiary mt-4 w-full hover:bg-primary/80 font-league-spartan md:text-lg text-sm"
                        >
                            {btnText}
                        </Link>
                    )
                }
            </div>
        </motion.div>
    );
};

export default InfoSquare;
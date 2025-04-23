import React from 'react'
import TitlePrincipal from '@/components/TitlePrincipal/TitlePrincipal'
import * as motion from 'motion/react-client'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Agradecimiento",
  description: "Gracias por tu interés en nuestros productos y servicios.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/`),
  openGraph: {
    title: "Agradecimiento",
    description: "Gracias por tu interés en nuestros productos y servicios.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/agradecimiento`,
    type: "website",
    images: [
      {
        url: "/assets/images/banners/banner2.png",
        width: 1200,
        height: 630,
        alt: "Agradecimiento - Equipos avanzados para el procesamiento de café",
      },
    ],
  },
};

const AgradecimientoPage = () => {
  return (
    <div className='page h-full bg-tertiary flex justify-center items-center'>
        <div className='w-full h-full flex flex-col items-center justify-center p-10'>
            <img src="/assets/images/logos/logo_v2.png" alt="Agradecimiento" className='w-40 h-auto' />
            <TitlePrincipal title="¡Gracias por tu interés!" color="text-primary" main />
            <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-center text-lg md:text-xl lg:text-2xl text-black  py-4'
            >
            Nos pondremos en contacto contigo lo antes posible.
            </motion.p>
        </div>
    </div>
  )
}

export default AgradecimientoPage
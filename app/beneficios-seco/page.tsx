import React from 'react'
import Banner from '@/components/Banner/Banner'
import NavBar from '@/components/NavBar/NavBar'
import TitlePrincipal from '@/components/TitlePrincipal/TitlePrincipal'
import CheckText from '@/components/CheckText/CheckText'
import Footer from '@/components/Footer/Footer'
import * as motion from 'motion/react-client'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Beneficio Seco",
  description: "Descubre los mejores equipos para el procesamiento de café seco con tecnología avanzada.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/`),
  openGraph: {
    title: "Beneficios Seco",
    description: "Descubre los mejores equipos para el procesamiento de café seco con tecnología avanzada.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/beneficios-seco`,
    type: "website",
    images: [
      {
        url: "/assets/images/banners/banner2.png",
        width: 1200,
        height: 630,
        alt: "Beneficios Seco - Equipos avanzados para el procesamiento de café",
      },
    ],
  },
};


const SecoPage = () => {

  const images = [
    "/assets/images/benefits/seco/seco1.png",
    "/assets/images/benefits/seco/seco2.png",
    "/assets/images/benefits/seco/seco3.png",
    "/assets/images/benefits/seco/seco4.png",
  ]

  const images2 = [...images, "/assets/images/banners/banner2.png"]

  return (
    <div className='page'>
      <NavBar />
      <Banner
        title="Beneficio Seco"
        subtitle="El Paso Crucial para Obtener Granos de Calidad"
        imageList={images2}
        main
        textButton="Cotizar"
        link={'https://b24-f1mrz5.bitrix24.site/crm_form_dp8h3/'}
        />
      <Banner
        title="Soluciones para Beneficio Seco de Alta Calidad"
        subtitle="En el proceso de beneficio seco, cada detalle cuenta para obtener granos de alta calidad. Nuestra selección de máquinas incluye módulos de beneficio seco, trillas, clasificadoras por tamaño y más. Todo lo que necesitas para lograr el resultado deseado."
        color="bg-secondary"
      />
      <section 
        className='bg-tertiary main_padding w-full flex flex-col items-center gap-10'>
        <TitlePrincipal title="Contamos con Equipos Avanzados" color="text-primary"/>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full py-4 justify-center'>
          <CheckText
            text='Módulo de beneficio seco para micro Lotes'
          />
          <CheckText
            text='Módulo de beneficio seco para exportación'
          />
          <CheckText
            text='Prelimpiadora'
          />
          <CheckText
            text='Despedregadora'
          />
          <CheckText
            text='Trilla'
          />
          <CheckText
            text='Clasificadora por tamaño'
          />
          <CheckText
            text='Transportadores de Café'
          />
          <CheckText
            text='Silos de almacenaje y silo Mezclador'
          />
          <CheckText
            text='Banda de Escogedura'
          />
          <CheckText
            text='Bandas Transportadoras tubulares y abiertas'
          />
          <CheckText
            text='Cuarto para electrónicas'
          />
          <CheckText
            text='Sistema de evacuación de cascabillo y polvo'
          />
          <CheckText
            text='Elevador de granos'
          />
          <CheckText
            text='Caminamientos'
          />
        </div>
        <div className='w-full md:grid-cols-2 grid-cols-1 grid gap-10'>
          {
            images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.5 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}    
              >
                <img src={image} alt="" className='w-full'/>
              </motion.div>
            ))
          }
        </div>
      </section>
        <Banner
          image="/assets/images/banners/banner3.png"
          title="No se quede atrás"
          subtitle="Únase a las principales tostadurías que ya han elegido JAB y lleve su negocio al siguiente nivel. ¡Transforme su proceso hoy!"
          textButton="Cotizar"
          link={'https://b24-f1mrz5.bitrix24.site/crm_form_dp8h3/'}
        />
      <Footer />
    </div>
  )
}

export default SecoPage
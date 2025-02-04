import React from 'react'
import Banner from '@/components/Banner/Banner'
import NavBar from '@/components/NavBar/NavBar'
import TitlePrincipal from '@/components/TitlePrincipal/TitlePrincipal'
import CheckText from '@/components/CheckText/CheckText'
import Footer from '@/components/Footer/Footer'
import * as motion from 'motion/react-client'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Beneficios Maduro",
  description: "Descubre los mejores equipos para el procesamiento de café maduro con tecnología avanzada.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/`),
  openGraph: {
    title: "Beneficios Maduro",
    description: "Descubre los mejores equipos para el procesamiento de café maduro con tecnología avanzada.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/beneficios-maduro`,
    type: "website",
    images: [
      {
        url: "/assets/images/banners/banner2.png",
        width: 1200,
        height: 630,
        alt: "Beneficios Maduro - Equipos avanzados para el procesamiento de café",
      },
    ],
  },
};

const MaduroPage = () => {

  const images = [
    "/assets/images/benefits/maduro/maduro1.png",
    "/assets/images/benefits/maduro/maduro2.png",
    "/assets/images/benefits/maduro/maduro3.png",
    "/assets/images/benefits/maduro/maduro4.png",
  ]

  const images2 = [...images, "/assets/images/banners/banner6.png"]

  return (
    <div className='page'>
      <NavBar />
      <Banner
        title="Beneficios Maduro"
        subtitle="Cuida tus Granos desde el Origen"
        imageList={images2}
        main
        />
      <Banner
        title="Transforma Tus Granos con los Mejores Equipos"
        subtitle="En esta sección, podrás encontrar una variedad de equipos esenciales para el beneficio maduro de tus granos de café. Desde bodegas de almacenaje, despulpadoras y lavadoras / desmucilaginadoras hasta tanques de fermentación con instrumentación, contamos con todo lo necesario para garantizar que tus granos reciban el cuidado que se merecen desde el inicio."
        color="bg-secondary"
      />
      <section 
        className='bg-tertiary main_padding w-full flex flex-col items-center gap-10'>
        <TitlePrincipal title="Contamos con Equipos Avanzados" color="text-primary"/>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full py-4'>
          <CheckText
            text='Bodega de Almacenaje'
          />
          <CheckText
            text='Básculas Pequeñas, Medianas y Grandes'
          />
          <CheckText
            text='Despulpador Manual Fijo de 2 Salidas'
          />
          <CheckText
            text='Despulpador Graduable de 3 y 6 Salidas'
          />
          <CheckText
            text='Beneficio Maduro Ecológico Semi - Seco de Capacidad 12QQ por Hora (25QQ, 40QQ, 100QQ)'
          />
          <CheckText
            text='Recibidor de Café Pequeño, Mediano y Grande'
          />
          <CheckText
            text='Recibidor de café Pequeño, Mediano y Grande de Acero Inoxidable'
          />
          <CheckText
            text='Zaranda de limpieza de Maduro'
          />
          <CheckText
            text='Criba de cereza'
          />
          <CheckText
            text='Criba de pergamino'
          />
          <CheckText
            text='Criba clasificadora'
          />
          <CheckText
            text='Transportadores de café maduro y pergamino'
          />
          <CheckText
            text='Lavadora de café de 30QQ, 60QQ y 100QQ'
          />
          <CheckText
            text='Desmucilaginadora de Café'
          />
          <CheckText
            text='Transportador helicoidal'
          />
          <CheckText
            text='Tanques fermentadores y de almacenaje (con o sin instrumentación)'
          />
          <CheckText
            text='Horno para secadora de cascabillo y/o gas Propano'
          />
          <CheckText
            text='Pre-Secadora'
          />
          <CheckText
            text='Secadoras de café rotativas'
          />
          <CheckText
            text='Secadoras de café estáticas (circulares y de pila)'
          />
          <CheckText
            text='Camas africanas con tecnología JAB'
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
          link={'https://b24-f1mrz5.bitrix24.site/crm_form_luiea/'}
        />
      <Footer />
    </div>
  )
}

export default MaduroPage
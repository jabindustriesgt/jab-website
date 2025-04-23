import React from 'react'
import Banner from '@/components/Banner/Banner'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'
import TitlePrincipal from '@/components/TitlePrincipal/TitlePrincipal'
import InfoSquare from '@/components/InfoSquare/InfoSquare'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Trilladora de café pergamino / natural",
  description: "Descubre la Revolución en el Procesamiento de Café con la Trilladora JAB",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/`),
  openGraph: {
    title: "Trilladora de café pergamino / natural",
    description: "Descubre la Revolución en el Procesamiento de Café con la Trilladora JAB",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/trilla`,
    type: "website",
    images: [
      {
        url: "/assets/images/banners/banner-trilla.png",
        width: 1200,
        height: 630,
        alt: "Trilladora de café pergamino / natural",
      },
    ],
  },
};


const TrillaPage = () => {
  const images = [
    "/assets/images/banners/banner-trilla.png",
    "/assets/images/products/trillas/trilla1.png",
    "/assets/images/products/trillas/trilla2.png",
  ]

  return (
    <div className='page'>
      <NavBar />
        <Banner
        title="TRILLADORA DE CAFÉ PERGAMINO / NATURAL "
        subtitle="Descubre la Revolución en el Procesamiento de Café con la Trilladora JAB"
        imageList={images}
        main
        textButton="Cotizar"
        link={'https://b24-f1mrz5.bitrix24.site/crm_form_ubbc1/'}
        />
        <Banner
        title="¿Listo para convertir su café en oro? "
        subtitle="La trilladora JAB es la herramienta esencial para iniciar su aventura en la tostaduría. Transforma su café de pergamino y/o natural a oro con eficiencia y flexibilidades únicas gracias a su innovadora cuchilla graduable. 
        Además, nuestra tecnología avanzada de aspiración de cascabillo mejora la limpieza y rendimiento de su café, permitiéndole aprovechar cada subproducto."
        color="bg-secondary"
      />
      <section className='bg-primary main_padding w-full flex flex-col items-center gap-10'>
        <TitlePrincipal title="Nuestras Trillas" color="text-white"/>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full'>
          <InfoSquare
              title="Trilla de muestras"
              image="/assets/images/products/trillas/trilla1.png"
          />
          <InfoSquare
            title="Trillas 1 a 3 Quintales"
            image="/assets/images/products/trillas/trilla2.png"
          />
          <InfoSquare
            title="Trillas 3 a 5 Quintales"
            image="/assets/images/products/trillas/trilla3.png"
          />
          </div>
      </section>
      <Banner
        image="/assets/images/banners/banner3.png"
        title="No se quede atrás"
        subtitle="Únase a las principales tostadurías que ya han elegido JAB y lleve su negocio al siguiente nivel. ¡Transforme su proceso hoy!"
        textButton="Cotizar"
        link={'https://b24-f1mrz5.bitrix24.site/crm_form_ubbc1/'}
      />
      <Footer />
    </div>
  )
}

export default TrillaPage
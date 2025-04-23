import Banner from '@/components/Banner/Banner'
import Footer from '@/components/Footer/Footer'
import InfoSquare from '@/components/InfoSquare/InfoSquare'
import NavBar from '@/components/NavBar/NavBar'
import TitlePrincipal from '@/components/TitlePrincipal/TitlePrincipal'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Molino de Café JAB",
  description: "Precisión y Versatilidad para Cada Necesidad",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/`),
  openGraph: {
    title: "Molino de Café JAB",
    description: "Precisión y Versatilidad para Cada Necesidad",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/molino`,
    type: "website",
    images: [
      {
        url: "/assets/images/banners/banner-molino.png",
        width: 1200,
        height: 630,
        alt: "Molino de Café JAB - Precisión y Versatilidad para Cada Necesidad",
      },
    ],
  },
};


const MolinoPage = () => {

  const images = [
    "/assets/images/banners/banner-molino.png",
    "/assets/images/products/molinos/molino1.png",
    "/assets/images/products/molinos/molino2.png",
    "/assets/images/products/molinos/molino3.png",
  ]

  return (
    <div className='page'>
      <NavBar />
      <Banner
        title="MOLINO DE CAFÉ JAB"
        subtitle="Precisión y Versatilidad para Cada Necesidad"
        imageList={images}
        main
        textButton="Cotizar"
        link={'https://b24-f1mrz5.bitrix24.site/crm_form_qqbuj/'}
        />
      <Banner
        title="Transforme su negocio con el Molino de Café JAB"
        subtitle="El Molino JAB, favorito de los expertos en café, ofrece una uniformidad excepcional en cada grano. Fabricado en acero inoxidable de alta calidad, procesa café con una consistencia superior y 20 tipos de molienda ajustables para cada necesidad."
        color="bg-secondary"
      />
      <section className='bg-primary main_padding w-full flex flex-col items-center gap-10'>
        <TitlePrincipal title="Nuestros Molinos" color="text-white"/>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full'>
          <InfoSquare
              title="Molino 1 a 2qq"
              image="/assets/images/products/molinos/molino1.png"
          />
          <InfoSquare
            title="Molino 3 a 5qq"
            image="/assets/images/products/molinos/molino2.png"
          />
          <InfoSquare
            title="Molino de  60 a 100 libras"
            image="/assets/images/products/molinos/molino3.png"
          />
          </div>
      </section>
      <Banner
        image="/assets/images/banners/banner3.png"
        title="No se conforme con menos"
        subtitle="Únase a las mejores cafeterías y usuarios de tostaduría que ya confían en JAB para ofrecer una calidad incomparable."
        textButton="Cotizar"
        link={'https://b24-f1mrz5.bitrix24.site/crm_form_qqbuj/'}
      />
      <Footer />
    </div>
  )
}

export default MolinoPage
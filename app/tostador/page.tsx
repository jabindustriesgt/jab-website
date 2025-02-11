import React from 'react'
import Banner from '@/components/Banner/Banner'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'
import TitlePrincipal from '@/components/TitlePrincipal/TitlePrincipal'
import InfoSquare from '@/components/InfoSquare/InfoSquare'
import IconSquare from '@/components/IconSquare/IconSquare'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Tostadoras JAB",
  description: "Descubre las mejores tostadoras de café con tecnología avanzada.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/`),
  openGraph: {
    title: "Tostadoras JAB",
    description: "Descubre las mejores tostadoras de café con tecnología avanzada.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/tostadoras`,
    type: "website",
    images: [
      {
        url: "/assets/images/banners/banner-tostador.png",
        width: 1200,
        height: 630,
        alt: "Tostadoras JAB",
      },
    ],
  },
};


const TostadorPage = () => {
  const benefitsToaster = [
    "Calidad Consistente: Garantiza sabores y aromas únicos con un tueste preciso.",
    "Eficiencia Energética: Consume solo 25 lb de gas propano para tostar hasta 800 lb de café.",
    "Versatilidad y Personalización: Permite experimentar con recetas y curvas de tueste gracias al software avanzado.",
    "Seguridad y Control: Sistemas automáticos de gas, botón de emergencia y componentes termorresistentes que garantizan operaciones seguras.",
    "Durabilidad Superior: Materiales robustos como acero inoxidable y acabados premium aseguran un diseño duradero y estético."
  ]

  const detailsToaster = ["Reguladores precisos y monitoreo en tiempo real para preservar tus recetas favoritas.",
    "Sistemas ergonómicos que optimizan el flujo de trabajo, tostando un lote mientras enfrías otro.",
    "Ahorro en costos operativos gracias a un diseño eficiente y de bajo consumo."]

  return (
    <div className='page'>
      <NavBar />
      <Banner
        title="TOSTADORAS JAB"
        subtitle="La Excelencia en Cada Tueste"
        video='/assets/videos/inicio2.mp4'
        main
        />
      <Banner
        title="Tostadoras Diseñadas para su Éxito"
        subtitle="Capacidades desde 1 kg hasta 500 lb. Descubre nuestras Tostadoras Premium de Café, diseñadas para potenciar tu negocio y realzar la calidad de tu café.
        Con capacidades variables y reguladores de alta precisión, podrás tostar desde microlotes hasta grandes lotes con total control y eficiencia."
        color="bg-secondary"
      />
      <section className='bg-primary main_padding w-full flex flex-col items-center gap-10'>
        <TitlePrincipal title="Nuestras Tostadoras" color="text-white"/>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full'>
          <InfoSquare
              title="Tostador  (200 gramos)"
              image="/assets/images/products/tostadoras/tostador1.png"
          />
          <InfoSquare
              title="Tostador  (Kilo)"
              image="/assets/images/products/tostadoras/tostador2.png"
          />
          <InfoSquare
            title="Tostador  (5lbs)"
            image="/assets/images/products/tostadoras/tostador3.png"
          />
          <InfoSquare
            title="Tostador  (10lbs)"
            image="/assets/images/products/tostadoras/tostador4.png"
          />
          <InfoSquare
            title="Tostador  (15lbs)"
            image="/assets/images/products/tostadoras/tostador5.png"
          />
          <InfoSquare
            title="Tostador  (25lbs)"
            image="/assets/images/products/tostadoras/tostador6.png"
          />
          <InfoSquare
            title="Tostador  (35lbs)"
            image="/assets/images/products/tostadoras/tostador7.png"
          />
          <InfoSquare
            title="Tostador  (50lbs)"
            image="/assets/images/products/tostadoras/tostador8.png"
          />
          <InfoSquare
            title="Tostador  (75lbs)"
            image="/assets/images/products/tostadoras/tostador9.png"
          />
          <InfoSquare
            title="Tostador  (100lbs)"
            image="/assets/images/products/tostadoras/tostador10.png"
          />
          <InfoSquare
            title="Tostador  (150lbs)"
            image="/assets/images/products/tostadoras/tostador11.png"
          />
          <InfoSquare
            title="Tostador  (250lbs)"
            image="/assets/images/products/tostadoras/tostador12.png"
          />
          <InfoSquare
            title="Tostador  (500lbs)"
            image="/assets/images/products/tostadoras/tostador13.png"
          />
          
          </div>
      </section>
      <div className="flex flex-col gap-10 bg-tertiary p-10 w-full">
        <div className='md:px-40'>
          <TitlePrincipal title="Características Destacadas de Nuestra Maquinaria de Tostado de Café" color="text-primary"/>
        </div>
          <div className='flex flex-col md:flex-row w-full gap-10'>
            <IconSquare
              title="Principales Beneficios"
              icon="/assets/images/products/tostadoras/icon1.png"
              list={benefitsToaster}
              color='bg-primary'
            />
            <IconSquare
              title="Detalles Innovadores"
              icon="/assets/images/products/tostadoras/icon2.png"
              list={detailsToaster}
              color='bg-primary'
            />
          </div>
        </div>
        <Banner
          title="Soporte Garantizado"
          subtitle="Ofrecemos 12 meses de garantía real y soporte técnico especializado para asegurar el máximo rendimiento de tu inversión."
          color="bg-primary"
        />
       <Banner
        image="/assets/images/banners/banner3.png"
        title="No se quede atrás"
        subtitle="Optimiza tu negocio con nuestra maquinaria diseñada para preservar la calidad, eficiencia y seguridad.
        Consulta por nuestras Selladoras Manual y de Pedal, Zarandas Muestreras y Clasificadora para complementar  tu equipo de tostaduría"
        textButton="Cotizar"
        link={'https://b24-f1mrz5.bitrix24.site/crm_form_wy52y/'}
      />
      <Footer />
    </div>
  )
}

export default TostadorPage
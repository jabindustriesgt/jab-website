import React from 'react'
import NavBar from '@/components/NavBar/NavBar'
import Banner from '@/components/Banner/Banner'
import ImageText from '@/components/ImageText/ImageText'
import IconSquare from '@/components/IconSquare/IconSquare'
import TitlePrincipal from '@/components/TitlePrincipal/TitlePrincipal'
import InfoSquare from '@/components/InfoSquare/InfoSquare'
import Footer from '@/components/Footer/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Quienes Somos",
  description: "Somos una empresa apasionada por la creatividad, comprometida en ayudar a nuestros clientes a hacer realidad sus sueños. Facilitamos la interacción y conexión con equipos que destacan por su alta calidad y tecnología avanzada, brindando soluciones innovadoras.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/`),
  openGraph: {
    title: "Quienes Somos",
    description: "Somos una empresa apasionada por la creatividad, comprometida en ayudar a nuestros clientes a hacer realidad sus sueños. Facilitamos la interacción y conexión con equipos que destacan por su alta calidad y tecnología avanzada, brindando soluciones innovadoras.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/quienes-somos`,
    type: "website",
    images: [
      {
        url: "/assets/images/banners/banner2.png",
        width: 1200,
        height: 630,
        alt: "Quienes Somos",
      },
    ],
  },
};


const AboutPage = () => {
  return (
    <div className="page bg-black">
      <NavBar/>
      <Banner
        title="Quienes Somos"
        subtitle="Somos una empresa apasionada por la creatividad, comprometida en ayudar a nuestros clientes a hacer realidad sus sueños. Facilitamos la interacción y conexión con equipos que destacan por su alta calidad y tecnología avanzada, brindando soluciones innovadoras."
        color='bg-primary'
      />
      <section className="flex flex-col">
      <ImageText
        image="/assets/images/about/quienes-somos1.png"
        title="Soluciones Innovadoras y Rentabilidad"
        text="Diseñamos soluciones que brindan una experiencia excepcional, facilitando procesos de manera práctica y dinámica. Esto se traduce en una alta rentabilidad y retornos de inversión garantizados en el corto plazo."
        icon="/assets/images/about/quienes-somos3.png"
      />
      <ImageText
        image="/assets/images/about/quienes-somos2.png"
        title="17 Años de Confianza y Liderazgo"
        text="Con 17 años de experiencia en el mercado, hemos consolidado una reputación de solidez y confianza. Nuestros equipos están diseñados con un enfoque único que nos diferencia en un mercado competitivo y nos posiciona siempre un paso adelante."
        icon="/assets/images/about/quienes-somos4.png"
        reverse
      />
      </section>
      <section className='bg-white main_padding flex w-full md:gap-16 gap-10 md:flex-row flex-col'>
        <IconSquare 
          icon="/assets/images/about/quienes-somos5.png"
          title="Nuestra Misión"
          text="Diseñar y fabricar equipos de alta gama, utilizando materiales sostenibles, que optimicen la practicidad y eficiencia en el procesamiento de granos, contribuyendo al desarrollo de procesos innovadores."
          color='bg-primary'
        />
        <IconSquare 
          icon="/assets/images/about/quienes-somos6.png"
          title="Nuestra Visión"
          text="Ser líderes en el desarrollo de equipos de calidad y tecnología avanzada, ofreciendo a nuestros clientes una experiencia excepcional en el procesamiento de granos. Nos enfocamos en impulsar la eficacia de sus procesos, ayudándolos a cumplir sus sueños y alcanzar altos niveles de rentabilidad."
          color='bg-primary'
        />
      </section>
      <section className='bg-primary main_padding w-full flex flex-col items-center gap-10'>
        <TitlePrincipal title="Casos de éxito" color='text-white'/>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-10 grid-rows-2'>
          <InfoSquare
            title="Ciudad de Guatemala"
            description="Planta para producción de cacao con capacidades de hasta 450 lbs por hora."
            image="/assets/images/about/case1.png"
          />
          <InfoSquare
            title="Ciudad de Guatemala"
            description="Tostador de 500 libras diseñado para exportadora- consistencia a gran escala. "
            image="/assets/images/about/case2.png"
          />
          <InfoSquare
            title="Cobán, Finca Aurora"
            description="Beneficio ecológico modelo de café maduro para región"
            image="/assets/images/about/case3.png"
          />
          <InfoSquare
            title="Petén, Guatemala"
            description="Secadora de granos para organización internacional, para apoyo de mujeres emprendedora"
            image="/assets/images/about/case4.png"
          />
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default AboutPage
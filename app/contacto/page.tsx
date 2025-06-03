import React from 'react'
import NavBar from '@/components/NavBar/NavBar'
import Link from 'next/link'
import { AiTwotoneMail, AiFillPhone } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
import Footer from '@/components/Footer/Footer';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contacto",
  description: "Siempre es un gusto poder ayudarte.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/`),
  openGraph: {
    title: "Contacto",
    description: "Siempre es un gusto poder ayudarte.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/contacto`,
    type: "website",
    images: [
      {
        url: "/assets/images/banners/banner2.png",
        width: 1200,
        height: 630,
        alt: "Contacto - Siempre es un gusto poder ayudarte.",
      },
    ],
  },
};

const ContactoPage = () => {
  return (
    <div className='w-full bg-tertiary '>
      <section className='main_padding'>
        <NavBar secondary/>
        <div className='flex justify-between pt-20 lg:flex-row flex-col '>
          <div className='flex flex-col justify-start items-start lg:w-1/3 gap-6'>
            <span className='text-sm font-montserrat text-primary'>Contacto</span>
            <h1 className="lg:text-4xl text-3xl font-medium text-start font-montserrat text-primary">
            Siempre es un gusto poder ayudarte.
            </h1>
            <Link href='https://b24-f1mrz5.bitrix24.site/crm_form_ahckh/' className='bg-primary btn font-montserrat text-white hover:bg-primary/80 outline-none'>
              Contacto general
            </Link>
          </div>
          <div className='lg:w-2/3 flex justify-between xl:p-0 py-10 lg:flex-row flex-col'>
            <div className='nav_contact'>
              <div className='flex gap-4'>
                <FaLocationDot className='nav_icon'/>
                <span className='nav_title'>
                  Dirección
                </span>
              </div>
              <span className='nav_paragraph'>5ta avenida sur 39 lote b, San Pedro panorama Antigua Guatemala 03001</span>
            </div>
            <div className='nav_contact'>
              <div className='flex gap-4'>
                <AiTwotoneMail className='nav_icon'/>
                <span className='nav_title'>
                  Email
                </span>
              </div>
              <span
                  className='nav_paragraph'
                >
                  Consultas sobre productos <a href='mailto:ventas@jab.com.gt'>ventas@jab.com.gt</a>
                  <br/><br/>
                  Consultas generales <a href='mailto:comercializacion@jab.com.gt'>comercializacion@jab.com.gt</a>
                </span>
            </div>

            <div className='nav_contact'>
              <div className='flex gap-4'>
                <AiFillPhone className='nav_icon'/>
                <span className='nav_title'>
                  Teléfono
                </span>
              </div>
              <a href='tel:+50254179290' className='nav_paragraph'>+502 5417 9290</a>
              <a href="tel:+50277201660" className='nav_paragraph'>PBX:+502 7720 1660</a>
            </div>
          </div>
        </div>
        <div className='flex justify-between lg:pt-10 lg:flex-row flex-col gap-10'>
          <a href='https://whatsapp.com/channel/0029VayDWAW8vd1NnWU6100D'
          className='bg-primary w-full flex justify-center items-center h-28 gap-4 p-6 rounded-md'>
            <FaWhatsapp className='text-white text-4xl cursor-pointer'/>
            <span className='text-white font-montserrat lg:text-lg text-sm w-[80%]'>
              Sigue a nuestro Coffee Club JAB en whatsapp para recibir nuestras noticias y promociones
            </span>
          </a>

          <div className='bg-primary w-full flex flex-col justify-start items-start h-28 gap-4 p-6 rounded-md'>
            <span className='text-white font-montserrat md:text-lg text-sm'>
              Siguenos en nuestras redes sociales
            </span>
            <div className='flex gap-4'>
            <a>
                  <FaInstagram className="nav_icon_social"/>
              </a>
              <a>
                  <FaFacebook className="nav_icon_social"/>
              </a>
              <a>
                  <FaLinkedin className="nav_icon_social"/>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-primary w-full md:px-32 md:py-20 p-10 flex md:flex-row flex-col gap-10'>
        <div className='flex gap-4 md:w-1/2 w-full'>
          <h1 className="xl:text-4xl text-3xl font-medium text-start font-montserrat text-white md:w-2/3 w-full">
          Subcríbete a nuestro Newsletter
          </h1>
        </div>
        <div className="flex items-center h-12 md:w-1/2 bg-white/10 rounded-xl overflow-hidden">
          <input 
            type="email" 
            placeholder="Email" 
            className="flex-grow bg-transparent text-white pl-4 focus:outline-none placeholder-white font-montserrat"
          />
          <button 
            className="bg-white text-[#4F3911] px-4 h-full font-medium font-montserrat"
          >
            Subscribirse
          </button>
        </div>
      </section>
      <Footer/>
    </div>

  )
}

export default ContactoPage
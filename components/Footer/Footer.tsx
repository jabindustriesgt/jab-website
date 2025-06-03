import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex flex-col w-full relative'>
        <div className="footer sm:footer-horizontal bg-white p-8 md:gap-8 gap-6">
            <img src="/assets/images/logos/logo_v2.png" alt="logo" className="md:w-32 w-28"/>
            <nav>
                <h6 className="footer-principaltitle">Páginas</h6>
                <Link href="quienes-somos" className="link link-hover footer-subtitle">Quiénes somos</Link>
                <Link href="beneficios-maduro" className="link link-hover footer-subtitle">Beneficios Maduro</Link>
                <Link href="beneficios-seco" className="link link-hover footer-subtitle">Beneficios Seco</Link>
            </nav>
            <nav>
                <h6 className="footer-principaltitle">Productos</h6>
                <Link href="/trilla" className="link link-hover footer-subtitle">Trilla</Link>
                <Link href="/molino" className="link link-hover footer-subtitle">Molino</Link>
                <Link href="/tostador" className="link link-hover footer-subtitle">Tostador</Link>
            </nav>
            <nav>
                <h6 className="footer-principaltitle">Contacto</h6>
                <div className="link link-hover footer-subtitle">
                    <FaLocationDot className="footer_icon"/>
                    <Link href='https://maps.app.goo.gl/ZFGZwZZHaAS19pSb9' className='w-60'>5ta avenida sur 39 lote b, San Pedro panorama Antigua Guatemala 03001</Link>
                </div>
                <div className="link footer-subtitle no-underline">
                    <FaEnvelope className="footer_icon"/>
                    <div className='flex flex-col'>
                        <Link className='hover:underline' href="mailto:ventas@jab.com.gt">ventas@jab.com.gt (productos)</Link>
                        <Link className='hover:underline' href="mailto:comercializacion@jab.com.gt">comercializacion@jab.com.gt (servicios) </Link>
                    </div>
                </div>
                <div className="link link-hover footer-subtitle">
                    <FaPhoneAlt className="footer_icon"/>
                    <Link href="tel:+50254179290">54179290</Link>
                    <Link href="tel:+50277201660">PBX:+502 7720 1660</Link>
                </div>
            </nav>
            <nav className='md:flex-col flex-col-reverse flex gap-4 justify-start items-start '>
                <Link href='https://b24-f1mrz5.bitrix24.site/crm_form_ahckh/' className='border-2 border-primary bg-white btn font-montserrat text-primary hover:bg-primary/80 hover:text-white outline-none'>
                Contactános
                </Link>
                <div className='flex flex-col gap-4'>
                    <h6 className="footer-principaltitle">Siguenos</h6>
                    <div className="grid grid-flow-col gap-4">
                    <a href='https://www.instagram.com/jab_industries/'
                    className='cursor-pointer'>
                        <FaInstagram className="footer_socialicon"/>
                    </a>
                    <a href='https://www.facebook.com/industriasjab'
                    className='cursor-pointer'>
                        <FaFacebook className="footer_socialicon"/>
                    </a>
                    <a href='https://www.linkedin.com/company/jab-industries-gt/about/?viewAsMember=true'
                    className='cursor-pointer'>
                        <FaLinkedin className="footer_socialicon"/>
                    </a>
                </div>
                </div>
            </nav>
        </div>
        <div className="footer-bottom bg-white p-4 border-t-2 border-gray-200">
            <p className="text-black text-center font-league-spartan">© JAB INDUSTRIES</p>
        </div>
    </footer>
  )
}

export default Footer
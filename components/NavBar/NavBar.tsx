"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import * as motion from 'motion/react-client'



const menuItems = [
  {
    label: 'Inicio',
    link: '/',
  },
  {
    label: 'Quiénes somos',
    link: '/quienes-somos',
  },
  {
    label: 'Equipos de tostaduría',
    link: '',
    submenu: [
      { label: 'Trilla', link: '/trilla' },
      { label: 'Molino', link: '/molino' },
      { label: 'Tostador', link: '/tostador' },
    ],
  },
  {
    label: 'Beneficios de café',
    link: '',
    submenu: [
      { label: 'Café maduro', link: '/beneficios-maduro' },
      { label: 'Café seco', link: '/beneficios-seco' },
    ],
  },
];

const itemVariants = {
  open: {
      opacity: 1,
      x: 0,
      transition: {
          opacity: { duration: 0.5 },
          x: { stiffness: 300, velocity: -50 },
      },
  },
  closed: {
      opacity: 0,
      x: -250,
      transition: {
          opacity: { duration: 0.5 },
          x: { stiffness: 300, velocity: -50 },
      },
  },
};

interface MenuItem {
  secondary?: boolean;
}


const NavBar = ({ secondary }: MenuItem) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const toggleSubmenu = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`nav_container`}>
      <div className={`nav_subcontainer ${scrolled || secondary ? 'bg-white' : 'bg-transparent'}`}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link className="flex-shrink-0" href="/">
            <img src={scrolled || secondary ? '/assets/images/logos/logo_v2.png' : '/assets/images/logos/logo_v1.png'}
            alt="Logo" 
            className="h-16 w-auto" />
          </Link>
          {/* Menu Items */}
          <div className="hidden md:flex gap-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => item.submenu && setOpenSubMenu(index)}
              >
                <Link
                  href={item.link}
                  className={`menu_item  hover:bg-white/400 ${scrolled || secondary ? 'text-black' : 'text-white'} transition duration-300`}
                  onClick={() => item.submenu && toggleSubmenu(index)}
                >
                  {item.label}
                </Link>
                {item.submenu && openSubMenu === index && (
                  <div
                    className={`submenu_container ${
                      openSubMenu === index ? 'block' : 'hidden'
                    }`}
                    onMouseLeave={() => setOpenSubMenu(null)}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        href={subItem.link}
                        key={subIndex}
                        className="menu_item hover:bg-primary/20 transition duration-300 text-start"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <Link href="/contacto" className={`button_primary md:block hidden ${scrolled || secondary ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
            Contacto
          </Link>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {
                openMenu ? 
                <IoClose className={`h-6 w-6 ${scrolled || secondary ? 'text-black' : 'text-white'}`} />:
                <HiMenuAlt3 className={`h-6 w-6 ${scrolled || secondary ? 'text-black' : 'text-white'}`} />
              }
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={openMenu ? 'open' : 'closed'}
          variants={itemVariants}
          className={`mobile_nav ${openMenu ? '' : 'absolute z-0'} `}>
          {menuItems.map((item, index) => (
            <div key={index} className="">
              <Link
                href={item.link}
                className="menu_item py-2 flex gap-2 justify-start items-center"
                onClick={() => item.submenu && toggleSubmenu(index)}
              >
                {item.label} {item.submenu && <IoIosArrowDown className='text-black'/>}
              </Link>
              {item.submenu && openSubMenu === index && (
                <div className="pl-4">
                  {item.submenu.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.link}
                      className="menu_item block py-2 "
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </motion.div>
    </nav>
  );
};

export default NavBar;
import React from 'react'
import Link from 'next/link'

interface ButtonSecondaryProps {
    label: string
    link: string
}

const ButtonSecondary = ({ label, link }: ButtonSecondaryProps) => {
  return (
    <Link
        href={link}
        className="text-center btn bg-transparent text-white font-league-spartan md:text-lg text-sm border-2 border-white px-8 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300"
    >
      {label}
    </Link>
  )
}

export default ButtonSecondary
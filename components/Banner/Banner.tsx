import React from 'react'
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary'
import Image from 'next/image'
import TitlePrincipal from '../TitlePrincipal/TitlePrincipal'
import ImagesSlider from '../ImagesSlider/ImagesSlider'


interface BannerProps {
    image?: string
    title: string
    subtitle?: string
    textButton?: string
    link?: string
    color?: string
    main?: boolean
    imageList?: string[]
    video?: string
}

const Banner = ({ image, title, subtitle, textButton, link, color, main, imageList, video }: BannerProps) => {
  return (
    <div className={`banner_container ${color} ${main ? 'h-[600px]' : 'h-[400px]'}`}>
        {
            image || imageList || video && (
                <div className="absolute w-full h-full bg-black/60 z-10"></div>
            )
        }
        <div className="banner_info">
            <TitlePrincipal title={title} color='text-white' main={main} />
            <p className="banner_subtitle">{subtitle}</p>
            {
                textButton && link && (
                    <ButtonSecondary label={textButton} link={link} />
                )
            }
        </div>
        {
            image && (
                <Image src={image} alt={title} className="banner_bg" fill />
            )
        }
        {
            imageList && (
                <ImagesSlider imageList={imageList} />
            )
        }
        {
            video && (
                <video
                autoPlay 
                playsInline
                loop 
                muted
                 className="banner_bg">
                    <source src={video} type="video/mp4" />
                </video>
            )
        }
    </div>
  )
}

export default Banner
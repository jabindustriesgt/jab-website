import React from 'react'

interface TitlePrincipalProps {
    title: string
    color?: string
    main?: boolean
}

const TitlePrincipal = ({ title, color, main }: TitlePrincipalProps) => {
    return main ? (
      <h1 className={`banner_title ${color}`}>{title}</h1>
    ) : (
      <h2 className={`banner_title ${color}`}>{title}</h2>
    );
}

export default TitlePrincipal
import type { Metadata } from "next";
import "@/styles/globals.css"
import "@/public/assets/fonts/fonts.css"
import Script from "next/script";



export const metadata: Metadata = {
  title: {
    default: "JAB INDUSTRIES",
    template: "%s | JAB INDUSTRIES",
  },
  description: "Descubre la mejor maquinaria para procesamiento de café. Beneficio húmedo, beneficio seco, tostaduría ¡Potencia tu cafe hoy!",
  twitter: {
    card: "summary_large_image",
  },
  keywords: [
    "máquina descerezadora de café", 
    "máquina industrial café", 
    "maquinaria para el procesamiento de café", 
    "maquinaria para la producción de café", 
    "maquinaria para procesar café", 
    "máquinas para procesar café precios", 
    "máquinas que se utilizan para procesar el café", 
    "máquina desmucilaginadora de café", 
    "máquina despulpadora de café", 
    "máquina despulpadora de café precio", 
    "máquina empacadora de café molido", 
    "máquina de tostar café", 
    "máquina para despulpar café",
     "máquina para lavar café", 
     "máquina para moler café tostado", 
     "máquina de tostar café industrial", 
     "máquina de tueste de café", 
     "máquina industrial para tostar café", 
     "máquina para tostar café", 
    "máquina para tostar café industrial", 
    "máquina tostadora de café industrial", 
    "máquina para trillar café", 
    "máquina trilladora de café", 
    "café arábigo lavado", 
    "café cosecha y molienda", 
    "café despulpado", 
    "café en producción", 
    "café lavado", 
    "café lavado y natural", 
    "café natural proceso", 
    "café proceso", 
    "café proceso lavado", 
    "café proceso natural", 
    "café secado", 
    "café secado natural",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
      <Script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=AW-16787526392"
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16787526392');
          `}
        </Script>
        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2455791927930879');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2455791927930879&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

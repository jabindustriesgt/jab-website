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
      <body>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16787526392"></Script>
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-16787526392');
            `}
          </Script>
        {children}
      </body>
    </html>
  );
}

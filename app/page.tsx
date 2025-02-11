import NavBar from "@/components/NavBar/NavBar";
import Banner from "@/components/Banner/Banner";
import InfoSquare from "@/components/InfoSquare/InfoSquare";
import TitlePrincipal from "@/components/TitlePrincipal/TitlePrincipal";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maquinaria para procesamiento de café en Guatemala",
  description: "Innovando con calidad para una industria sostenible",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/`),
  openGraph: {
    title: "Maquinaria para procesamiento de café en Guatemala",
    description: "Innovando con calidad para una industria sostenible",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    type: "website",
    images: [
      {
        url: "/assets/images/banners/banner1.png",
        width: 1200,
        height: 630,
        alt: "Maquinaria para procesamiento de café en Guatemala",
      },
    ],
  },
};

export default function Home() {

  const images = [
    "/assets/images/banners/banner1.png",
    "/assets/images/banners/banner3.png",
    "/assets/images/banners/banner5.png",
    "/assets/images/banners/banner6.png",
  ]

  return (
    <main className="page bg-black">
      <NavBar/>
      <Banner
        imageList={images}
        title="Maquinaria para procesamiento de café en Guatemala"
        subtitle="Innovando con calidad para una industria sostenible"
        textButton="Conócenos"
        link={'/quienes-somos'}
        main
      />

      <div className="bg-primary main_padding flex flex-col items-center gap-10">
        <TitlePrincipal title="Tostaduría de café" color="text-white"/>
        <section className="lg:flex-row flex-col flex justify-between gap-10">
          <InfoSquare
            title="Trilla"
            description="La trilladora JAB es la herramienta esencial para iniciar su aventura en la tostaduría de café. Esta maquinaria especializada transforma su café pergamino y/o natural a café oro con eficiencia. Su innovadora cuchilla graduable ofrece flexibilidad única, adaptándose a las necesidades específicas de su producción."
            image="/assets/images/products/trilla_banner.png"
            btnText="Ver más"
            url="/trilla"
          />
          <InfoSquare
            title="Tostador"
            description="Nuestro tostador maximiza el sabor del café, ofreciendo controles fáciles de usar y un software avanzado para un tueste preciso y recetas únicas. Fabricado con materiales duraderos, es versátil, exacto y constante, con capacidades de 1 kg a 500 libras por batch. ¡Ideal para cualquier proyecto!"
            image="/assets/images/products/tostador_banner.png"
            btnText="Ver más"
            url="/tostador"
          />
          <InfoSquare
            title="Molino"
            description="El favorito de los expertos en Guatemala, este molino de acero inoxidable garantiza uniformidad, precisión y consistencia. Con 20 ajustes de molienda, es ideal para productores, tostadurías y cafeterías que buscan calidad y versatilidad."
            image="/assets/images/products/molino_banner.png"
            btnText="Ver más"
            url="/molino"
          />
        </section>
      </div>

      <Banner
        title="Maquinaria para Procesamiento de Café y Granos en Guatemala"
        subtitle="Fabricación y reparación de maquinaria para procesamiento de café y otros granos en Guatemala. Somos líderes en soluciones personalizadas para la industria cafetera, abarcando desde la selección y limpieza de granos hasta el tostado, molido y envasado final. Diseñamos, fabricamos y reparamos equipos especializados que garantizan la máxima eficiencia en cada etapa del proceso."
        color="bg-secondary"
      />
      <section className="bg-white main_padding flex flex-col items-center gap-10">
        <div className="flex flex-col gap-4 xl:w-1/2 md:w-2/3">
          <TitlePrincipal title="Beneficios de café" color="text-primary"/>
          <span className="text-primary md:text-lg text-sm font-montserrat text-center italic">
            Equipos esenciales para el procesamiento húmedo y seco
          </span>
          <p className="text-primary text-center font-montserrat font-light md:text-lg text-sm">
          En nuestra sección de beneficios de café, encontrarás una amplia gama de equipos diseñados para optimizar cada etapa del proceso de producción.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <InfoSquare
            title="Beneficio maduro"
            description="Consulta por nuestros módulos ecológicos especializados para el procesamiento de café maduro. Además de equipos individuales como despulpadoras, lavadoras / desmucilaginadores, cribas, tanques de fermentación con instrumentación y bodegas de almacenaje, ideales para cuidar y preservar la calidad de tus granos desde el inicio. Recuerda que puedes agilizar tu producción por medio de nuestras secadoras rotativas y estáticas. 
            Cada máquina está diseñada para garantizar un procesamiento eficiente y un tratamiento adecuado de los granos de café en su estado húmedo."
            btnText="Ver más"
            url="/beneficios-maduro"
          />
          <InfoSquare
            title="Beneficio Seco"
            description="Para esta etapa clave, ofrecemos una selección de máquinas de alto rendimiento, incluyendo módulos de beneficio seco, trilladoras y clasificadoras. Estos equipos aseguran que tus granos alcancen los estándares más altos de calidad, listos para el mercado o la fase de tostado.
            Nuestros equipos para el beneficio de café en Guatemala están diseñados para satisfacer las necesidades de productores y empresas del sector, ayudándote a obtener resultados excepcionales en cada lote."
            btnText="Ver más"
            url="/beneficios-seco"
          />
        </div>
      </section>
      <section className="bg-white w-full">
        <div className="main_padding rounded-t-3xl bg-tertiary w-full flex md:flex-row flex-col items-center gap-10 animate-fade-in-up"
        >
          <div className="flex flex-col md:items-start items-center gap-4 w-full flex-1">
            <TitlePrincipal title="Equipos Avanzados" color="text-primary"/>
            <span className="text-primary md:text-lg text-sm font-montserrat text-center italic">
              Equipos especializados para cada etapa del proceso
            </span>
          </div>
          <div className="flex-1 w-full">
            <video className="w-full h-96 object-cover rounded-md hover:scale-105 transition-transform duration-500 md:flex hidden" 
            autoPlay 
            playsInline
            loop 
            muted
            >
              <source src="/assets/videos/inicio2.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
            <video className="w-full h-96 object-cover rounded-md hover:scale-105 transition-transform duration-500 md:hidden flex" 
            autoPlay 
            playsInline
            loop 
            muted
            >
              <source src="/assets/videos/inicio.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <Banner
        image="/assets/images/banners/banner3.png"
        title="Tu Éxito es Nuestro Compromiso"
        subtitle="Nuestro equipo de expertos está aquí para brindarte la asesoría personalizada que necesitas. Si tienes preguntas o requieres más información sobre alguna máquina, no dudes en contactarnos. ¡Estamos listos para ayudarte a alcanzar tus objetivos cafetaleros!"
        textButton="Contactános"
        link={'/contacto'}
      />
      <Footer/>
    </main>
  );
}

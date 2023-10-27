import ISection from "@/components/individuals/ISection";
import JamesBg from "@/assets/James-bg.jpg";
import homeImg from "@/assets/home1.jpg";
import IHeroHome from "@/components/individuals/iHome/IHeroHome";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import ITestimonials from "@/components/individuals/iHome/ITestimonials";
import { RxGear } from "react-icons/rx";
import IFormContact from "@/components/individuals/IFormContact";
import contactImg from "@/assets/contact2.jpg";
import Divider from "@/components/individuals/IDivider";
import ImgContent from "@/components/individuals/ImgContent";

import TitleContent from "@/components/individuals/TitleContent";
import { styles } from "@/styles";
import { useEffect } from "react";

const IHome = ({ language }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const james = {
    en: {
      title1: "Meet The Founder",
      title2: "James Baker, CPA",
      p1: "James is the head of different companies around the US, serving international Corporations and international entrepreneurs with different services and companies. James allied with silent investors to create EB-3 Workforce solutions, a company that connects employers which are facing a chronic shortage of unskilled workers with immigrant employees willing to apply for a US Green Card through the EB-3 Visa program.",
    },
    es: {
      title1: "Conozca al fundador",
      title2: "James Baker, CPA",
      p1: "James dirige diferentes empresas en EE.UU. que prestan servicios a corporaciones y empresarios internacionales. James se alió con inversores silenciosos para crear EB-3 Workforce solutions, una empresa que pone en contacto a empresarios que se enfrentan a una escasez crónica de trabajadores no cualificados con empleados inmigrantes dispuestos a solicitar una tarjeta verde estadounidense a través del programa de visados EB-3.",
    },
    por: {
      title1: "Conheça o fundador",
      title2: "James Baker, CPA",
      p1: "James está à frente de diferentes empresas nos EUA, servindo corporações internacionais e empresários internacionais com diferentes serviços e empresas. James aliou-se a investidores silenciosos para criar a EB-3 Workforce Solutions, uma empresa que liga empregadores que enfrentam uma escassez crónica de trabalhadores não qualificados a trabalhadores imigrantes dispostos a candidatar-se a um Green Card dos EUA através do programa de vistos EB-3.",
    },
  };
  const jamesContent = james[language];

  const dividerStart = {
    en: {
      h1: "Start Your Journey!",
      p: "Call Us",
    },
    es: {
      h1: "Comience su viaje",
      p: "Llámanos",
    },
    por: {
      h1: "Comece a sua viagem!",
      p: "Contactar-nos",
    },
  };
  const dividerStartContent = dividerStart[language];

  const want = {
    en: {
      title1: "Contact Us",
      title2: "Want to Know More?",
      p1: "If you find yourself in a situation where you are seeking a significant opportunity for a better life and career in the United States, or if you are facing challenges in navigating the complex immigration process and associated costs, then we have the perfect solution for you.",
      p2: "Introducing the EB-3 Visa Program, a long-term immigration solution specifically designed for individuals like yourself. This employment-based Green Card option is crafted to address your immigration goals and provide the pathway you need to the United States.",
    },
    es: {
      title1: "Contacte con nosotros",
      title2: "¿Quiere saber más?",
      p1: "Si usted se encuentra en una situación en la que está buscando una oportunidad significativa para una vida mejor y una carrera en los Estados Unidos, o si se enfrentan a desafíos en la navegación por el complejo proceso de inmigración y los costos asociados, entonces tenemos la solución perfecta para usted",
      p2: "Presentamos el programa de visados EB-3, una solución de inmigración a largo plazo diseñada específicamente para personas como usted. Esta opción de Tarjeta Verde basada en el empleo está diseñada para abordar sus objetivos de inmigración y proporcionarle el camino que necesita hacia los Estados Unidos.",
    },
    por: {
      title1: "Contactar-nos",
      title2: "Quer saber mais?",
      p1: "Se se encontrar numa situação em que procura uma oportunidade significativa para uma vida e uma carreira melhores nos Estados Unidos, ou se estiver a enfrentar desafios para navegar no complexo processo de imigração e nos custos associados, então temos a solução perfeita para si.",
      p2: "Apresentamos o Programa de Vistos EB-3, uma solução de imigração a longo prazo concebida especificamente para pessoas como você. Esta opção de Green Card baseada no emprego foi concebida para responder aos seus objectivos de imigração e proporcionar-lhe o caminho que necessita para os Estados Unidos.",
    },
  };
  const wantContent = want[language];

  return (
    <>
      <IHeroHome language={language} />
      <ISection>
        {/* James */}

        <div name="teach me" className="pt-20" />

        <ImgContent
          img={JamesBg}
          title1={jamesContent.title1}
          title2={jamesContent.title2}
        >
          <p className={`${styles.sectionText}`}>{jamesContent.p1}</p>
        </ImgContent>

        {/* Divider committed workers */}
        <div className="flex items-center justify-center gap-6 md:gap-40 p-6 flex-col md:flex-row bg-gray-100 w-full ">
          <h1 className="text-4xl font-bold">{dividerStartContent.h1}</h1>

          <a href="tel:+573055641311">
            <div className="flex flex-col items-center justify-center gap-4 text-xl font-bold hover:scale-110 duration-500">
              <div className="flex items-center justify-center gap-4">
                <div className="bg-white p-3 rounded-full  ">
                  <BiPhoneCall className="text-4xl text-primary" />
                </div>
                <p>{dividerStartContent.p}</p>
              </div>
              <p>(305) 564-1311</p>
            </div>
          </a>
          <a href="mailto:recruiter@eb3wfs.com">
            <div className="flex flex-col items-center justify-center gap-4 font-bold text-xl hover:scale-110 duration-500">
              <div className="flex items-center justify-center gap-4">
                <div className="bg-white p-3 rounded-full ">
                  <AiOutlineMail className="text-primary text-4xl" />
                </div>
                <p>Email</p>
              </div>
              <p>recruiter@eb3wfs.com</p>
            </div>
          </a>
        </div>

        {/* Want to know more */}

        <ImgContent
          img={homeImg}
          title1={wantContent.title1}
          title2={wantContent.title2}
        >
          <p className={`${styles.sectionText} mb-6`}>{wantContent.p1}</p>
          <p className={`${styles.sectionText}`}>{wantContent.p2}</p>
        </ImgContent>

        <Divider language={language} />

        {/* EB-3 Worfkforce Solutions */}
        <TitleContent title="EB-3 Workfoce Solutions">
          <p className={`${styles.sectionTitleText}`}>
            At EB-3 Workforce Solutions, we understand the significance of
            pursuing a better life and career opportunities in the United
            States. That's why we provide a unique solution to your immigration
            dreams - the EB-3 Visa program. Our dedicated team is committed to
            assisting interested individuals who are eager to contribute
            positively to the U.S. With a meticulous application process and a
            network of top-notch immigration experts, we ensure that you have
            the best support available for your EB-3 Visa journey. Say goodbye
            to the uncertainties of the immigration process and hello to a
            brighter future with EB-3 Workforce Solutions.
          </p>
        </TitleContent>

        {/* Looking to Start
your American Dream?*/}
        <ImgContent
          img={contactImg}
          title2="Looking to Start
          your American Dream?"
        >
          <p className={`${styles.sectionText}`}>
            Discover the pathway to your American dream with our company! Say
            goodbye to the uncertainty of the immigration journey and hello to a
            dedicated team of professionals eager to assist you. Our partners
            are carefully selected to ensure a smooth process and unwavering
            commitment to your immigration goals. Trust us to guide you on the
            path to the American Dream.
          </p>
        </ImgContent>

        <IFormContact color="primary" />

        <Divider language={language} />
      </ISection>
    </>
  );
};

export default IHome;

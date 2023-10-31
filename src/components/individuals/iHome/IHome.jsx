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
    fr: {
      title1: "Rencontre avec le fondateur",
      title2: "James Baker, CPA",
      p1: "James est à la tête de plusieurs entreprises aux États-Unis, au service de sociétés internationales et d'entrepreneurs internationaux avec différents services et entreprises. James s'est allié à des investisseurs silencieux pour créer EB-3 Workforce solutions, une société qui met en relation des employeurs confrontés à une pénurie chronique de travailleurs non qualifiés avec des employés immigrés désireux de demander une carte verte américaine dans le cadre du programme de visa EB-3.",
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
    fr: {
      h1: "Commencez votre voyage !",
      p: "Appelez-nous",
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
    fr: {
      title1: "Nous contacter",
      title2: "Vous voulez en savoir plus ?",
      p1: "Si vous vous trouvez dans une situation où vous cherchez une opportunité significative pour une vie et une carrière meilleures aux États-Unis, ou si vous avez des difficultés à naviguer dans le processus d'immigration complexe et les coûts associés, alors nous avons la solution parfaite pour vous.",
      p2: "Nous vous présentons le programme de visa EB-3, une solution d'immigration à long terme conçue spécialement pour des personnes comme vous. Cette carte verte basée sur l'emploi est conçue pour répondre à vos objectifs en matière d'immigration et vous offrir la voie d'accès aux États-Unis dont vous avez besoin.",
    },
  };
  const wantContent = want[language];

  const eb3 = {
    en: {
      p1: "At EB-3 Workforce Solutions, we understand the significance of pursuing a better life and career opportunities in the United States. That's why we provide a unique solution to your immigration dreams - the EB-3 Visa program. Our dedicated team is committed to assisting interested individuals who are eager to contribute positively to the U.S. With a meticulous application process and a network of top-notch immigration experts, we ensure that you have the best support available for your EB-3 Visa journey. Say goodbye to the uncertainties of the immigration process and hello to a brighter future with EB-3 Workforce Solutions.",
    },
    es: {
      p1: "En EB-3 Workforce Solutions, entendemos la importancia de buscar una vida mejor y oportunidades de carrera en los Estados Unidos. Es por eso que ofrecemos una solución única a sus sueños de inmigración - el programa de Visa EB-3. Nuestro equipo dedicado está comprometido a ayudar a las personas interesadas que están deseosas de contribuir positivamente a los EE.UU. Con un meticuloso proceso de solicitud y una red de expertos en inmigración de primera categoría, nos aseguramos de que usted tenga el mejor apoyo disponible para su viaje de Visa EB-3. Diga adiós a las incertidumbres del proceso de inmigración y hola a un futuro más brillante con EB-3 Workforce Solutions.",
    },
    por: {
      p1: "Na EB-3 Workforce Solutions, compreendemos a importância de procurar uma vida melhor e oportunidades de carreira nos Estados Unidos. É por isso que oferecemos uma solução única para os seus sonhos de imigração - o programa de vistos EB-3. A nossa equipa dedicada está empenhada em ajudar os indivíduos interessados que estão ansiosos por contribuir positivamente para os EUA. Com um processo de candidatura meticuloso e uma rede de especialistas de imigração de topo, garantimos que tem o melhor apoio disponível para a sua viagem com o Visto EB-3. Diga adeus às incertezas do processo de imigração e olá a um futuro mais brilhante com a EB-3 Workforce Solutions.",
    },
    fr: {
      p1: "Chez EB-3 Workforce Solutions, nous comprenons l'importance de la recherche d'une vie meilleure et d'opportunités de carrière aux États-Unis. C'est pourquoi nous vous proposons une solution unique pour réaliser vos rêves d'immigration : le programme de visa EB-3. Notre équipe dévouée s'engage à aider les personnes intéressées qui souhaitent apporter une contribution positive aux États-Unis. Grâce à un processus de demande méticuleux et à un réseau d'experts en immigration de premier ordre, nous nous assurons que vous bénéficiez du meilleur soutien possible pour votre voyage vers le visa EB-3. Dites au revoir aux incertitudes du processus d'immigration et bonjour à un avenir meilleur avec EB-3 Workforce Solutions.",
    },
  };
  const eb3Content = eb3[language];

  const looking = {
    en: {
      p1: "Discover the pathway to your American dream with our company! Say goodbye to the uncertainty of the immigration journey and hello to a dedicated team of professionals eager to assist you. Our partners are carefully selected to ensure a smooth process and unwavering commitment to your immigration goals. Trust us to guide you on the path to the American Dream.",
    },
    es: {
      p1: "¡Descubra el camino hacia su sueño americano con nuestra empresa! Diga adiós a la incertidumbre del viaje de la inmigración y hola a un equipo dedicado de profesionales deseosos de ayudarle. Nuestros socios son cuidadosamente seleccionados para garantizar un proceso fluido y un compromiso inquebrantable con sus objetivos de inmigración. Confíe en nosotros para guiarle en el camino hacia el sueño americano.",
    },
    por: {
      p1: "Descubra o caminho para o seu sonho americano com a nossa empresa! Diga adeus à incerteza da viagem de imigração e olá a uma equipa dedicada de profissionais ansiosos por o ajudar. Os nossos parceiros são cuidadosamente seleccionados para garantir um processo tranquilo e um compromisso inabalável com os seus objectivos de imigração. Confie em nós para o guiarmos no caminho para o sonho americano.",
    },
    fr: {
      p1: "Découvrez la voie de votre rêve américain avec notre société ! Dites adieu à l'incertitude du voyage d'immigration et bonjour à une équipe dévouée de professionnels désireux de vous aider. Nos partenaires sont soigneusement sélectionnés pour garantir un processus sans heurts et un engagement sans faille à l'égard de vos objectifs d'immigration. Faites-nous confiance pour vous guider sur le chemin du rêve américain.",
    },
  };
  const lookingContent = looking[language];

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
          <p className={`${styles.sectionTitleText}`}>{eb3Content.p1}</p>
        </TitleContent>

        {/* Looking to Start
your American Dream?*/}
        <ImgContent
          img={contactImg}
          title2="Looking to Start
          your American Dream?"
        >
          <p className={`${styles.sectionText}`}>{lookingContent.p1}</p>
        </ImgContent>

        <IFormContact color="primary" language={language} />

        <Divider language={language} />
      </ISection>
    </>
  );
};

export default IHome;

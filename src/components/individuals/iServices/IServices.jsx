import { useEffect } from "react";
import ISection from "@/components/individuals/ISection";

import IFormContact from "@/components/individuals/IFormContact";

import IServicesCard from "@/components/individuals/iServices/IServicesCard";

import IHeroServices from "@/components/individuals/iServices/IHeroServices";
import jobImg from "@/assets/job.jpg";

import { GoDotFill } from "react-icons/go";

import coWorkersImg from "@/assets/coworkers.jpg";
import especialistImg from "@/assets/especialist.jpg";
import TitleContent from "@/components/individuals/TitleContent";
import Divider from "@/components/individuals/IDivider";
import ImgContent from "@/components/individuals/ImgContent";
import { styles } from "@/styles";

import FourIcons from "@/components/individuals/iServices/FourIcons";

import IAdjustmentProcess from "@/components/individuals/iServices/IAdjustmentProcess";
import IConsularProcess from "@/components/individuals/iServices/IConsularProcess";

const IServices = ({ language }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const eb3 = {
    en: {
      title1: "EB-3 Unskilled Visa",
      title2: "Consular Processing Typical Timeline",
      title3: "Adjustment of Status Typical Timeline",
    },
    es: {
      title1: "EB-3 Visado no cualificado",
      title2: "Plazos habituales de la tramitación consular",
      title3: "Plazos habituales para el ajuste de estatus",
    },
    por: {
      title1: "Visto EB-3 não qualificado",
      title2: "Cronograma típico do processamento consular",
      title3: "Calendário típico de ajustamento do estatuto",
    },
  };
  const eb3Content = eb3[language];

  const longstanding = {
    en: {
      title1: "Longstanding Success",
      p1: 'The EB-3 "Other Workers" Visa, created by the US Government, provides an opportunity for foreign nationals to work in positions experiencing chronic labor shortages. With a yearly allocation of 40,000 visas, the EB-3 program is a valuable solution for many. However, the most challenging aspect of the process is finding an employer who is willing and able to sponsor. This is where EB-3 Workforce Solutions comes in. We partner with qualified employers, ensuring a smooth and successful sponsorship process for all parties involved.',
      p2: 'The EB-3 "Other Workers" Visa is a great way to become a permanent resident of the United States. You can get this visa by changing your status or by going through consular processing in your home country. If you qualify, so do your spouse and any unmarried children under 21.',
    },
    es: {
      title1: "Éxito duradero",
      p1: 'El visado EB-3 para "otros trabajadores", creado por el Gobierno de EE.UU., ofrece a los extranjeros la oportunidad de trabajar en puestos con escasez crónica de mano de obra. Con una asignación anual de 40.000 visados, el programa EB-3 es una solución valiosa para muchos. Sin embargo, el aspecto más difícil del proceso es encontrar un empleador que esté dispuesto y sea capaz de patrocinar. Aquí es donde entra en juego EB-3 Workforce Solutions. Nos asociamos con empleadores calificados, asegurando un proceso de patrocinio sin problemas y exitoso para todas las partes involucradas.',
      p2: 'La visa EB-3 "Otros Trabajadores" es una excelente manera de convertirse en residente permanente de los Estados Unidos. Puede obtener este visado cambiando su estatus o realizando un trámite consular en su país de origen. Si usted cumple los requisitos, también lo harán su cónyuge y sus hijos solteros menores de 21 años.',
    },
    por: {
      title1: "Sucesso de longa data",
      p1: 'O Visto EB-3 "Outros Trabalhadores", criado pelo Governo dos EUA, oferece uma oportunidade para os cidadãos estrangeiros trabalharem em posições com escassez crónica de mão de obra. Com uma atribuição anual de 40.000 vistos, o programa EB-3 é uma solução valiosa para muitos. No entanto, o aspeto mais difícil do processo é encontrar um empregador que esteja disposto e seja capaz de o patrocinar. É aqui que entra a EB-3 Workforce Solutions. Estabelecemos parcerias com empregadores qualificados, garantindo um processo de patrocínio tranquilo e bem-sucedido para todas as partes envolvidas.',
      p2: 'O Visto EB-3 "Outros Trabalhadores" é uma óptima maneira de se tornar um residente permanente dos Estados Unidos. Pode obter este visto alterando o seu estatuto ou passando pelo processamento consular no seu país de origem. Se se qualificar, o mesmo acontece com o seu cônjuge e quaisquer filhos solteiros com menos de 21 anos.',
    },
  };
  const longstandingContent = longstanding[language];

  const who = {
    en: {
      title1: "Who is eligible for EB-3?",
      dot1: "No degree requirements needed",
      dot2: "No prior work experience needed",
      dot3: "Can’t be overqualified",
      dot4: "Need an employer sponsor",
      dot5: "You can adjust your visa status within the U.S.",
      dot6: "You can apply from your home country",
    },
    es: {
      title1: "¿Quién puede optar al EB-3?",
      dot1: "No se exige titulación",
      dot2: "No se requiere experiencia laboral previa",
      dot3: "No puede estar sobrecualificado",
      dot4: "Necesita un empleador patrocinador",
      dot5: "Puede ajustar su estatus de visado dentro de EE.UU.",
      dot6: "Puede solicitarlo desde su país de origen",
    },
    por: {
      title1: "Quem é elegível para o EB-3?",
      dot1: "Não são necessários requisitos de licenciatura",
      dot2: "Não é necessária experiência profissional anterior",
      dot3: "Não pode ter qualificações excessivas",
      dot4: "Necessita de um empregador patrocinador",
      dot5: "Pode ajustar o seu estatuto de visto dentro dos USA",
      dot6: "Pode candidatar-se a partir do seu país de origem",
    },
  };
  const whoContent = who[language];

  const why = {
    en: {
      title1: "Why does this process work?",
      p1: "Employers are having a harder time than ever before finding people to fill their low-skilled jobs. Industries like cleaning, food service, packing, and storage have been hit the hardest. Instead of closing their doors, many businesses have tried to find creative ways to find people to work for them. Many employers have found it helpful to sponsor potential immigrants who are willing to fill open positions with the help of an EB-3 visa for unskilled workers.",
      p2: 'The Immigration Act of 1990 set up a program called "Employment-Based Visas," which lets US businesses sponsor foreign workers who want to work and are qualified to do so. There are five types of EB visas. The first two require skilled work and a lot of schooling, while part of the third type (the EB-3) is for people who can do unskilled work for their future employers.',
      p3: 'The EB-3 "Other Worker" Visa process leads directly to permanent residency in the U.S., and the terms are better than most of the other ways to get there.',
    },
    es: {
      title1: "¿Por qué funciona este proceso?",
      p1: "Los empresarios tienen más dificultades que nunca para encontrar personas que cubran sus puestos de trabajo poco cualificados. Industrias como la limpieza, la restauración, el embalaje y el almacenamiento son las más afectadas. En lugar de cerrar sus puertas, muchas empresas han intentado encontrar formas creativas de encontrar gente que trabaje para ellas. A muchos empresarios les ha resultado útil patrocinar a inmigrantes potenciales dispuestos a cubrir puestos vacantes con la ayuda de un visado EB-3 para trabajadores no cualificados.",
      p2: 'La Ley de Inmigración de 1990 estableció un programa llamado "visados basados en el empleo", que permite a las empresas estadounidenses patrocinar a trabajadores extranjeros que quieran trabajar y estén cualificados para ello. Hay cinco tipos de visados EB. Los dos primeros exigen un trabajo cualificado y mucha formación, mientras que parte del tercer tipo (el EB-3) es para personas que pueden realizar trabajos no cualificados para sus futuros empleadores.',
      p3: 'El proceso del visado EB-3 "Otros trabajadores" conduce directamente a la residencia permanente en EE.UU., y las condiciones son mejores que la mayoría de las otras formas de conseguirlo.',
    },
    por: {
      title1: "Porque é que este processo funciona?",
      p1: "Os empregadores estão a ter mais dificuldade do que nunca em encontrar pessoas para preencher os seus empregos pouco qualificados. Sectores como as limpezas, a restauração, a embalagem e o armazenamento foram os mais afectados. Em vez de fecharem as portas, muitas empresas tentaram encontrar formas criativas de encontrar pessoas para trabalharem para elas. Muitos empregadores consideraram útil patrocinar potenciais imigrantes que estão dispostos a preencher vagas abertas com a ajuda de um visto EB-3 para trabalhadores não qualificados.",
      p2: 'A Lei da Imigração de 1990 criou um programa chamado "Employment-Based Visas", que permite às empresas americanas patrocinar trabalhadores estrangeiros que queiram trabalhar e sejam qualificados para o fazer. Existem cinco tipos de vistos EB. Os dois primeiros requerem trabalho qualificado e muita escolaridade, enquanto parte do terceiro tipo (o EB-3) é para pessoas que podem fazer trabalho não qualificado para os seus futuros empregadores.',
      p3: 'O processo do visto EB-3 "Other Worker" conduz diretamente à residência permanente nos EUA, e as condições são melhores do que a maioria das outras formas de lá chegar.',
    },
  };
  const whyContent = why[language];

  const what = {
    en: {
      title1: "What We Do",
      p1: "Experience a seamless process in securing EB-3 visa workers with our comprehensive support. From the very beginning, our team is dedicated to finding and vetting potential candidates, and preparing your company for sponsorship. And we don't stop there - even after their Green Card is approved, we continue to provide assistance throughout the transition to work and ongoing employment. Partner with us and experience the peace of mind that comes with having experts by your side every step of the way.",
    },
    es: {
      title1: "¿Qué hacemos?",
      p1: "Experimente un proceso fluido en la obtención de trabajadores con visado EB-3 con nuestro apoyo integral. Desde el principio, nuestro equipo se dedica a encontrar y examinar candidatos potenciales, y a preparar a su empresa para el patrocinio. Y no nos detenemos ahí - incluso después de que se apruebe su Tarjeta Verde, continuamos proporcionando asistencia a lo largo de la transición al trabajo y el empleo en curso. Asóciese con nosotros y experimente la tranquilidad de tener expertos a su lado en cada paso del camino.",
    },
    por: {
      title1: "O que fazemos",
      p1: "Experimente um processo sem falhas na obtenção de trabalhadores com o visto EB-3 com o nosso apoio abrangente. Desde o início, a nossa equipa dedica-se a encontrar e examinar potenciais candidatos e a preparar a sua empresa para o patrocínio. E não paramos por aí - mesmo após a aprovação do Green Card, continuamos a prestar assistência durante a transição para o trabalho e o emprego contínuo. Seja nosso parceiro e experimente a paz de espírito que advém do facto de ter especialistas ao seu lado em cada etapa do processo.",
    },
  };
  const whatContent = what[language];

  return (
    <>
      <IHeroServices />

      <ISection>
        <TitleContent title={eb3Content.title1}>
          <IServicesCard language={language} />
        </TitleContent>

        {/*Timeline  Process */}
        {/* 
        <TitleContent title="Timeline of the proccess">
          <img src={proccessImg} alt="" />
        </TitleContent> */}

        {/* Longstanding Success */}
        <TitleContent title={longstandingContent.title1}>
          <p className={`${styles.sectionTitleText}`}>
            {longstandingContent.p1}
          </p>
          <p className={`${styles.sectionTitleText}`}>
            {longstandingContent.p2}
          </p>
        </TitleContent>

        {/* Who is eligible for EB3? */}
        <div className="flex items-center justify-center gap-6 md:gap-20 flex-col md:flex-row px-6">
          <div className="md:w-1/2 flex items-center justify-center ">
            <img
              src={jobImg}
              className="rounded-3xl w-[500px] object-contain mask mask-parallelogram"
            />
          </div>
          <div className="md:w-1/2 max-w-[500px]">
            <div className="flex items-center justify-center flex-col ">
              <p className={styles.titleText}>{whoContent.title1}</p>
            </div>

            <div className="flex items-center justify-start text-left gap-2 mt-5">
              <div>
                <GoDotFill />
              </div>
              <p>{whoContent.dot1}</p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>{whoContent.dot2}</p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>{whoContent.dot3}</p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>{whoContent.dot4}</p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>{whoContent.dot5}</p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>{whoContent.dot6}</p>
            </div>
          </div>
        </div>

        {/* Why does this process work? */}
        <TitleContent title={whyContent.title1}>
          <p className={`${styles.sectionTitleText}`}>{whyContent.p1}</p>
          <p className={`${styles.sectionTitleText}`}>{whyContent.p2}</p>
          <p className={`${styles.sectionTitleText}`}>{whyContent.p3}</p>
        </TitleContent>
      </ISection>

      <TitleContent title={eb3Content.title2}></TitleContent>
      <IConsularProcess language={language} />
      <TitleContent title={eb3Content.title3}></TitleContent>
      <IAdjustmentProcess language={language} />

      <ISection>
        <Divider language={language} />

        {/* ***OUR SERVICES *** */}

        {/* What we do */}
        <TitleContent title={whatContent.title1}>
          <p className={`${styles.sectionTitleText}`}>{whatContent.p1}</p>
        </TitleContent>

        <FourIcons language={language} />
        {/* 4 Emojis */}

        {/* How it works */}
        <ImgContent img={coWorkersImg} title2="How It Works">
          <p className={`${styles.sectionText}`}>
            Join the growing list of satisfied clients who have benefited from
            our expertise in the EB-3 Unskilled Visa process. We specialize in
            connecting employers with highly skilled foreign nationals, bridging
            the gap in the American workforce and helping to drive your business
            forward. Trust us to simplify the process and deliver the results
            you need to succeed.
          </p>
          <div className="flex flex-col items-start ml-4 mt-4">
            <p>
              <span className="font-bold">1.</span> Determine your eligibility
              and select an employer sponsor
            </p>
            <p>
              <span className="font-bold">2.</span> File and apply for the
              process with our partner attorneys
            </p>
            <p>
              <span className="font-bold">3.</span> Get your Green Card or work
              authorization
            </p>
            <p>
              <span className="font-bold">4.</span> Begin working for your
              employer
            </p>
            <p>
              <span className="font-bold">5.</span> Live in the U.S.A as an
              immigrant visa holder!
            </p>
          </div>
        </ImgContent>

        {/* Our expertise */}
        <ImgContent
          img={especialistImg}
          title1="Successful EB-3 Cases with EB-3 Workforce Solutions"
          title2="Our Expertise"
        >
          <p className={`${styles.sectionText} mb-6`}>
            Our goal is the same as our clients: for them to receive their U.S.
            Green Card through the EB-3 Unskilled Visa program.
          </p>
          <p className={`${styles.sectionText} `}>
            We have had several instances that were successful. In order to
            showcase the diverse experiences of someone going through this
            procedure, EB-3 Workforce Solutions has analyzed the best course of
            action for the different staffing needs that your business might
            have. Everybody who goes through this process will have a different
            timetable and procedure.
          </p>
        </ImgContent>
        <IFormContact color="primary" language={language} />

        <Divider />
      </ISection>
    </>
  );
};

export default IServices;

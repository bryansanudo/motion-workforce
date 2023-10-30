import { styles } from "@/styles";

import TitleContent from "@/components/companies/TitleContent";

const EbTwoCol = ({ language }) => {
  const col = {
    en: {
      title1: "EB-3 Visa",
      p1: "Process Length",
      p2: "Around 18 months",
      p3: "The length of the processing times for the EB-3 Program varies and depends on the location (Country of Origin) and status of the applicant (Consular Process vs. Adjustment of Status) and can also depend on the type of industry the applicant is sought for.",
      i1: "Investment",
      i2: "$400-$1200",
      i3: "In order to proceed with the Labor Certificate, compliance with regulations necessitates the advertisement of the position to U.S. Workers. This process labor certification process, independent of the quantity of employees required.",
    },
    es: {
      title1: "EB-3 Visa",
      p1: "Duración del proceso",
      p2: "Alrededor de 18 meses",
      p3: "La duración de los tiempos de procesamiento para el Programa EB-3 varía y depende de la ubicación (País de Origen) y el estatus del solicitante (Proceso Consular vs. Ajuste de Estatus) y también puede depender del tipo de industria para la que se busca al solicitante.",
      i1: "Inversión",
      i2: "$400-$1200",
      i3: "Para proceder con el Certificado Laboral, el cumplimiento de las regulaciones requiere el anuncio de la posición a Trabajadores Estadounidenses. Este proceso de certificación laboral, independiente de la cantidad de empleados requeridos.",
    },
    por: {
      title1: "EB-3 Visa",
      p1: "Duração do processo",
      p2: "Cerca de 18 meses",
      p3: "A duração dos tempos de processamento para o Programa EB-3 varia e depende da localização (País de Origem) e do estatuto do candidato (Processo Consular vs. Ajustamento do Estatuto) e pode também depender do tipo de indústria para a qual o candidato é procurado.",
      i1: "Investimento",
      i2: "$400-$1200",
      i3: "Para prosseguir com o Certificado de Trabalho, a conformidade com os regulamentos exige o anúncio da posição para trabalhadores dos EUA. Este processo de certificação laboral é independente da quantidade de empregados necessários.",
    },
  };
  const colContent = col[language];

  return (
    <TitleContent title={colContent.title1}>
      <div className="flex flex-col items-center justify xl:w-[1080px] lg:w-[900px] md:w-[700px] w-full ">
        <div className="flex items-center justify-center flex-col md:flex-row gap-10 lg:gap-20 ">
          <div className="flex flex-col justify-center items-center gap-4 max-w-[600px] p-4 md:p-10 shadow-md shadow-black rounded-3xl">
            <p className={`${styles.cTitleText}`}>{colContent.p1}</p>
            <p className="font-bold">{colContent.p2}</p>
            <p className={`${styles.sectionText}`}>{colContent.p3}</p>
          </div>

          <div className="flex flex-col justify-center items-center  gap-4 max-w-[600px] p-4 md:p-10 shadow-md shadow-black rounded-3xl">
            <p className={`${styles.cTitleText}`}>{colContent.i1}</p>
            <p className="font-bold">{colContent.i2}</p>
            <p className={`${styles.sectionText}`}>{colContent.i3}</p>
          </div>
        </div>
      </div>
    </TitleContent>
  );
};

export default EbTwoCol;

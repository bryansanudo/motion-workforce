import Section from "@/components/individuals/ISection";

import { styles } from "@/styles";

const ElegibilityEs = () => {
  return (
    <>
      <Section>
        <div className="mt-40 mx-10">
          <p className={`${styles.sectionText} mb-6 text-xl`}>
            Nos hemos dado cuenta de que está interesado en el{" "}
            <span className="font-bold">
              programa de la Tarjeta Verde EB-3{" "}
            </span>
            en 2020/2021. Entendiendo la importancia de este programa para su
            futuro, estamos llegando con una oferta exclusiva,{" "}
            <span className="font-bold">
              por tiempo limitado adaptada sólo para usted.
            </span>
          </p>
          <p className={`${styles.sectionText} mb-6 text-xl`}>
            Nos complace ofrecerle la oportunidad de solicitar un{" "}
            <span className="font-bold">programa de Tarjeta Verde EB3</span> a
            solo el 35% de la tarifa típica del mercado que le hayan cotizado en
            2020/2021.
          </p>
          <p className={`${styles.sectionText} mb-6 text-xl font-bold`}>
            Esta es una oportunidad sin precedentes para asegurar su futuro en
            los Estados Unidos, y hemos diseñado esta oferta con aspirantes como
            usted en mente.
          </p>
          <p className={`${styles.sectionText} text-xl mb-10`}>
            Para saber si cumples los requisitos para esta increíble oferta,
            rellena el siguiente formulario, disponible en inglés, español y
            portugués. Si califica, podrá programar una cita con nosotros para
            iniciar su camino hacia la Residencia Permanente.
          </p>

          <a
            href="https://form.jotform.com/EB3_Recruiter/eligibility-eb3wfs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary btn-lg mb-6  capitalize text-xl">
              comprobar mi elegibilidad
            </button>
          </a>
          <p className={`${styles.sectionText} mt-6 mb-40 text-xl font-bold`}>
            Estamos aquí para ayudarle en cada paso de este importante viaje.
          </p>
        </div>
      </Section>
    </>
  );
};

export default ElegibilityEs;

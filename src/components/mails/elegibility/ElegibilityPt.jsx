import Section from "@/components/individuals/ISection";

import { styles } from "@/styles";

const ElegibilityPt = () => {
  return (
    <>
      <Section>
        <div className="mt-40 mx-10">
          <p className={`${styles.sectionText} mb-6 text-xl`}>
            Notamos que você está interessado no programa do Green Card EB-3 em
            2020/2021. Compreendendo a importância deste programa para o seu
            futuro, estamos chegando com uma oferta exclusiva,{" "}
            <span className="font-bold">
              por tempo limitado, adaptada apenas para você.
            </span>
          </p>
          <p className={`${styles.sectionText} mb-6 text-xl`}>
            Temos o prazer de lhe oferecer a oportunidade de solicitar um{" "}
            <span className="font-bold">programa de Green Card EB-3</span> por
            apenas 35% da taxa de mercado que lhe foi cotada em 2020/2021.
          </p>
          <p className={`${styles.sectionText} mb-6 text-xl font-bold`}>
            Esta é uma oportunidade sem precedentes para garantir o seu futuro
            nos Estados Unidos, e projetamos esta oferta com candidatos como
            você em mente.
          </p>
          <p className={`${styles.sectionText} text-xl mb-10`}>
            Para verificar se você cumpre os requisitos para esta incrível
            oferta, preencha o formulário abaixo, disponível em inglês, espanhol
            e português. Se você se qualificar, poderá agendar uma consulta
            conosco para iniciar o seu caminho rumo à Residência Permanente.
          </p>
          <a
            href="https://form.jotform.com/EB3_Recruiter/eligibility-eb3wfs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary btn-lg mb-6 capitalize text-xl">
              Verificar minha elegibilidade
            </button>
          </a>
          <p className={`${styles.sectionText} mt-6 mb-40 text-xl font-bold`}>
            Estamos aqui para ajudá-lo em cada passo desta jornada importante.
          </p>
        </div>
      </Section>
    </>
  );
};

export default ElegibilityPt;

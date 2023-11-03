import Section from "@/components/individuals/ISection";

import { styles } from "@/styles";

const ElegibilityFr = () => {
  return (
    <>
      <Section>
        <div className="mt-40 mx-10">
          <p className={`${styles.sectionText} mb-6 text-xl`}>
            Nous avons remarqué que vous êtes intéressé par le programme de la
            Carte Verte EB-3 en 2020/2021. Compte tenu de l'importance de ce
            programme pour votre avenir, nous vous proposons une offre
            exclusive,{" "}
            <span className="font-bold">
              pour une durée limitée, adaptée uniquement pour vous.
            </span>
          </p>
          <p className={`${styles.sectionText} mb-6 text-xl`}>
            Nous sommes heureux de vous offrir la possibilité de demander un{" "}
            <span className="font-bold">programme de Carte Verte EB-3</span>{" "}
            pour seulement 35% du tarif typique du marché qui vous a été coté en
            2020/2021.
          </p>
          <p className={`${styles.sectionText} mb-6 text-xl font-bold`}>
            Il s'agit d'une opportunité sans précédent pour garantir votre
            avenir aux États-Unis, et nous avons conçu cette offre en pensant à
            des candidats comme vous.
          </p>
          <p className={`${styles.sectionText} text-xl mb-10`}>
            Pour vérifier si vous remplissez les critères de cette incroyable
            offre, veuillez remplir le formulaire ci-dessous, disponible en
            anglais, en espagnol et en portugais. Si vous êtes admissible, vous
            pourrez prendre rendez-vous avec nous pour entamer votre parcours
            vers la Résidence Permanente.
          </p>
          <a
            href="https://form.jotform.com/EB3_Recruiter/eligibility-eb3wfs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary btn-lg mb-6 capitalize text-xl">
              Vérifier mon éligibilité
            </button>
          </a>
          <p className={`${styles.sectionText} mt-6 mb-40 text-xl font-bold`}>
            Nous sommes là pour vous aider à chaque étape de ce voyage
            important.
          </p>
        </div>
      </Section>
    </>
  );
};

export default ElegibilityFr;

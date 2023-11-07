import ISection from "@/components/individuals/ISection";
import IHeroResources from "@/components/individuals/iResources/IHeroResources";
import { styles } from "@/styles";

const IResources = ({ language }) => {
  const faq = {
    en: {
      title1: "Frequently Asked Questions",
      q1: "What is the EB-3 visa category and who is eligible for it?",
      a1: "The EB-3 visa category is an employment-based immigration visa for skilled workers, professionals, and unskilled workers. Eligible individuals must have a job offer and a labor certification from the Department of Labor.",
      q2: "What is the processing time for an EB-3 visa and how can it be expedited?",
      a2: "The processing time for an EB-3 visa can vary and can take several months to several years. There is no way to expedite the process other than through premium processing, which can take 15 calendar days.",
      q3: "What is the difference between EB-3 and other employment-based visas?",
      a3: "The main difference is the level of skill required for the job offer. EB-3 visas are for less skilled workers, while EB-1 visas are for individuals with extraordinary ability, EB-2 visas are for individuals with advanced degrees or exceptional ability, and EB-4 visas are for religious workers.",
      q4: "What are the requirements for an EB-3 petition and what documents are needed?",
      a4: "The requirements include a job offer, a labor certification, and an approved Form I-140, Immigrant Petition for Alien Worker. Other required documents include evidence of the individual's qualifications, education, and work experience.",
      q5: "What happens if the employee terminates employment before the EB-3 visa expires?",
      a5: "If the employee terminates employment before the EB-3 visa expires, the visa will no longer be valid and the worker will have to depart the US.",
      q6: "How can an employer recruit foreign workers through the EB-3 process and what are the prevailing wage requirements?",
      a6: "An employer can recruit foreign workers by advertising the job opportunity and obtaining a labor certification from the Department of Labor. The employer must pay the prevailing wage for the position, which is the average wage paid to similarly employed workers in the geographic area.",
      q7: "Do they have clean records? They need to pass alcohol and drug test before we accept their applications.",
      a7: "he various governmental entities involved in the approval process of the green card for the EB3 process require that applicants have no criminal records in any country they have ever lived, in addition, the United States Department of Customs and Immigration Services also preforms an extensive background check, including previous stays in the US.",
      q8: "Are we going to sponsor their Visa?",
      a8: "As part of the process with the US Department of Labor you agree to employ the applicant for a minimum of one year, and the applicant as well is required to maintain employment with the employer for a minimum of 12 months.",
      q9: "Do I get to choose the applicants? I need applicants who speak, write and understand English.",
      a9: "You are required by law to chose the applicant, neither we nor any other agency or individual is allowed to select the employees for you. As part of our pre-screening process we require the applicants to perform language tests to ascertain English proficiency.",
      q10: "Can I get only experienced workers (have worked in warehouse, restaurants, etc)?",
      a10: "The EB3 process is for “other” types of employees, those without degree or substantial previous work experience. However, you are allowed to require that an applicant for a particular position has previous work experience for that position i.e. cooks, warehouse workers etc.",
      q11: "Who will interview the applicants? What's the process of the interview?",
      a11: "The initial screening of the applicants will be done by our recruitment specialist to ascertain ability and qualification for the EB3 process. Interviews for the actual positions are being done, and in fact have to be done by the employer.",
      q12: "How can I get in touch with EB-3 Workforce Solutions for more information or to start the application process?",
      a12: "Please complete the following Form: https://form.jotform.com/Eb3wfs/eligibility-eb3wfs or send us a message on our WhatsApp line: https://wa.link/z853s6 and we will assist you shortly.",
      q13: "What is the EB-3 Visa program, and how can it help my company find qualified workers?",
      a13: "The EB-3 Visa program is an employment-based immigration initiative that allows U.S. companies to sponsor foreign workers to obtain a Green Card (permanent residency). This helps your company fill positions facing a chronic shortage of unskilled workers by connecting employers with immigrant employees willing to apply for a Green Card through the EB-3 program. This provides a long-term solution to your qualified workforce needs.",
      q14: "What is the typical process and timeframe for obtaining a Green Card through the EB-3 program?",
      a14: "The process of obtaining a Green Card through the EB-3 program generally consists of several steps, including obtaining a labor certification, filing a foreign worker petition, and finally, the issuance of the Green Card. The typical timeframe for this process can vary depending on the applicant's location, application status, and industry type. Generally, it takes around 18 months, but this time can vary. It's important to consult with EB-3 Workforce Solutions for a more precise estimate based on your situation.",
    },
    es: {
      title1: "Preguntas frecuentes",
      q1: "¿Qué es la categoría de visado EB-3 y quién puede optar a ella?",
      a1: "La categoría de visado EB-3 es un visado de inmigración basado en el empleo para trabajadores cualificados, profesionales y trabajadores no cualificados. Las personas elegibles deben tener una oferta de trabajo y una certificación laboral del Departamento de Trabajo",
      q2: "¿Cuál es el tiempo de tramitación de un visado EB-3 y cómo se puede agilizar?",
      a2: "El tiempo de tramitación de un visado EB-3 puede variar y puede llevar de varios meses a varios años. No hay otra forma de acelerar el proceso que no sea a través de la tramitación premium, que puede tardar 15 días naturales",
      q3: "¿Cuál es la diferencia entre el EB-3 y otros visados basados en el empleo?",
      a3: "La principal diferencia es el nivel de cualificación requerido para la oferta de trabajo. Los visados EB-3 son para trabajadores menos cualificados, mientras que los visados EB-1 son para personas con habilidades extraordinarias, los visados EB-2 son para personas con titulaciones superiores o habilidades excepcionales y los visados EB-4 son para trabajadores religiosos",
      q4: "¿Cuáles son los requisitos para una petición EB-3 y qué documentos se necesitan?",
      a4: "Los requisitos incluyen una oferta de trabajo, una certificación laboral y un Formulario I-140, Petición de Inmigrante para Trabajador Extranjero, aprobado. Otros documentos requeridos incluyen pruebas de las cualificaciones, educación y experiencia laboral del individuo",
      q5: "¿Qué ocurre si el empleado cesa en su empleo antes de que expire el visado EB-3?",
      a5: "Si el empleado cesa en su empleo antes de que expire el visado EB-3, el visado dejará de ser válido y el trabajador tendrá que abandonar los EE.UU.",
      q6: "¿Cómo puede un empleador contratar trabajadores extranjeros a través del proceso EB-3 y cuáles son los requisitos salariales vigentes?",
      a6: "Un empleador puede reclutar trabajadores extranjeros mediante la publicidad de la oportunidad de trabajo y la obtención de una certificación laboral del Departamento de Trabajo. El empleador debe pagar el salario prevaleciente para el puesto, que es el salario medio pagado a trabajadores empleados de forma similar en el área geográfica.",
      q7: "¿Tienen un historial limpio? Tienen que pasar las pruebas de alcohol y drogas antes de que aceptemos sus solicitudes",
      a7: "Las distintas entidades gubernamentales que intervienen en el proceso de aprobación de la tarjeta de residencia para el proceso EB3 exigen que los solicitantes no tengan antecedentes penales en ningún país en el que hayan vivido, además, el Departamento de Aduanas y Servicios de Inmigración de los Estados Unidos también realiza una exhaustiva comprobación de antecedentes, incluidas las estancias anteriores en los EE.UU.",
      q8: "¿Vamos a patrocinar su visado?",
      a8: "Como parte del proceso con el Departamento de Trabajo de EE.UU. usted se compromete a emplear al solicitante durante un mínimo de un año, y el solicitante también está obligado a mantener el empleo con el empleador durante un mínimo de 12 meses",
      q9: "¿Puedo elegir a los candidatos? Necesito candidatos que hablen, escriban y entiendan inglés",
      a9: "La ley le obliga a elegir a los candidatos, ni nosotros ni ningún otro organismo o persona está autorizado a seleccionar a los empleados por usted. Como parte de nuestro proceso de preselección, exigimos a los candidatos que realicen pruebas lingüísticas para comprobar su dominio del inglés.",
      q10: "¿Puedo conseguir sólo trabajadores con experiencia (que hayan trabajado en almacenes, restaurantes, etc.)?",
      a10: 'El proceso EB3 es para "otros" tipos de empleados, los que no tienen titulación ni experiencia laboral previa sustancial. Sin embargo, se le permite exigir que un solicitante para un puesto en particular tenga experiencia laboral previa para ese puesto, es decir, cocineros, trabajadores de almacén, etc.',
      q11: "¿Quién entrevistará a los candidatos? ¿Cuál es el proceso de la entrevista?",
      a11: "La selección inicial de los candidatos será realizada por nuestro especialista en contratación para determinar su capacidad y cualificación para el proceso EB3. Las entrevistas para los puestos reales se están haciendo, y de hecho tienen que ser hechas por el empleador",
      q12: "¿Cómo puedo ponerme en contacto con EB-3 Workforce Solutions para obtener más información o para iniciar el proceso de solicitud?",
      a12: "Por favor complete el siguiente Formulario: https://form.jotform.com/Eb3wfs/eligibility-eb3wfs o envíenos un mensaje a nuestra línea de WhatsApp: https://wa.link/z853s6 y lo atenderemos a la brevedad",
      q13: "¿Qué es el programa de visados EB-3 y cómo puede ayudar a mi empresa a encontrar trabajadores cualificados?",
      a13: "El programa de visados EB-3 es una iniciativa de inmigración basada en el empleo que permite a las empresas estadounidenses patrocinar a trabajadores extranjeros para obtener una Green Card (residencia permanente). Esto ayuda a su empresa a cubrir puestos que se enfrentan a una escasez crónica de trabajadores no cualificados, poniendo en contacto a empresarios con empleados inmigrantes dispuestos a solicitar una Green Card a través del programa EB-3. Esto proporciona una solución a largo plazo a sus necesidades de mano de obra cualificada",
      q14: "¿Cuál es el proceso y el plazo típicos para obtener una Green Card a través del programa EB-3?",
      a14: "El proceso de obtención de una Green Card a través del programa EB-3 generalmente consta de varios pasos, incluyendo la obtención de una certificación laboral, la presentación de una petición de trabajador extranjero y, finalmente, la emisión de la Green Card. El plazo típico de este proceso puede variar en función de la ubicación del solicitante, el estado de la solicitud y el tipo de industria. Por lo general, tarda unos 18 meses, pero este plazo puede variar. Es importante consultar con EB-3 Workforce Solutions para obtener una estimación más precisa basada en su situación",
    },
    por: {
      title1: "Perguntas mais frequentes",
      q1: "O que é a categoria de visto EB-3 e quem é elegível para a mesma?",
      a1: "A categoria de visto EB-3 é um visto de imigração baseado no emprego para trabalhadores qualificados, profissionais e trabalhadores não qualificados. Os indivíduos elegíveis devem ter uma oferta de emprego e uma certificação de trabalho do Departamento do Trabalho.",
      q2: "Qual é o tempo de processamento de um visto EB-3 e como pode ser acelerado?",
      a2: "O tempo de processamento de um visto EB-3 pode variar e pode demorar vários meses a vários anos. Não há outra forma de acelerar o processo a não ser através do processamento premium, que pode demorar 15 dias de calendário",
      q3: "Qual é a diferença entre o EB-3 e outros vistos baseados no emprego?",
      a3: "A principal diferença é o nível de competências exigido para a oferta de emprego. Os vistos EB-3 destinam-se a trabalhadores menos qualificados, enquanto os vistos EB-1 se destinam a indivíduos com capacidades extraordinárias, os vistos EB-2 se destinam a indivíduos com graus avançados ou capacidades excepcionais e os vistos EB-4 se destinam a trabalhadores religiosos.",
      q4: "Quais são os requisitos para uma petição EB-3 e que documentos são necessários?",
      a4: "Os requisitos incluem uma oferta de emprego, uma certificação de trabalho e um Formulário I-140 aprovado, Petição de Imigrante para Trabalhador Estrangeiro. Outros documentos necessários incluem provas das qualificações, educação e experiência de trabalho do indivíduo.",
      q5: "O que acontece se o trabalhador terminar o contrato de trabalho antes de o visto EB-3 expirar?",
      a5: "Se o trabalhador rescindir o contrato de trabalho antes de o visto EB-3 expirar, o visto deixa de ser válido e o trabalhador terá de sair dos EUA.",
      q6: "Como é que uma entidade patronal pode recrutar trabalhadores estrangeiros através do processo EB-3 e quais são os requisitos em matéria de salários em vigor?",
      a6: "Um empregador pode recrutar trabalhadores estrangeiros anunciando a oportunidade de emprego e obtendo uma certificação de trabalho do Departamento do Trabalho. O empregador deve pagar o salário prevalecente para o cargo, que é o salário médio pago a trabalhadores com emprego semelhante na área geográfica.",
      q7: "Têm registo criminal limpo? Têm de passar num teste de álcool e drogas antes de aceitarmos as suas candidaturas",
      a7: "As várias entidades governamentais envolvidas no processo de aprovação do green card para o processo EB3 exigem que os candidatos não tenham registos criminais em nenhum país onde tenham vivido. Além disso, o Departamento de Alfândegas e Serviços de Imigração dos Estados Unidos também efectua uma verificação exaustiva dos seus antecedentes, incluindo estadias anteriores nos EUA",
      q8: "Vamos patrocinar o visto?",
      a8: "Como parte do processo com o Departamento do Trabalho dos EUA, concorda em empregar o candidato durante um mínimo de um ano, e o candidato também é obrigado a manter o emprego com a entidade patronal durante um mínimo de 12 meses",
      q9: "Posso escolher os candidatos? Preciso de candidatos que falem, escrevam e compreendam inglês",
      a9: "A lei obriga-o a escolher o candidato, nem nós, nem qualquer outra agência ou indivíduo está autorizado a selecionar os empregados por si. Como parte do nosso processo de pré-seleção, exigimos que os candidatos realizem testes linguísticos para verificar a proficiência em inglês.",
      q10: "Posso obter apenas trabalhadores experientes (que tenham trabalhado em armazéns, restaurantes, etc.)?",
      a10: 'O processo EB3 destina-se a "outros" tipos de trabalhadores, aqueles que não possuem um diploma ou experiência profissional anterior substancial. No entanto, é permitido exigir que um candidato a um determinado cargo tenha experiência de trabalho anterior para esse cargo, ou seja, cozinheiros, trabalhadores de armazém, etc.',
      q11: "Quem é que entrevista os candidatos? Qual é o processo da entrevista?",
      a11: "A seleção inicial dos candidatos será feita pelo nosso especialista em recrutamento para verificar a capacidade e qualificação para o processo EB3. As entrevistas para os cargos efectivos estão a ser feitas e, de facto, têm de ser feitas pelo empregador.",
      q12: "Como posso entrar em contacto com a EB-3 Workforce Solutions para obter mais informações ou para iniciar o processo de candidatura?",
      a12: "Por favor, preencha o seguinte formulário: https://form.jotform.com/Eb3wfs/eligibility-eb3wfs ou envie-nos uma mensagem através da nossa linha WhatsApp: https://wa.link/z853s6 e ajudá-lo-emos em breve.",
      q13: "O que é o programa de Visto EB-3 e como é que pode ajudar a minha empresa a encontrar trabalhadores qualificados?",
      a13: "O programa de Visto EB-3 é uma iniciativa de imigração baseada no emprego que permite às empresas dos EUA patrocinar trabalhadores estrangeiros para obter um Green Card (residência permanente). Isto ajuda a sua empresa a preencher posições que enfrentam uma escassez crónica de trabalhadores não qualificados, ligando os empregadores a trabalhadores imigrantes dispostos a candidatar-se a um Green Card através do programa EB-3. Isto proporciona uma solução a longo prazo para as suas necessidades de mão de obra qualificada",
      q14: "Qual é o processo típico e o prazo para obter um Green Card através do programa EB-3?",
      a14: "O processo de obtenção de um Green Card através do programa EB-3 consiste geralmente em várias etapas, incluindo a obtenção de uma certificação de trabalho, a apresentação de uma petição de trabalhador estrangeiro e, finalmente, a emissão do Green Card. O prazo típico para este processo pode variar consoante a localização do requerente, o estado da candidatura e o tipo de indústria. Geralmente, demora cerca de 18 meses, mas este tempo pode variar. É importante consultar a EB-3 Workforce Solutions para obter uma estimativa mais precisa com base na sua situação.",
    },
    fr: {
      title1: "Questions fréquemment posées",
      q1: "Qu'est-ce que la catégorie de visa EB-3 et qui peut en bénéficier ?",
      a1: "La catégorie de visa EB-3 est un visa d'immigration fondé sur l'emploi destiné aux travailleurs qualifiés, aux professionnels et aux travailleurs non qualifiés. Les personnes éligibles doivent disposer d'une offre d'emploi et d'un certificat de travail délivré par le ministère du travail",
      q2: "Quel est le délai de traitement d'une demande de visa EB-3 et comment peut-on l'accélérer ?",
      a2: "Le délai de traitement d'un visa EB-3 peut varier de plusieurs mois à plusieurs années. Il n'existe aucun moyen d'accélérer la procédure, si ce n'est par le biais d'un traitement prioritaire, qui peut prendre 15 jours calendaires",
      q3: "Quelle est la différence entre le visa EB-3 et les autres visas fondés sur l'emploi ?",
      a3: "La principale différence réside dans le niveau de compétence requis pour l'offre d'emploi. Les visas EB-3 sont destinés aux travailleurs moins qualifiés, tandis que les visas EB-1 sont destinés aux personnes ayant des capacités extraordinaires, les visas EB-2 sont destinés aux personnes ayant des diplômes supérieurs ou des capacités exceptionnelles, et les visas EB-4 sont destinés aux travailleurs religieux",
      q4: "Quelles sont les conditions requises pour une demande EB-3 et quels sont les documents nécessaires ?",
      a4: "Les conditions requises comprennent une offre d'emploi, une certification de travail et un formulaire I-140 approuvé, intitulé 'Immigrant Petition for Alien Worker' (demande d'immigration d'un travailleur étranger). Les autres documents requis comprennent des preuves des qualifications, de l'éducation et de l'expérience professionnelle de l'individu",
      q5: "Que se passe-t-il si l'employé quitte son emploi avant l'expiration du visa EB-3 ?",
      R5: "Si l'employé quitte son emploi avant l'expiration du visa EB-3, le visa ne sera plus valide et le travailleur devra quitter les États-Unis",
      q6: "Comment un employeur peut-il recruter des travailleurs étrangers dans le cadre de la procédure EB-3 et quelles sont les exigences en matière de salaire ?",
      a6: "Un employeur peut recruter des travailleurs étrangers en publiant l'offre d'emploi et en obtenant une certification de travail auprès du ministère du travail. L'employeur doit payer le salaire en vigueur pour le poste, c'est-à-dire le salaire moyen versé à des travailleurs occupant un emploi similaire dans la zone géographique concernée",
      q7: "Ont-ils un casier judiciaire vierge ? Ils doivent passer des tests de dépistage d'alcool et de drogues avant que nous n'acceptions leur candidature",
      a7: "Les différentes entités gouvernementales impliquées dans le processus d'approbation de la carte verte pour le processus EB3 exigent que les candidats n'aient pas de casier judiciaire dans aucun des pays où ils ont vécu. En outre, le département des douanes et des services d'immigration des États-Unis procède également à une vérification approfondie des antécédents, y compris des séjours antérieurs aux États-Unis",
      q8: "Allons-nous parrainer leur visa ?",
      a8: "Dans le cadre de la procédure engagée avec le ministère américain du travail, vous vous engagez à employer le candidat pour une durée minimale d'un an, et le candidat est également tenu de conserver son emploi auprès de l'employeur pour une durée minimale de 12 mois",
      q9: "Est-ce que je peux choisir les candidats ? J'ai besoin de candidats qui parlent, écrivent et comprennent l'anglais",
      a9: "La loi vous oblige à choisir les candidats. Ni nous, ni aucune autre agence ou personne n'est autorisée à sélectionner les employés à votre place. Dans le cadre de notre processus de présélection, nous demandons aux candidats de passer des tests linguistiques pour vérifier leurs compétences en anglais",
      q10: "Puis-je obtenir uniquement des travailleurs expérimentés (ayant travaillé dans un entrepôt, un restaurant, etc.) ?",
      a10: "Le processus EB3 s'adresse à d''autres' types d'employés, ceux qui n'ont pas de diplôme ou d'expérience professionnelle substantielle. Toutefois, vous pouvez exiger qu'un candidat à un poste particulier ait une expérience professionnelle antérieure pour ce poste, par exemple des cuisiniers, des magasiniers, etc",
      q11: "Qui fait passer les entretiens aux candidats ? Quel est le déroulement de l'entretien ?",
      R11: "La sélection initiale des candidats sera effectuée par notre spécialiste du recrutement afin de s'assurer de leur capacité et de leur qualification pour le processus EB3. Les entretiens pour les postes à pourvoir sont en cours et doivent en fait être menés par l'employeur",
      q12: "Comment puis-je contacter EB-3 Workforce Solutions pour plus d'informations ou pour entamer le processus de candidature ?",
      a12: "Veuillez remplir le formulaire suivant : https://form.jotform.com/Eb3wfs/eligibility-eb3wfs ou envoyez-nous un message sur notre ligne WhatsApp : https://wa.link/z853s6 et nous vous aiderons rapidement",
      q13: "Qu'est-ce que le programme de visa EB-3 et comment peut-il aider mon entreprise à trouver des travailleurs qualifiés ?",
      a13: "Le programme de visa EB-3 est une initiative d'immigration fondée sur l'emploi qui permet aux entreprises américaines de parrainer des travailleurs étrangers en vue de l'obtention d'une carte verte (résidence permanente). Ce programme aide votre entreprise à pourvoir des postes confrontés à une pénurie chronique de travailleurs non qualifiés en mettant en relation des employeurs avec des travailleurs immigrés désireux de demander une carte verte dans le cadre du programme EB-3. Il s'agit d'une solution à long terme pour répondre à vos besoins en main-d'œuvre qualifiée",
      q14: "Quel est le processus et le délai habituels pour obtenir une carte verte dans le cadre du programme EB-3 ?",
      a14: "La procédure d'obtention d'une carte verte dans le cadre du programme EB-3 comprend généralement plusieurs étapes, notamment l'obtention d'une certification de travail, le dépôt d'une demande de travailleur étranger et, enfin, la délivrance de la carte verte. Le délai habituel de cette procédure peut varier en fonction de la localisation du demandeur, du statut de la demande et du type d'industrie. En général, il faut compter environ 18 mois, mais ce délai peut varier. Il est important de consulter EB-3 Workforce Solutions pour obtenir une estimation plus précise en fonction de votre situation",
    },
  };

  const faqContent = faq[language];

  const questions = [
    {
      id: 1,
      question: faqContent.q1,
      answer: faqContent.a1,
    },
    {
      id: 2,
      question: faqContent.q2,
      answer: faqContent.a2,
    },
    {
      id: 3,
      question: faqContent.q3,
      answer: faqContent.a3,
    },
    {
      id: 4,
      question: faqContent.q4,
      answer: faqContent.a4,
    },
    {
      id: 5,
      question: faqContent.q5,
      answer: faqContent.a5,
    },
    {
      id: 6,
      question: faqContent.q6,
      answer: faqContent.a6,
    },
    {
      id: 7,
      question: faqContent.q7,
      answer: faqContent.a7,
    },
    {
      id: 8,
      question: faqContent.q8,
      answer: faqContent.a8,
    },
    {
      id: 9,
      question: faqContent.q9,
      answer: faqContent.a9,
    },
    {
      id: 10,
      question: faqContent.q10,
      answer: faqContent.a10,
    },
    {
      id: 11,
      question: faqContent.q11,
      answer: faqContent.a11,
    },
    {
      id: 12,
      question: faqContent.q12,
      answer: faqContent.a12,
    },
    {
      id: 13,
      question: faqContent.q13,
      answer: faqContent.a13,
    },
    {
      id: 14,
      question: faqContent.q14,
      answer: faqContent.a14,
    },
  ];

  return (
    <>
      <IHeroResources language={language} />
      <ISection>
        <p className={`${styles.titleText} mt-6 capitalize`}>
          {faqContent.title1}
        </p>
        <div className="flex flex-col items-center justify-center  my-10  w-[280px] md:w-[500px] lg:w-[900px]  ">
          {questions.map(({ id, question, answer }) => (
            <div
              key={id}
              tabIndex={0}
              className="collapse collapse-arrow border border-primary bg-base-100 rounded-box w-full "
            >
              <div
                className={`${styles.sectionText} collapse-title  font-bold `}
              >
                {question}
              </div>
              <div className={`${styles.sectionText} collapse-content `}>
                <p>{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </ISection>
    </>
  );
};

export default IResources;

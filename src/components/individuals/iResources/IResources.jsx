import ISection from "@/components/individuals/ISection";
import IHeroResources from "@/components/individuals/iResources/IHeroResources";
import { styles } from "@/styles";

const IResources = ({ language }) => {
  const faq = {
    en: {
      title1: "Frequently Asked Questions",
      q1: "What is the EB-3 visa category and who is eligible for it?",
      a1: "The EB-3 visa category is an employment-based immigration visa for skilled workers, professionals, and unskilled workers. Eligible individuals must have a job offer and a labor certification from the Department of Labor.",
      q2: "Why were the EB-3 visas created?",
      a2: "The EB-3 visas were created to address specific U.S. labor market needs by allowing employers to hire skilled foreign workers, promoting economic growth and filling job vacancies that cannot easily be filled by U.S. workers.",
      q3: "Is the EB-3 process legitimate?",
      a3: "The EB-3 visa process is a legitimate U.S. immigration pathway designed for skilled 	workers, professionals, and other workers with a job offer from a U.S. employer. It involves specific stages, including labor certification and petition filing, overseen by U.S. government agencies like the Department of Labor and USCIS.",
      q4: "What is the processing time for an EB-3 visa and how can it be expedited?",
      a4: "The processing time for an EB-3 visa can vary and can take several months to several years. There is no way to expedite the process other than through premium processing, which can take 15 calendar days.",
      q5: "What is the approval rate of the EB-3 Process?",
      a5: "The approval rate for EB-3 Process varies depending on factors like job type and documentation. Specific rates can fluctuate over time and across industries. ",
      q6: "What type of work am I applying for through your EB-3 Visa Program? ",
      a6: "Unskilled labor that is not seasonal or temporary. The positions might include jobs that require 	less than two years of training or experience. ",
      q7: "What is the difference between EB-3 and other employment-based visas? ",
      a7: "The main difference is the level of skill required for the job offer. EB-3 visas are for less skilled workers, while EB-1 visas are for individuals with extraordinary ability, EB-2 visas are for individuals with advanced degrees or exceptional ability, and EB-4 visas are for religious workers. ",
      q8: "What are the requirements for an EB-3 petition and what documents are needed?",
      a8: "The requirements include a job offer, a labor certification, and an approved Form I-140, Immigrant Petition for Alien Worker. Other required documents include evidence of the individual's qualifications, education, and work experience. ",
      q9: "Can I include my spouse and children in the EB-3 Process? ",
      a9: "Yes, you can typically include your spouse and unmarried children under 21 in your EB-3 visa application as dependents. They can accompany you to the United States under certain conditions. ",
      q10: "At what point do I receive American residency through the EB-3 process? ",
      a10: "You receive American residency through the EB-3 process after completing all required steps and obtaining approval for your immigrant visa application. Once your EB-3 immigrant visa petition is approved, and you have gone through the necessary consular processing (if outside the U.S.) or adjustment of status (if within the U.S.), you can be granted lawful permanent resident status, commonly known as a green card. This allows you to live and work permanently in the United States. ",
      q11: "What forms are required for the EB-3 process?",
      a11: "The EB-3 process requires forms such as the PERM labor certification, Form I-140, and either Form DS-260 for consular processing or Form I-485 for adjustment of status in the U.S",
      q12: "What is Form I-140? ",
      a12: "The Form I-140, known as the 'Immigrant Petition for Alien Worker,' is a document filed with the U.S. Citizenship and Immigration Services (USCIS) by a U.S. employer on behalf of a foreign worker. Its primary purpose is to demonstrate a valid job offer for the foreign worker and that the worker has the necessary qualifications, experience, and education for that permanent position in the United States. ",
      q13: "What is Form I-485? ",
      a13: "The I-485 is the application form used to request a change from non-immigrant to permanent resident status within the U.S.",
      q14: "Can I travel on a tourist visa during the EB-3 process? ",
      a14: "Traveling on a tourist visa while in the EB-3 process can be risky. It's crucial to be transparent about your intentions and consult with an immigration attorney before doing so.",
      q15: "How long does the adjustment of status take?",
      a15: "The time for adjustment of status in the EB-3 category varies; it can range from several months to close to a year, depending on the case and the USCIS office.",
      q16: "Can I explore the EB-3 process with asylum in the U.S.?",
      a16: "It's possible to explore the EB-3 process if you have asylum in the U.S., it's essential to consider all involved aspects and consider seeking expert legal guidance to navigate the process successfully.",
      q17: "Can I explore the EB-3 process with asylum in the U.S.?",
      a17: "It's possible to explore the EB-3 process if you have asylum in the U.S., it's essential to consider all involved aspects and consider seeking expert legal guidance to navigate the process successfully.",
      q18: "Can I do the EB-3 process myself? ",
      a18: "Yes, you can attempt to handle the EB-3 process yourself, but it's intricate. Many individuals opt to consult with an immigration attorney for guidance. ",
      q19: "What terms can lead to the denial of the EB-3 visa? ",
      a19: "Reasons for EB-3 visa denial can include inadmissibility issues, incomplete documentation, employer eligibility issues, significant changes in circumstances, credibility concerns during interviews, or instances of fraud or misrepresentation ",
      q20: "How can I get in touch with EB-3 Workforce Solutions for more information or to start the application process?",
      a20: "Please complete the following Form: https://form.jotform.com/EB3_Recruiter/eligibility-eb3wfs or send us a message on our WhatsApp line: https://bit.ly/EB3WFS and we will assist you shortly.",
    },
    es: {
      title1: "Preguntas frecuentes",
      q1: "¿Qué es la categoría de visa EB-3 y quiénes son elegibles para ella?",
      a1: "La categoría de visa EB-3 es una visa de inmigración basada en el empleo para trabajadores calificados, profesionales y trabajadores no calificados. Las personas elegibles deben contar con una oferta de trabajo y una certificación laboral del Departamento de Trabajo.",
      q2: "¿Por qué se crearon las visas EB-3?",
      a2: "Las visas EB-3 fueron creadas para abordar necesidades específicas en el mercado laboral de los Estados Unidos al permitir que los empleadores contraten a trabajadores extranjeros calificados, promoviendo el crecimiento económico y ocupando vacantes laborales que no pueden ser fácilmente llenadas por trabajadores estadounidenses.",
      q3: "¿Es legítimo el proceso de la visa EB-3?",
      a3: "El proceso de la visa EB-3 es una vía legítima de inmigración en los Estados Unidos diseñada para trabajadores calificados, profesionales y otros trabajadores con una oferta de trabajo de un empleador estadounidense. Involucra etapas específicas, incluyendo la certificación laboral y la presentación de la petición, supervisadas por agencias gubernamentales como el Departamento de Trabajo y el USCIS.",
      q4: "¿Cuál es el tiempo de procesamiento para una visa EB-3 y cómo se puede acelerar?",
      a4: "El tiempo de procesamiento para una visa EB-3 puede variar y tomar desde varios meses hasta varios años. No hay forma de acelerar el proceso, excepto a través del procesamiento premium, que puede demorar 15 días calendario.",
      q5: "¿Cuál es la tasa de aprobación del proceso EB-3?",
      a5: "La tasa de aprobación del proceso EB-3 varía dependiendo de factores como el tipo de trabajo y la documentación. Las tasas específicas pueden fluctuar con el tiempo y entre industrias.",
      q6: "¿Para qué tipo de trabajo estoy aplicando a través de su Programa de Visa EB-3?",
      a6: "Trabajo no calificado que no es estacional ni temporal. Las posiciones pueden incluir trabajos que requieren menos de dos años de formación o experiencia.",
      q7: "¿Cuál es la diferencia entre EB-3 y otras visas basadas en el empleo?",
      a7: "La principal diferencia es el nivel de habilidad requerido para la oferta de trabajo. Las visas EB-3 son para trabajadores menos calificados, mientras que las visas EB-1 son para personas con habilidades extraordinarias, las visas EB-2 son para personas con títulos avanzados o habilidades excepcionales, y las visas EB-4 son para trabajadores religiosos.",
      q8: "¿Cuáles son los requisitos para una petición EB-3 y qué documentos se necesitan?",
      a8: "Los requisitos incluyen una oferta de trabajo, una certificación laboral y un Formulario I-140 aprobado, Petición de Inmigrante para Trabajador Extranjero. Otros documentos requeridos incluyen evidencia de las calificaciones, educación y experiencia laboral del individuo.",
      q9: "¿Puedo incluir a mi cónyuge e hijos en el proceso EB-3?",
      a9: "Sí, generalmente puedes incluir a tu cónyuge e hijos solteros menores de 21 años en tu solicitud de visa EB-3 como dependientes. Pueden acompañarte a los Estados Unidos bajo ciertas condiciones.",
      q10: "¿En qué momento obtengo la residencia estadounidense a través del proceso EB-3?",
      a10: "Obtienes la residencia estadounidense a través del proceso EB-3 después de completar todos los pasos requeridos y obtener la aprobación de tu solicitud de visa de inmigrante. Una vez aprobada tu petición de visa de inmigrante EB-3 y después de pasar por el procesamiento consular necesario (si te encuentras fuera de los EE. UU.) o el ajuste de estatus (si estás dentro de los EE. UU.), puedes obtener el estatus de residente permanente legal, comúnmente conocido como tarjeta verde. Esto te permite vivir y trabajar permanentemente en los Estados Unidos.",
      q11: "¿Qué formularios se requieren para el proceso EB-3?",
      a11: "El proceso EB-3 requiere formularios como la certificación laboral PERM, el Formulario I-140 y ya sea el Formulario DS-260 para el procesamiento consular o el Formulario I-485 para el ajuste de estatus en los EE. UU.",
      q12: "¿Qué es el Formulario I-140?",
      a12: "El Formulario I-140, conocido como 'Petición de Inmigrante para Trabajador Extranjero', es un documento presentado ante el Servicio de Ciudadanía e Inmigración de los Estados Unidos (USCIS) por un empleador estadounidense en nombre de un trabajador extranjero. Su propósito principal es demostrar una oferta de trabajo válida para el trabajador extranjero y que este tiene las calificaciones, experiencia y educación necesarias para ese puesto permanente en los Estados Unidos.",
      q13: "¿Qué es el Formulario I-485?",
      a13: "El I-485 es el formulario de solicitud utilizado para solicitar un cambio de estatus de no inmigrante a residente permanente dentro de los EE. UU.",
      q14: "¿Puedo viajar con una visa de turista durante el proceso EB-3?",
      a14: "Viajar con una visa de turista durante el proceso EB-3 puede ser arriesgado. Es crucial ser transparente acerca de tus intenciones y consultar con un abogado de inmigración antes de hacerlo.",
      q15: "¿Cuánto tiempo toma el ajuste de estatus?",
      a15: "El tiempo para el ajuste de estatus en la categoría EB-3 varía; puede oscilar entre varios meses y cerca de un año, dependiendo del caso y de la oficina del USCIS.",
      q16: "¿Puedo explorar el proceso EB-3 teniendo asilo en los EE. UU.?",
      a16: "Es posible explorar el proceso EB-3 si tienes asilo en los Estados Unidos. Es esencial considerar todos los aspectos involucrados y buscar la orientación legal de expertos para navegar con éxito por el proceso.",
      q17: "¿Puedo explorar el proceso EB-3 teniendo asilo en los EE. UU.?",
      a17: "Es posible explorar el proceso EB-3 si tienes asilo en los Estados Unidos. Es esencial considerar todos los aspectos involucrados y buscar la orientación legal de expertos para navegar con éxito por el proceso.",
      q18: "¿Puedo realizar el proceso EB-3 por mi cuenta?",
      a18: "Sí, puedes intentar manejar el proceso EB-3 por ti mismo, pero es complicado. Muchas personas optan por consultar con un abogado de inmigración para obtener orientación.",
      q19: "¿Qué términos pueden llevar al rechazo de la visa EB-3?",
      a19: "Las razones para el rechazo de la visa EB-3 pueden incluir problemas de inadmisibilidad, documentación incompleta, problemas de elegibilidad del empleador, cambios significativos en las circunstancias, preocupaciones sobre la credibilidad durante las entrevistas o casos de fraude o tergiversación.",
      q20: "¿Cómo puedo ponerme en contacto con EB-3 Workforce Solutions para obtener más información o comenzar el proceso de solicitud?",
      a20: "Por favor, completa el siguiente formulario: https://form.jotform.com/EB3_Recruiter/eligibility-eb3wfs o envíanos un mensaje en nuestra línea de WhatsApp: https://bit.ly/EB3WFS y te asistiremos pronto.",
    },
    por: {
      title1: "Perguntas mais frequentes",
      q1: "O que é a categoria de visto EB-3 e quem é elegível para ela?",
      a1: "A categoria de visto EB-3 é um visto de imigração baseado em emprego para trabalhadores qualificados, profissionais e trabalhadores não qualificados. As pessoas elegíveis devem ter uma oferta de emprego e uma certificação de trabalho do Departamento do Trabalho.",
      q2: "Por que os vistos EB-3 foram criados?",
      a2: "Os vistos EB-3 foram criados para atender a necessidades específicas no mercado de trabalho dos Estados Unidos, permitindo que os empregadores contratem trabalhadores estrangeiros qualificados, promovendo o crescimento econômico e preenchendo vagas de emprego que não podem ser facilmente preenchidas por trabalhadores americanos.",
      q3: "O processo EB-3 é legítimo?",
      a3: "O processo de visto EB-3 é uma via legítima de imigração nos Estados Unidos projetada para trabalhadores qualificados, profissionais e outros trabalhadores com uma oferta de emprego de um empregador nos EUA. Envolve etapas específicas, incluindo certificação de trabalho e apresentação de petição, supervisionadas por agências governamentais como o Departamento do Trabalho e o USCIS.",
      q4: "Qual é o tempo de processamento para um visto EB-3 e como é possível acelerá-lo?",
      a4: "O tempo de processamento para um visto EB-3 pode variar e levar vários meses a vários anos. Não há maneira de acelerar o processo, exceto através do processamento premium, que pode levar 15 dias corridos.",
      q5: "Qual é a taxa de aprovação do processo EB-3?",
      a5: "A taxa de aprovação para o processo EB-3 varia dependendo de fatores como o tipo de emprego e documentação. As taxas específicas podem flutuar ao longo do tempo e entre indústrias.",
      q6: "Que tipo de trabalho estou solicitando através do seu Programa de Visto EB-3?",
      a6: "Trabalho não qualificado que não é sazonal nem temporário. As posições podem incluir empregos que exigem menos de dois anos de treinamento ou experiência.",
      q7: "Qual é a diferença entre EB-3 e outros vistos baseados em emprego?",
      a7: "A principal diferença é o nível de habilidade exigido para a oferta de emprego. Os vistos EB-3 são para trabalhadores menos qualificados, enquanto os vistos EB-1 são para indivíduos com habilidades extraordinárias, os vistos EB-2 são para indivíduos com diplomas avançados ou habilidades excepcionais, e os vistos EB-4 são para trabalhadores religiosos.",
      q8: "Quais são os requisitos para uma petição EB-3 e quais documentos são necessários?",
      a8: "Os requisitos incluem uma oferta de emprego, uma certificação de trabalho e um Formulário I-140 aprovado, Petição de Imigrante para Trabalhador Estrangeiro. Outros documentos necessários incluem evidências das qualificações, educação e experiência de trabalho do indivíduo.",
      q9: "Posso incluir meu cônjuge e filhos no processo EB-3?",
      a9: "Sim, geralmente é possível incluir seu cônjuge e filhos solteiros menores de 21 anos em sua aplicação de visto EB-3 como dependentes. Eles podem acompanhá-lo para os Estados Unidos sob certas condições.",
      q10: "Em que momento recebo a residência americana através do processo EB-3?",
      a10: "Você recebe a residência americana através do processo EB-3 após concluir todas as etapas necessárias e obter aprovação para sua aplicação de visto de imigrante. Uma vez que sua petição de visto de imigrante EB-3 é aprovada, e você passou pelo processamento consular necessário (se estiver fora dos EUA) ou ajuste de status (se estiver nos EUA), você pode ser concedido o status de residente permanente legal, comumente conhecido como green card. Isso permite que você viva e trabalhe permanentemente nos Estados Unidos.",
      q11: "Quais formulários são necessários para o processo EB-3?",
      a11: "O processo EB-3 requer formulários como a certificação de trabalho PERM, Formulário I-140, e either Formulário DS-260 para processamento consular ou Formulário I-485 para ajuste de status nos EUA.",
      q12: "O que é o Formulário I-140?",
      a12: "O Formulário I-140, conhecido como 'Petição de Imigrante para Trabalhador Estrangeiro', é um documento apresentado ao Serviço de Cidadania e Imigração dos Estados Unidos (USCIS) por um empregador nos EUA em nome de um trabalhador estrangeiro. Seu objetivo principal é demonstrar uma oferta de emprego válida para o trabalhador estrangeiro e que o trabalhador possui as qualificações, experiência e educação necessárias para aquela posição permanente nos Estados Unidos.",
      q13: "O que é o Formulário I-485?",
      a13: "O I-485 é o formulário de aplicação usado para solicitar uma mudança de status de não imigrante para residente permanente nos EUA.",
      q14: "Posso viajar com um visto de turista durante o processo EB-3?",
      a14: "Viajar com um visto de turista durante o processo EB-3 pode ser arriscado. É crucial ser transparente sobre suas intenções e consultar um advogado de imigração antes de fazê-lo.",
      q15: "Quanto tempo leva o ajuste de status?",
      a15: "O tempo para o ajuste de status na categoria EB-3 varia; pode variar de vários meses a quase um ano, dependendo do caso e do escritório do USCIS.",
      q16: "Posso explorar o processo EB-3 tendo asilo nos EUA?",
      a16: "É possível explorar o processo EB-3 se você tiver asilo nos Estados Unidos. É essencial considerar todos os aspectos envolvidos e buscar orientação legal especializada para navegar com sucesso pelo processo.",
      q17: "Posso explorar o processo EB-3 tendo asilo nos EUA?",
      a17: "É possível explorar o processo EB-3 se você tiver asilo nos Estados Unidos. É essencial considerar todos os aspectos envolvidos e buscar orientação legal especializada para navegar com sucesso pelo processo.",
      q18: "Posso fazer o processo EB-3 por conta própria?",
      a18: "Sim, você pode tentar conduzir o processo EB-3 por conta própria, mas é intricado. Muitas pessoas optam por consultar um advogado de imigração para obter orientação.",
      q19: "Quais termos podem levar à recusa do visto EB-3?",
      a19: "Motivos para a recusa do visto EB-3 podem incluir problemas de inadmissibilidade, documentação incompleta, problemas de elegibilidade do empregador, mudanças significativas nas circunstâncias, preocupações com a credibilidade durante as entrevistas ou casos de fraude ou má representação.",
      q20: "Como posso entrar em contato com a EB-3 Workforce Solutions para obter mais informações ou iniciar o processo de inscrição?",
      a20: "Por favor, preencha o seguinte formulário: https://form.jotform.com/EB3_Recruiter/eligibility-eb3wfs ou nos envie uma mensagem em nossa linha do WhatsApp: https://bit.ly/EB3WFS e o ajudaremos em breve.",
    },
    fr: {
      title1: "Questions fréquemment posées",
      q1: "Qu'est-ce que la catégorie de visa EB-3 et qui est éligible?",
      a1: "La catégorie de visa EB-3 est un visa d'immigration basé sur l'emploi pour les travailleurs qualifiés, les professionnels et les travailleurs non qualifiés. Les personnes éligibles doivent avoir une offre d'emploi et une certification du travail du Département du Travail.",
      q2: "Pourquoi les visas EB-3 ont-ils été créés?",
      a2: "Les visas EB-3 ont été créés pour répondre à des besoins spécifiques sur le marché du travail aux États-Unis en permettant aux employeurs d'embaucher des travailleurs étrangers qualifiés, favorisant la croissance économique et comblant des postes vacants qui ne peuvent pas être facilement pourvus par des travailleurs américains.",
      q3: "Le processus EB-3 est-il légitime?",
      a3: "Le processus de visa EB-3 est une voie légitime d'immigration aux États-Unis conçue pour les travailleurs qualifiés, les professionnels et d'autres travailleurs avec une offre d'emploi d'un employeur américain. Il implique des étapes spécifiques, y compris la certification du travail et le dépôt de pétition, supervisées par des agences gouvernementales telles que le Département du Travail et l'USCIS.",
      q4: "Quel est le délai de traitement pour un visa EB-3 et comment peut-il être accéléré?",
      a4: "Le délai de traitement pour un visa EB-3 peut varier et prendre plusieurs mois à plusieurs années. Il n'y a pas de moyen d'accélérer le processus, sauf par le biais du traitement premium, qui peut prendre 15 jours calendaires.",
      q5: "Quel est le taux d'approbation du processus EB-3?",
      a5: "Le taux d'approbation du processus EB-3 varie en fonction de facteurs tels que le type d'emploi et la documentation. Les taux spécifiques peuvent fluctuer dans le temps et selon les industries.",
      q6: "Quel type de travail est-ce que je demande à travers votre Programme de Visa EB-3?",
      a6: "Il s'agit de travail non qualifié qui n'est ni saisonnier ni temporaire. Les postes peuvent inclure des emplois nécessitant moins de deux ans de formation ou d'expérience.",
      q7: "Quelle est la différence entre EB-3 et d'autres visas basés sur l'emploi?",
      a7: "La principale différence est le niveau de compétence requis pour l'offre d'emploi. Les visas EB-3 sont destinés aux travailleurs moins qualifiés, tandis que les visas EB-1 sont destinés aux personnes ayant des capacités extraordinaires, les visas EB-2 aux personnes titulaires de diplômes avancés ou ayant des capacités exceptionnelles, et les visas EB-4 aux travailleurs religieux.",
      q8: "Quelles sont les exigences pour une pétition EB-3 et quels documents sont nécessaires?",
      a8: "Les exigences comprennent une offre d'emploi, une certification du travail et un formulaire I-140 approuvé, Pétition d'Immigrant pour Travailleur Etranger. Les autres documents requis incluent des preuves des qualifications, de l'éducation et de l'expérience professionnelle de l'individu.",
      q9: "Puis-je inclure mon conjoint et mes enfants dans le processus EB-3?",
      a9: "Oui, vous pouvez généralement inclure votre conjoint et vos enfants non mariés de moins de 21 ans dans votre demande de visa EB-3 en tant que personnes à charge. Ils peuvent vous accompagner aux États-Unis sous certaines conditions.",
      q10: "À quel moment obtiens-je la résidence américaine à travers le processus EB-3?",
      a10: "Vous obtenez la résidence américaine grâce au processus EB-3 après avoir accompli toutes les étapes requises et obtenu l'approbation de votre demande de visa immigrant. Une fois que votre pétition de visa immigrant EB-3 est approuvée, et que vous avez suivi le traitement consulaire nécessaire (si vous êtes à l'extérieur des États-Unis) ou l'ajustement de statut (si vous êtes aux États-Unis), vous pouvez obtenir le statut de résident permanent légal, communément appelé carte verte. Cela vous permet de vivre et de travailler de manière permanente aux États-Unis.",
      q11: "Quels formulaires sont nécessaires pour le processus EB-3?",
      a11: "Le processus EB-3 nécessite des formulaires tels que la certification du travail PERM, le formulaire I-140, et soit le formulaire DS-260 pour le traitement consulaire, soit le formulaire I-485 pour l'ajustement de statut aux États-Unis.",
      q12: "Qu'est-ce que le formulaire I-140?",
      a12: "Le formulaire I-140, connu sous le nom de 'Pétition d'Immigrant pour Travailleur Etranger', est un document déposé auprès du Service de Citoyenneté et d'Immigration des États-Unis (USCIS) par un employeur américain au nom d'un travailleur étranger. Son objectif principal est de démontrer une offre d'emploi valide pour le travailleur étranger et que celui-ci possède les qualifications, l'expérience et l'éducation nécessaires pour ce poste permanent aux États-Unis.",
      q13: "Qu'est-ce que le formulaire I-485?",
      a13: "Le formulaire I-485 est le formulaire de demande utilisé pour demander un changement de statut de non-immigrant à résident permanent aux États-Unis.",
      q14: "Puis-je voyager avec un visa touristique pendant le processus EB-3?",
      a14: "Voyager avec un visa touristique pendant le processus EB-3 peut être risqué. Il est crucial d'être transparent sur vos intentions et de consulter un avocat en immigration avant de le faire.",
      q15: "Combien de temps dure l'ajustement de statut?",
      a15: "Le temps nécessaire pour l'ajustement de statut dans la catégorie EB-3 varie ; cela peut aller de plusieurs mois à près d'un an, en fonction du cas et du bureau de l'USCIS.",
      q16: "Puis-je explorer le processus EB-3 avec l'asile aux États-Unis?",
      a16: "Il est possible d'explorer le processus EB-3 si vous avez l'asile aux États-Unis. Il est essentiel de prendre en compte tous les aspects impliqués et de rechercher les conseils juridiques d'experts pour naviguer avec succès dans le processus.",
      q17: "Puis-je explorer le processus EB-3 avec l'asile aux États-Unis?",
      a17: "Il est possible d'explorer le processus EB-3 si vous avez l'asile aux États-Unis. Il est essentiel de prendre en compte tous les aspects impliqués et de rechercher les conseils juridiques d'experts pour naviguer avec succès dans le processus.",
      q18: "Puis-je faire le processus EB-3 par moi-même?",
      a18: "Oui, vous pouvez tenter de gérer le processus EB-3 par vous-même, mais c'est complexe. Beaucoup de personnes choisissent de consulter un avocat en immigration pour obtenir des conseils.",
      q19: "Quels termes peuvent entraîner le refus de la visa EB-3?",
      a19: "Les raisons du refus de la visa EB-3 peuvent inclure des problèmes d'inadmissibilité, une documentation incomplète, des problèmes d'éligibilité de l'employeur, des changements significatifs de circonstances, des préoccupations de crédibilité lors des entretiens, ou des cas de fraude ou de fausse représentation.",
      q20: "Comment puis-je contacter EB-3 Workforce Solutions pour obtenir plus d'informations ou commencer le processus de candidature?",
      a20: "Veuillez remplir le formulaire suivant : https://form.jotform.com/EB3_Recruiter/eligibility-eb3wfs ou envoyez-nous un message sur notre ligne WhatsApp : https://bit.ly/EB3WFS et nous vous assisterons rapidement.",
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
    {
      id: 15,
      question: faqContent.q15,
      answer: faqContent.a15,
    },
    {
      id: 16,
      question: faqContent.q16,
      answer: faqContent.a16,
    },
    {
      id: 17,
      question: faqContent.q17,
      answer: faqContent.a17,
    },
    {
      id: 18,
      question: faqContent.q18,
      answer: faqContent.a18,
    },
    {
      id: 19,
      question: faqContent.q19,
      answer: faqContent.a19,
    },
    {
      id: 20,
      question: faqContent.q20,
      answer: faqContent.a20,
    },
  ];

  return (
    <>
      <IHeroResources language={language} />
      <ISection>
        {/*  <div className="flex justify-center">
          <iframe
            style={{
              width: "400px",
              height: "600px",
            }}
            src="https://app.fastbots.ai/embed/clp49y8mo01zcppb2l06ww4s1"
          ></iframe>
        </div> */}
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

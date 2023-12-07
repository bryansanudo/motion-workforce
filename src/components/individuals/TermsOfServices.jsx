import ISection from "@/components/individuals/ISection";
import TitleContent from "@/components/individuals/TitleContent";
import { styles } from "@/styles";
const TermsOfServices = ({ language }) => {
  const terms = {
    en: {
      title: "Web Site Terms and Conditions of Use",
      t1: "Terms",
      p1: "Web Site Terms and Conditions of UseTermsThe Terms and Conditions of Use Agreement (“Agreement” is between you and EB-3 Workforce Solutions, LLC (“EB-3 Workforce Solutions”)), and governs your use of the website located at www.eb3wfs.com (including all subdomains) (the “Site”) and the services provided by EB-3 Workforce Solutions (the “Services”). By accessing this web site, you are agreeing to be bound by this Agreement, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. The materials contained in this web site are protected by applicable copyright and trade mark law. You are also subject to the terms of EB-3 Workforce Solutions Privacy Policy. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The Site and Services are intended for use by persons 18 years of age or older. If you are under 18 years of age, you may not access or use the Site or Services.",
      t2: "Use License",
      p2: "Permission is granted to temporarily download one copy of the materials (information or software) on EB-3 Workforce Solutions’s web site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose, or for any public display (commercial or non-commercial); attempt to decompile or reverse engineer any software contained on EB-3 Workforce Solutions’s web site; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or “mirror” the materials on any other server. This license shall automatically terminate if you violate any of these restrictions and may be terminated by EB-3 Workforce Solutions at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.",
      t3: "Disclaimer",
      p3: "The materials on EB-3 Workforce Solutions’s web site are provided “as is”. EB-3 Workforce Solutions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, EB-3 Workforce Solutions does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.",
      t4: "Limitations",
      p4: "In no event shall EB-3 Workforce Solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on EB-3 Workforce Solutions’s Internet site, even if EB-3 Workforce Solutions or a EB-3 Workforce Solutions authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.Revisions and ErrataThe materials appearing on EB-3 Workforce Solutions’s web site could include technical, typographical, or photographic errors. EB-3 Workforce Solutions does not warrant that any of the materials on its web site are accurate, complete, or current. EB-3 Workforce Solutions may make changes to the materials contained on its web site at any time without notice. EB-3 Workforce Solutions does not, however, make any commitment to update the materials.",
      t5: "Links",
      p5: "EB-3 Workforce Solutions has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by EB-3 Workforce Solutions of the site. Use of any such linked web site is at the user’s own risk.Site Terms of Use ModificationsEB-3 Workforce Solutions may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.",
      t6: "Governing Law",
      p6: "Any claim relating to EB-3 Workforce Solutions’s web site shall be governed by the laws of the State of South Carolina without regard to its conflict of law provisions.General Terms and Conditions applicable to Use of a Web Site. EB-3 Workforce Solutions does not consider the race, color, religion, sex (including pregnancy, gender identity, and sexual orientation), national origin, age (40 and over), disability, genetic information (including family medical history), or military service in any of its dealings with or decisions regarding the placement of foreign nationals, including its decisions whether to recommend prospective foreign nationals for employment, pursuant to federal law.",
    },
    es: {
      title: "Condiciones de uso del sitio web",
      t1: "Términos",
      p1: 'Términos y Condiciones de Uso del Sitio WebTérminosEl Acuerdo de Términos y Condiciones de Uso ("Acuerdo" es entre usted y EB-3 Workforce Solutions, LLC ("EB-3 Workforce Solutions")), y rige el uso del sitio web ubicado en www.eb3wfs.com (incluyendo todos los subdominios) (el "Sitio") y los servicios prestados por EB-3 Workforce Solutions (los "Servicios"). Al acceder a este sitio web, usted acepta estar obligado por este Acuerdo, todas las leyes y reglamentos aplicables, y acepta que usted es responsable del cumplimiento de las leyes locales aplicables. Los materiales contenidos en este sitio web están protegidos por la legislación aplicable en materia de derechos de autor y marcas. Usted también está sujeto a los términos de la Política de Privacidad de EB-3 Workforce Solutions. Si usted no está de acuerdo con cualquiera de estos términos, se le prohíbe el uso o acceso a este sitio. El Sitio y los Servicios están destinados a ser utilizados por personas mayores de 18 años. Si usted es menor de 18 años, no puede acceder o utilizar el Sitio o los Servicios.',
      t2: "Licencia de uso",
      p2: 'Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web de EB-3 Workforce Solutions sólo para uso personal, no comercial y transitorio. Esta es la concesión de una licencia, no una transferencia de título, y bajo esta licencia usted no puede: modificar o copiar los materiales; utilizar los materiales para cualquier propósito comercial, o para cualquier exhibición pública (comercial o no comercial); intentar descompilar o realizar ingeniería inversa de cualquier software contenido en el sitio web de EB-3 Workforce Solutions; eliminar cualquier derecho de autor u otras anotaciones de propiedad de los materiales; o transferir los materiales a otra persona o "reflejar" los materiales en cualquier otro servidor. Esta licencia terminará automáticamente si usted viola cualquiera de estas restricciones y puede ser terminada por EB-3 Workforce Solutions en cualquier momento. Al terminar su visualización de estos materiales o al terminar esta licencia, usted debe destruir cualquier material descargado en su posesión ya sea en formato electrónico o impreso.',
      t3: "Descargo de responsabilidad",
      p3: 'Los materiales en el sitio web de EB-3 Workforce Solutions se proporcionan "tal cual". EB-3 Workforce Solutions no ofrece ninguna garantía, expresa o implícita, y por la presente renuncia y niega todas las demás garantías, incluyendo, sin limitación, las garantías implícitas o condiciones de comercialización, adecuación para un propósito particular, o no infracción de la propiedad intelectual u otra violación de los derechos. Además, EB-3 Workforce Solutions no garantiza ni hace ninguna representación con respecto a la exactitud, los resultados probables, o la fiabilidad de la utilización de los materiales en su sitio web de Internet o de otro tipo relativa a dichos materiales o en cualquier sitio vinculado a este sitio. ',
      t4: "Limitaciones",
      p4: "En ningún caso EB-3 Workforce Solutions o sus proveedores serán responsables de cualquier daño (incluyendo, sin limitación, daños por pérdida de datos o beneficios, o debido a la interrupción del negocio,) que surjan del uso o la imposibilidad de usar los materiales en el sitio de Internet de EB-3 Workforce Solutions, incluso si EB-3 Workforce Solutions o un representante autorizado de EB-3 Workforce Solutions ha sido notificado oralmente o por escrito de la posibilidad de tales daños. Debido a que algunas jurisdicciones no permiten limitaciones en garantías implícitas, o limitaciones de responsabilidad por daños consecuenciales o incidentales, estas limitaciones pueden no aplicarse a usted.Revisiones y ErratasLos materiales que aparecen en el sitio web de EB-3 Workforce Solutions pueden incluir errores técnicos, tipográficos o fotográficos. EB-3 Workforce Solutions no garantiza que cualquiera de los materiales en su sitio web sean precisos, completos o actuales. EB-3 Workforce Solutions puede hacer cambios a los materiales contenidos en su sitio web en cualquier momento sin previo aviso. Sin embargo, EB-3 Workforce Solutions no se compromete a actualizar los materiales.",
      t5: "Enlaces",
      p5: "EB-3 Workforce Solutions no ha revisado todos los sitios vinculados a su sitio web de Internet y no es responsable de los contenidos de dichos sitios vinculados. La inclusión de cualquier enlace no implica la aprobación del sitio por EB-3 Workforce Solutions. El uso de cualquier sitio web vinculado es bajo el propio riesgo del usuario.Términos de Uso del Sitio ModificacionesEB-3 Workforce Solutions puede revisar estos términos de uso de su sitio web en cualquier momento sin previo aviso. Al utilizar este sitio web usted acepta estar obligado por la versión vigente de estos Términos y Condiciones de Uso.",
      t6: "Ley aplicable",
      p6: "Cualquier reclamación relacionada con el sitio web de EB-3 Workforce Solutions se regirá por las leyes del Estado de Carolina del Sur, sin tener en cuenta su conflicto de disposiciones legales.Términos y condiciones generales aplicables al uso de un sitio web. EB-3 Workforce Solutions no tiene en cuenta la raza, el color, la religión, el sexo (incluidos el embarazo, la identidad de género y la orientación sexual), el origen nacional, la edad (a partir de los 40 años), la discapacidad, la información genética (incluidos los antecedentes médicos familiares) o el servicio militar en ninguna de sus relaciones o decisiones relativas a la colocación de ciudadanos extranjeros, incluidas sus decisiones de recomendar o no a posibles ciudadanos extranjeros para el empleo, de conformidad con la legislación federal.",
    },
    por: {
      title: "Termos e condições de utilização do sítio Web",
      t1: "Termos",
      p1: 'Termos e Condições de Utilização do Web SiteTermosOs Termos e Condições de Utilização ("Acordo") são celebrados entre o utilizador e a EB-3 Workforce Solutions, LLC ("EB-3 Workforce Solutions") e regem a utilização do Web site localizado em www.eb3wfs.com (incluindo todos os subdomínios) (o "Site") e os serviços fornecidos pela EB-3 Workforce Solutions (os "Serviços"). Ao aceder a este site, o utilizador concorda em ficar vinculado a este Acordo, a todas as leis e regulamentos aplicáveis, e concorda que é responsável pelo cumprimento de quaisquer leis locais aplicáveis. Os materiais contidos neste sítio Web estão protegidos pela legislação aplicável em matéria de direitos de autor e marcas comerciais. O utilizador também está sujeito aos termos da Política de Privacidade da EB-3 Workforce Solutions. Se o utilizador não concordar com qualquer um destes termos, está proibido de utilizar ou aceder a este sítio. O Sítio e os Serviços destinam-se a ser utilizados por pessoas com 18 anos de idade ou mais. Se o utilizador tiver menos de 18 anos de idade, não pode aceder ou utilizar o Sítio ou os Serviços',
      t2: "Licença de utilização.",
      p2: 'É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site da EB-3 Workforce Solutions apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título, e sob esta licença você não pode: modificar ou copiar os materiais; usar os materiais para qualquer finalidade comercial ou para qualquer exibição pública (comercial ou não comercial); tentar descompilar ou fazer engenharia reversa de qualquer software contido no site da EB-3 Workforce Solutions; remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou transferir os materiais para outra pessoa ou "espelhar" os materiais em qualquer outro servidor. Esta licença será automaticamente rescindida se você violar qualquer uma dessas restrições e pode ser rescindida pela EB-3 Workforce Solutions a qualquer momento. Ao terminar a visualização destes materiais ou ao terminar esta licença, deve destruir todos os materiais descarregados na sua posse, quer em formato eletrónico ou impresso.',
      t3: "Declaração de exoneração de responsabilidade",
      p3: 'Os materiais no site da EB-3 Workforce Solutions são fornecidos "como estão". A EB-3 Workforce Solutions não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a uma finalidade específica ou não violação de propriedade intelectual ou outra violação de direitos. Além disso, a EB-3 Workforce Solutions não garante ou faz quaisquer representações relativas à exatidão, resultados prováveis ou fiabilidade da utilização dos materiais no seu sítio Web da Internet ou de outra forma relacionados com esses materiais ou em quaisquer sítios ligados a este sítio.',
      t4: "Limitações",
      p4: "Em nenhum caso a EB-3 Workforce Solutions ou os seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucros, ou devido a interrupção de negócios) decorrentes do uso ou incapacidade de usar os materiais no site da EB-3 Workforce Solutions na Internet, mesmo que a EB-3 Workforce Solutions ou um representante autorizado da EB-3 Workforce Solutions tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.Revisões e ErratasOs materiais que aparecem no site da EB-3 Workforce Solutions podem incluir erros técnicos, tipográficos ou fotográficos. A EB-3 Workforce Solutions não garante que qualquer um dos materiais em seu site seja preciso, completo ou atual. A EB-3 Workforce Solutions pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. A EB-3 Workforce Solutions, no entanto, não se compromete a atualizar os materiais.",
      t5: "Ligações",
      p5: "A EB-3 Workforce Solutions não analisou todos os sítios ligados ao seu sítio Web da Internet e não é responsável pelo conteúdo de nenhum desses sítios ligados. A inclusão de qualquer link não implica o endosso da EB-3 Workforce Solutions ao site. O uso de qualquer site vinculado é por conta e risco do usuário.Modificações nos Termos de Uso do SiteA EB-3 Workforce Solutions pode revisar estes termos de uso para seu site a qualquer momento, sem aviso prévio. Ao utilizar este sítio Web, o utilizador concorda em ficar vinculado à versão atual dos presentes Termos e Condições de Utilização",
      t6: "Lei aplicável",
      p6: "Qualquer reclamação relacionada com o sítio Web da EB-3 Workforce Solutions será regida pelas leis do Estado da Carolina do Sul, sem ter em conta o seu conflito de disposições legais. Termos e condições gerais aplicáveis à utilização de um sítio Web. A EB-3 Workforce Solutions não considera a raça, cor, religião, sexo (incluindo gravidez, identidade de género e orientação sexual), nacionalidade, idade (40 anos ou mais), incapacidade, informação genética (incluindo historial médico familiar) ou serviço militar em qualquer dos seus negócios ou decisões relativas à colocação de cidadãos estrangeiros, incluindo as suas decisões de recomendar ou não potenciais cidadãos estrangeiros para emprego, de acordo com a lei federal",
    },
    fr: {
      title: "Conditions d'utilisation du site web",
      t1: "Conditions",
      p1: "Termes et conditions d'utilisation du site webTermesL'accord sur les termes et conditions d'utilisation (accord) est conclu entre vous et EB-3 Workforce Solutions, LLC (EB-3 Workforce Solutions), et régit votre utilisation du site web situé à l'adresse www.eb3wfs.com (y compris tous les sous-domaines) (le site) et les services fournis par EB-3 Workforce Solutions (les services). En accédant à ce site web, vous acceptez d'être lié par cet accord, par toutes les lois et réglementations applicables, et vous acceptez d'être responsable du respect de toutes les lois locales applicables. Les éléments contenus dans ce site web sont protégés par la législation applicable en matière de droits d'auteur et de marques commerciales. Vous êtes également soumis aux conditions de la politique de confidentialité de EB-3 Workforce Solutions. Si vous n'acceptez pas l'une de ces conditions, il vous est interdit d'utiliser ce site ou d'y accéder. Le site et les services sont destinés à être utilisés par des personnes âgées de 18 ans ou plus. Si vous avez moins de 18 ans, vous ne pouvez pas accéder ou utiliser le site ou les services",
      t2: "Licence d'utilisation",
      p2: "Il est permis de télécharger temporairement une copie du matériel (information ou logiciel) sur le site web de EB-3 Workforce Solutions pour une visualisation transitoire personnelle et non commerciale uniquement. Il s'agit d'une licence et non d'un transfert de titre, et dans le cadre de cette licence, vous ne pouvez pas : modifier ou copier le matériel ; utiliser le matériel à des fins commerciales ou pour une présentation publique (commerciale ou non commerciale) ; tenter de décompiler ou d'inverser l'ingénierie de tout logiciel contenu sur le site Web de EB-3 Workforce Solutions ; supprimer tout droit d'auteur ou toute autre mention de propriété du matériel ; ou transférer le matériel à une autre personne ou refléter le matériel sur un autre serveur. Cette licence sera automatiquement résiliée si vous violez l'une de ces restrictions et peut être résiliée par EB-3 Workforce Solutions à tout moment. Lorsque vous cessez de consulter ces documents ou lorsque la présente licence prend fin, vous devez détruire tous les documents téléchargés en votre possession, qu'ils soient sous forme électronique ou imprimée",
      t3: "Avis de non-responsabilité",
      p3: "Les documents présents sur le site web de EB-3 Workforce Solutions sont fournis en l'état. EB-3 Workforce Solutions ne donne aucune garantie, expresse ou implicite, et rejette par la présente toutes les autres garanties, y compris, mais sans s'y limiter, les garanties ou conditions implicites de qualité marchande, d'adéquation à un usage particulier, ou de non-violation de la propriété intellectuelle ou d'autres violations des droits. En outre, EB-3 Workforce Solutions ne garantit pas et ne fait aucune déclaration concernant l'exactitude, les résultats probables ou la fiabilité de l'utilisation des documents sur son site Internet ou de tout autre document lié à ces documents ou à tout autre site lié à ce site",
      t4: "Limitations",
      p4: "En aucun cas EB-3 Workforce Solutions ou ses fournisseurs ne pourront être tenus responsables des dommages (y compris, mais sans s'y limiter, les dommages liés à la perte de données ou de bénéfices, ou à l'interruption d'activité) résultant de l'utilisation ou de l'impossibilité d'utiliser les documents du site Internet de EB-3 Workforce Solutions, même si EB-3 Workforce Solutions ou un représentant autorisé de EB-3 Workforce Solutions a été informé oralement ou par écrit de l'éventualité de tels dommages. Dans la mesure où certaines juridictions n'autorisent pas les limitations sur les garanties implicites ou les limitations de responsabilité pour les dommages consécutifs ou indirects, ces limitations peuvent ne pas s'appliquer à vous.Révisions et errataLes documents figurant sur le site Web de EB-3 Workforce Solutions peuvent contenir des erreurs techniques, typographiques ou photographiques. EB-3 Workforce Solutions ne garantit pas que les documents figurant sur son site web sont exacts, complets ou à jour. EB-3 Workforce Solutions peut modifier le contenu de son site web à tout moment et sans préavis. EB-3 Workforce Solutions ne s'engage toutefois pas à mettre à jour les documents",
      t5: "Liens",
      p5: "EB-3 Workforce Solutions n'a pas examiné tous les sites liés à son site Internet et n'est pas responsable du contenu de ces sites. L'inclusion d'un lien n'implique pas l'approbation du site par EB-3 Workforce Solutions. Modifications des conditions d'utilisation du siteEB-3 Workforce Solutions peut réviser les présentes conditions d'utilisation de son site Internet à tout moment et sans préavis. En utilisant ce site Web, vous acceptez d'être lié par la version la plus récente de ces conditions d'utilisation",
      t6: "Droit applicable",
      p6: "Toute réclamation relative au site web de EB-3 Workforce Solutions est régie par les lois de l'État de Caroline du Sud, sans tenir compte des dispositions relatives aux conflits de lois.Conditions générales applicables à l'utilisation d'un site web. EB-3 Workforce Solutions ne tient pas compte de la race, de la couleur, de la religion, du sexe (y compris la grossesse, l'identité de genre et l'orientation sexuelle), de l'origine nationale, de l'âge (40 ans et plus), du handicap, des informations génétiques (y compris les antécédents médicaux de la famille) ou du service militaire dans ses relations avec les ressortissants étrangers ou dans ses décisions concernant le placement de ces derniers, y compris ses décisions de recommander ou non des ressortissants étrangers potentiels à l'emploi, conformément à la loi fédérale",
    },
  };
  const termsContent = terms[language];
  return (
    <ISection>
      <div className="mt-20">
        <TitleContent title={termsContent.title}>
          <div className={`${styles.sectionTitleText} `}>
            <p className="font-bold">{termsContent.t1}</p>
            {termsContent.p1}
          </div>
          <div className={`${styles.sectionTitleText} `}>
            <p className="font-bold">{termsContent.t2}</p>
            {termsContent.p2}
          </div>
          <div className={`${styles.sectionTitleText} `}>
            <p className="font-bold">{termsContent.t3}</p>
            {termsContent.p3}
          </div>
          <div className={`${styles.sectionTitleText} `}>
            <p className="font-bold">{termsContent.t4}</p>
            {termsContent.p4}
          </div>
          <div className={`${styles.sectionTitleText} `}>
            <p className="font-bold">{termsContent.t5}</p>
            {termsContent.p5}
          </div>
          <div className={`${styles.sectionTitleText} `}>
            <p className="font-bold">{termsContent.t6}</p>
            {termsContent.p6}
          </div>
        </TitleContent>
      </div>
    </ISection>
  );
};

export default TermsOfServices;

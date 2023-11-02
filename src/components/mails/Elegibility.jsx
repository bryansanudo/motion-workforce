import React from "react";

const Elegibility = ({ mail, setMail }) => {
  const elegibility = {
    en: {
      p1: "We noticed that you were interested in the EB-3 Green Card program in 2020/2021. Understanding the importance of this program for your future, we're reaching out with an exclusive, limited-time offer tailored just for you.",
      p2: "We are excited to offer you the opportunity to apply for an EB3 Green Card program at just 35% of the typical market rate you may have been quoted in 2020/2021.",
      p3: "This is an unparalleled chance to secure your future in the United States, and we designed this offer with aspirants like you in mind.",
      p4: "To find out if you qualify for this incredible offer, please fill out the form below, available in English, Spanish and Portuguese.",
      p5: "If you qualify, you'll be able to schedule an appointment with us to get started on your way to Permanent Residency.",
      p6: "We're here to assist you every step of the way as you navigate this inportant journey.",
    },
    es: {
      p1: "Nos hemos dado cuenta de que está interesado en el programa de la Tarjeta Verde EB-3 en 2020/2021. Entendiendo la importancia de este programa para su futuro, estamos llegando a usted con una oferta exclusiva, por tiempo limitado, hecha a su medida",
      p2: "Estamos encantados de ofrecerle la oportunidad de solicitar un programa de Tarjeta Verde EB3 a tan solo el 35% de la tarifa típica de mercado que le pueden haber cotizado en 2020/2021",
      p3: "Esta es una oportunidad sin igual para asegurar su futuro en los Estados Unidos, y hemos diseñado esta oferta pensando en aspirantes como usted",
      p4: "Para saber si cumples los requisitos para esta increíble oferta, rellena el siguiente formulario, disponible en inglés, español y portugués",
      p5: "Si reúne los requisitos, podrá concertar una cita con nosotros para iniciar su camino hacia la Residencia Permanente",
      p6: "Estamos aquí para ayudarle en cada paso de este importante viaje",
    },
    por: {
      p1: "Reparámos que estava interessado no programa EB-3 Green Card em 2020/2021. Compreendendo a importância deste programa para o seu futuro, estamos a contactá-lo com uma oferta exclusiva e por tempo limitado, feita à sua medida.",
      p2: "Estamos entusiasmados por lhe oferecer a oportunidade de se candidatar a um programa de Green Card EB3 por apenas 35% da taxa de mercado típica que pode ter sido cotada em 2020/2021.",
      p3: "Esta é uma oportunidade sem paralelo para garantir o seu futuro nos Estados Unidos e concebemos esta oferta a pensar em aspirantes como você",
      p4: "Para saber se se qualifica para esta incrível oferta, preencha o formulário abaixo, disponível em inglês, espanhol e português.",
      p5: "Se se qualificar, poderá marcar uma reunião connosco para começar o seu caminho para a Residência Permanente.",
      p6: "Estamos aqui para o ajudar em cada passo do caminho enquanto navega nesta importante jornada.",
    },
    fr: {
      p1: "Nous avons remarqué que vous étiez intéressé par le programme de carte verte EB-3 en 2020/2021. Conscients de l'importance de ce programme pour votre avenir, nous vous proposons une offre exclusive et limitée dans le temps, conçue spécialement pour vous",
      p2: "Nous sommes ravis de vous offrir la possibilité de postuler à un programme de carte verte EB3 à seulement 35 % du taux typique du marché qui vous aurait été proposé en 2020/2021",
      p3: "Il s'agit d'une chance inégalée d'assurer votre avenir aux États-Unis, et nous avons conçu cette offre en pensant à des candidats comme vous",
      p4: "Pour savoir si vous pouvez bénéficier de cette offre incroyable, veuillez remplir le formulaire ci-dessous, disponible en anglais, en espagnol et en portugais",
      p5: "Si vous remplissez les conditions requises, vous pourrez prendre rendez-vous avec nous pour entamer votre parcours vers la résidence permanente",
      p6: "Nous sommes là pour vous aider à chaque étape de ce voyage important",
    },
  };
  const elegibilityContent = elegibility[mail];
  return (
    <div className="flex flex-col  pt-40  ">
      <p>{elegibilityContent.p1}</p>
      <p>{elegibilityContent.p2}</p>
      <p>{elegibilityContent.p3}</p>
      <p>{elegibilityContent.p4}</p>
      <p>{elegibilityContent.p5}</p>
      <iframe
        id="JotFormIFrame-232636593677672"
        title="Eligibility EB3WFS"
        onLoad={() => {
          window.parent.scrollTo(0, 0);
        }}
        allowtransparency="true"
        allowFullScreen="True"
        allow="geolocation; microphone; camera"
        src="https://form.jotform.com/EB3_Recruiter/eligibility-eb3wfs"
        frameBorder="0"
        style={{
          minWidth: "100%",
          maxWidth: "100%",
          height: "539px",
          border: "none",
        }}
        scrolling="no"
      ></iframe>
      {/* steps */}
      <p>{elegibilityContent.p6}</p>
    </div>
  );
};

export default Elegibility;

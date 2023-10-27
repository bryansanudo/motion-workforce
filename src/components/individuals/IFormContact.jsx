import React from "react";
import TitleContent from "@/components/individuals/TitleContent";
import { styles } from "@/styles";

const IFormContact = ({ color, language = "en" }) => {
  const form = {
    en: {
      title1: "Get in touch today!",
      title2:
        "Fill out the form below and we'll get back to you as soon as possible.",
      name: "Name",
      lastName: "Last name",
      email: "Email",
      phone: "Phone",
      questions: "Your questions",
    },
    es: {
      title1: "¡Póngase en contacto hoy mismo!",
      title2:
        "Rellene el siguiente formulario y nos pondremos en contacto con usted lo antes posible",
      name: "Nombre",
      lastName: "Apellidos",
      email: "Correo electrónico",
      phone: "Teléfono",
      questions: "Sus preguntas",
    },
    por: {
      title1: "Entre em contacto hoje!",
      title2:
        "Preencha o formulário abaixo e entraremos em contacto consigo o mais rapidamente possível",
      name: "Nome",
      lastName: "Apelido",
      email: "Email",
      phone: "Telefone",
      questions: "As suas perguntas",
    },
  };
  const formContent = form[language];
  return (
    <TitleContent>
      <h2
        className={`from-${color} font-bold text-2xl text-center p-3 text-transparent bg-clip-text  bg-gradient-to-r  to-gray-500  md:text-4xl tracking-wider `}
      >
        {formContent.title1}
      </h2>
      <p className={`${styles.sectionTitleText}`}>{formContent.title2}</p>

      <form
        action="https://getform.io/f/068ccdd9-21a2-46f7-8dbf-e73b0f28eade"
        method="POST"
      >
        <div className="flex flex-col md:gap-10 gap-4 md:p-10 p-6 rounded-3xl shadow-black shadow-md xl:w-[1080px] lg:w-[900px] md:w-[700px] w-full mb-4 ">
          <div className="flex flex-col md:flex-row items-center  justify-center gap-4">
            <input
              type="text"
              required
              name="Name"
              placeholder={formContent.name}
              className={`  input input-bordered w-full`}
            />
            <input
              type="text"
              required
              name="Last Name"
              placeholder={formContent.lastName}
              className={` input input-bordered  w-full`}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center  justify-center gap-4 ">
            <input
              type="text"
              required
              name="Email"
              placeholder={formContent.email}
              className={`input input-bordered  w-full`}
            />
            <input
              type="text"
              required
              name="Phone"
              placeholder={formContent.phone}
              className={` input input-bordered  w-full`}
            />
          </div>
          <textarea
            name="Questions"
            required
            className={` textarea textarea-bordered w-auto`}
            placeholder={formContent.questions}
          />
          <button className={`btn btn-${color}`}>SUBMIT NOW</button>
        </div>
      </form>
    </TitleContent>
  );
};

export default IFormContact;

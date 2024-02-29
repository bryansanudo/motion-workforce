import React from "react";

import opportunity from "@/assets/icons/opportunity.jpg";
import success from "@/assets/icons/success.jpg";
import versatile from "@/assets/icons/versatile.jpg";

import { styles } from "@/styles";

const IServicesCard = ({ language }) => {
  const services = {
    en: {
      title1: "Decades of Effectiveness",
      p1: "The EB-3 Program for Unskilled Workers was created in 1990 under the Immigration and Nationality Act.",
      title2: "Open to Anybody",
      p2: "This program is open to all individuals, regardless of skill level or educational background, making it accessible to anyone interested in applying.",
      title3: "Globally Availblable",
      p3: "You have the option to complete this process either from your current country of residence or while residing within the United States.",
    },
    es: {
      title1: "Décadas de Eficacia",
      p1: "El programa EB-3 para trabajadores no cualificados se creó en 1990 en virtud de la Ley de Inmigración y Nacionalidad",
      title2: "Abierto a todo el mundo",
      p2: "Este programa está abierto a todas las personas, independientemente de su nivel de cualificación o formación académica, lo que lo hace accesible a cualquier persona interesada en solicitarlo",
      title3: "Disponible en todo el mundo",
      p3: "Tiene la opción de completar este proceso desde su país de residencia actual o residiendo en Estados Unidos",
    },
    por: {
      title1: "Décadas de Eficácia",
      p1: "O Programa EB-3 para trabalhadores não qualificados foi criado em 1990 ao abrigo da Lei de Imigração e Nacionalidade",
      title2: "Aberto a qualquer pessoa",
      p2: "Este programa está aberto a todos os indivíduos, independentemente do seu nível de competências ou formação académica, tornando-o acessível a qualquer pessoa interessada em candidatar-se.",
      title3: "Globalmente disponível",
      p3: "Tem a opção de concluir este processo a partir do seu país de residência atual ou enquanto residir nos Estados Unidos.",
    },
    fr: {
      title1: "Des décennies d'Efficacité",
      p1: "Le programme EB-3 pour les travailleurs non qualifiés a été créé en 1990 en vertu de la loi sur l'immigration et la nationalité",
      title2: "Ouvert à tous",
      p2: "Ce programme est ouvert à tous les individus, quel que soit leur niveau de compétence ou d'éducation, ce qui le rend accessible à toute personne souhaitant poser sa candidature",
      title3: "Disponible dans le monde entier",
      p3: "Vous avez la possibilité de suivre ce processus depuis votre pays de résidence actuel ou tout en résidant aux États-Unis",
    },
  };
  const servicesContent = services[language];

  return (
    <div className="flex flex-col items-center    xl:w-[1080px] lg:w-[900px] md:w-[700px] w-full">
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 mx-auto   w-full ">
        {/* flip card 1*/}

        <div className="flex  flex-col justify-center ">
          <div className="group h-[300px] bg-whit rounded-xl [perspective:800px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 [backface-visibility:hidden] ">
                {/* front content */}
                <div className="bg-white shadow-sm shadow-primary  h-full w-full rounded-2xl">
                  <div className="flex items-center justify-center h-full">
                    <p className="font-bold text-2xl tracking-wider">
                      {servicesContent.title1}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" absolute inset-0   [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="bg-white shadow-md shadow-black   h-full w-full rounded-2xl">
                  <div className="flex flex-col items-center justify-center h-full ">
                    <p
                      className={`font-bold text-xl text-center p-3 text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500  md:text-2xl tracking-wider`}
                    >
                      {servicesContent.title1}
                    </p>
                    <p className="tracking-wider   flex items-center justify-center duration-300 px-1 mt-4">
                      {servicesContent.p1}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* flip card 2*/}

        <div className="flex  flex-col justify-center ">
          <div className="group h-[300px] bg-whit rounded-xl [perspective:800px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 [backface-visibility:hidden] ">
                {/* front content */}
                <div className="bg-white shadow-sm shadow-primary  h-full w-full rounded-2xl">
                  <div className="flex items-center justify-center h-full">
                    <p className="font-bold text-2xl tracking-wider">
                      {servicesContent.title2}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" absolute inset-0   [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="bg-white shadow-md shadow-black   h-full w-full rounded-2xl">
                  <div className="flex flex-col items-center justify-center h-full ">
                    <p
                      className={`font-bold text-xl text-center p-3 text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500  md:text-2xl tracking-wider`}
                    >
                      {servicesContent.title2}
                    </p>
                    <p className="tracking-wider   flex items-center justify-center duration-300 px-1 mt-4">
                      {servicesContent.p2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* flip card 3*/}

        <div className="flex  flex-col justify-center ">
          <div className="group h-[300px] bg-whit rounded-xl [perspective:800px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 [backface-visibility:hidden] ">
                {/* front content */}
                <div className="bg-white shadow-sm shadow-primary  h-full w-full rounded-2xl">
                  <div className="flex items-center justify-center h-full">
                    <p className="font-bold text-2xl tracking-wider">
                      {servicesContent.title3}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" absolute inset-0   [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="bg-white shadow-md shadow-black   h-full w-full rounded-2xl">
                  <div className="flex flex-col items-center justify-center h-full ">
                    <p
                      className={`font-bold text-xl text-center p-3 text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500  md:text-2xl tracking-wider`}
                    >
                      {servicesContent.title3}
                    </p>
                    <p className="tracking-wider   flex items-center justify-center duration-300 px-1 mt-4">
                      {servicesContent.p3}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* flip card 1*/}

        <div className="flex  flex-col justify-center ">
          <div className="group h-[300px] bg-whit rounded-xl [perspective:800px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 [backface-visibility:hidden] ">
                {/* front content */}
                <div className="bg-white shadow-md shadow-black  h-full w-full rounded-2xl">
                  <div className="flex items-center justify-center h-full">
                    <p className="font-bold text-2xl tracking-wider">
                      {servicesContent.title1}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" absolute inset-0   [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="bg-white shadow-md shadow-black   h-full w-full rounded-2xl">
                  <div className="flex flex-col items-center justify-center h-full ">
                    <p
                      className={`font-bold text-xl text-center p-3 text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500  md:text-2xl tracking-wider`}
                    >
                      {servicesContent.title1}
                    </p>
                    <p className="tracking-wider   flex items-center justify-center duration-300 px-1 mt-4">
                      {servicesContent.p1}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* flip card 2*/}
        <div className="flex  flex-col justify-center ">
          <div className="group h-[300px] bg-whit rounded-xl [perspective:800px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 [backface-visibility:hidden] ">
                {/* front content */}
                <div className="bg-white shadow-md shadow-black  h-full w-full rounded-2xl">
                  <div className="flex items-center justify-center h-full">
                    <p className="font-bold text-2xl tracking-wider">
                      {servicesContent.title2}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" absolute inset-0   [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="bg-white shadow-md shadow-black   h-full w-full rounded-2xl">
                  <div className="flex flex-col items-center justify-center h-full ">
                    <p
                      className={`font-bold text-xl text-center p-3 text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500  md:text-2xl tracking-wider`}
                    >
                      {servicesContent.title2}
                    </p>
                    <p className="tracking-wider   flex items-center justify-center duration-300 px-1 mt-4">
                      {servicesContent.p2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* flip card 3*/}
        <div className="flex  flex-col justify-center ">
          <div className="group h-[300px] bg-whit rounded-xl [perspective:800px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 [backface-visibility:hidden] ">
                {/* front content */}
                <div className="bg-white shadow-md shadow-black  h-full w-full rounded-2xl">
                  <div className="flex items-center justify-center h-full">
                    <p className="font-bold text-2xl tracking-wider">
                      {servicesContent.title3}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" absolute inset-0   [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="bg-white shadow-md shadow-black   h-full w-full rounded-2xl">
                  <div className="flex flex-col items-center justify-center h-full ">
                    <p
                      className={`font-bold text-xl text-center p-3 text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500  md:text-2xl tracking-wider`}
                    >
                      {servicesContent.title3}
                    </p>
                    <p className="tracking-wider   flex items-center justify-center duration-300 px-1 mt-4">
                      {servicesContent.p3}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* flip card 1*/}

        <div className="flex  flex-col justify-center ">
          <div className="group h-[300px] bg-whit rounded-xl [perspective:800px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 [backface-visibility:hidden] ">
                {/* front content */}
                <div className="bg-white shadow-md shadow-black  h-full w-full rounded-2xl">
                  <div className="flex items-center justify-center h-full">
                    <p className="font-bold text-2xl tracking-wider">
                      {servicesContent.title1}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" absolute inset-0   [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="bg-gradient-to-r from-primary to-gray-500 shadow-md shadow-black   h-full w-full rounded-2xl">
                  <div className="flex flex-col items-center justify-center h-full ">
                    <p className="font-bold text-2xl tracking-wider text-white">
                      {servicesContent.title1}
                    </p>
                    <p className="tracking-wider   flex items-center justify-center duration-300 px-1 mt-4 text-white">
                      {servicesContent.p1}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* flip card 2*/}
        <div className="flex  flex-col justify-center ">
          <div className="group h-[300px] bg-whit rounded-xl [perspective:800px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 [backface-visibility:hidden] ">
                {/* front content */}
                <div className="bg-white shadow-md shadow-black  h-full w-full rounded-2xl">
                  <div className="flex items-center justify-center h-full">
                    <p className="font-bold text-2xl tracking-wider">
                      {servicesContent.title2}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" absolute inset-0   [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="bg-gradient-to-r from-primary to-gray-500 shadow-md shadow-black   h-full w-full rounded-2xl">
                  <div className="flex flex-col items-center justify-center h-full ">
                    <p className="font-bold text-2xl tracking-wider text-white">
                      {servicesContent.title2}
                    </p>
                    <p className="tracking-wider   flex items-center justify-center duration-300 px-1 mt-4 text-white">
                      {servicesContent.p2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* flip card 3*/}
        <div className="flex  flex-col justify-center ">
          <div className="group h-[300px] bg-whit rounded-xl [perspective:800px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 [backface-visibility:hidden] ">
                {/* front content */}
                <div className="bg-white shadow-md shadow-black  h-full w-full rounded-2xl">
                  <div className="flex items-center justify-center h-full">
                    <p className="font-bold text-2xl tracking-wider">
                      {servicesContent.title3}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" absolute inset-0   [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="bg-gradient-to-r from-primary to-gray-500 shadow-md shadow-black   h-full w-full rounded-2xl">
                  <div className="flex flex-col items-center justify-center h-full ">
                    <p className="font-bold text-2xl tracking-wider text-white">
                      {servicesContent.title3}
                    </p>
                    <p className="tracking-wider   flex items-center justify-center duration-300 px-1 mt-4 text-white">
                      {servicesContent.p3}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="relative flex flex-col overflow-hidden shadow-md shadow-black rounded-3xl h-[300px] ">
            <div className="flex flex-col items-center justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 gap-4">
              <p className="font-bold text-2xl tracking-wider">
                {servicesContent.title1}
              </p>
              <p className="tracking-wider absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 mt-20 px-1">
                {servicesContent.p1}
              </p>
            </div>
          </div>

          <div className="relative flex flex-col overflow-hidden shadow-md shadow-black rounded-3xl h-[300px] ">
            <div className="flex flex-col items-center justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 gap-4">
              <p className="font-bold text-2xl tracking-wider">
                {servicesContent.title2}
              </p>
              <p className="tracking-wider absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 mt-10 px-1">
                {servicesContent.p2}
              </p>
            </div>
          </div>

          <div className="relative flex flex-col overflow-hidden shadow-md shadow-black rounded-3xl h-[300px] ">
            <div className="flex flex-col items-center justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 gap-4">
              <p className="font-bold text-2xl tracking-wider">
                {servicesContent.title3}
              </p>
              <p className="tracking-wider absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 mt-10 px-1">
                {servicesContent.p3}
              </p>
            </div>
          </div> */}
      </div>
    </div>
  );
};
export default IServicesCard;

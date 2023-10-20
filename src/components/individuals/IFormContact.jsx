import React from "react";
import TitleContent from "@/components/individuals/TitleContent";
import { styles } from "@/styles";

const IFormContact = ({ color }) => {
  return (
    <TitleContent>
      <h2
        className={`from-${color} font-bold text-2xl text-center p-3 text-transparent bg-clip-text  bg-gradient-to-r  to-gray-500  md:text-4xl tracking-wider `}
      >
        Get in touch today!
      </h2>
      <p className={`${styles.sectionTitleText}`}>
        Fill out the form below and we'll get back to you as soon as possible.
      </p>

      <form
        action="https://getform.io/f/068ccdd9-21a2-46f7-8dbf-e73b0f28eade"
        method="POST"
      >
        <div className="flex flex-col md:gap-10 gap-4 md:p-10 p-6 rounded-3xl shadow-black shadow-md xl:w-[1080px] lg:w-[900px] md:w-[700px] w-full mb-4 ">
          <div className="flex flex-col md:flex-row items-center  justify-center gap-4">
            <input
              type="text"
              name="Name"
              placeholder="First name"
              className={`  input input-bordered w-full`}
            />
            <input
              type="text"
              name="Last Name"
              placeholder="Last name"
              className={` input input-bordered  w-full`}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center  justify-center gap-4 ">
            <input
              type="text"
              name="Email"
              placeholder="Email"
              className={` input input-bordered  w-full`}
            />
            <input
              type="text"
              name="Phone"
              placeholder="Phone"
              className={` input input-bordered  w-full`}
            />
          </div>
          <textarea
            name="Questions"
            className={` textarea textarea-bordered w-auto`}
            placeholder="Your questions"
          />
          <button className={`btn btn-${color}`}>SUBMIT NOW</button>
        </div>
      </form>
    </TitleContent>
  );
};

export default IFormContact;

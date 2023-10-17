import React from "react";
import TitleContent from "@/components/individuals/TitleContent";
import { styles } from "@/styles";

const IFormContact = () => {
  return (
    <TitleContent title="Get in touch today!">
      <p className={`${styles.sectionTitleText}`}>
        Fill out the form below and we'll get back to you as soon as possible.
      </p>
      <div className="flex flex-col md:gap-10 gap-4 md:p-10 p-6 rounded-3xl shadow-black shadow-md xl:w-[1080px] lg:w-[900px] md:w-[700px] w-full mb-4 ">
        <div className="flex flex-col md:flex-row items-center  justify-center gap-4">
          <input
            type="text"
            placeholder="First name"
            className="input input-bordered input-primary w-full "
          />
          <input
            type="text"
            placeholder="Last name"
            className="input input-bordered input-primary w-full "
          />
        </div>
        <div className="flex flex-col md:flex-row items-center  justify-center gap-4 ">
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered input-primary w-full "
          />
          <input
            type="text"
            placeholder="Phone"
            className="input input-bordered input-primary w-full "
          />
        </div>
        <textarea
          className="textarea textarea-primary w-auto"
          placeholder="Your questions"
        />
        <button className="btn  btn-primary">SUBMIT NOW</button>
      </div>
    </TitleContent>
  );
};

export default IFormContact;

import React from "react";
import TitleContent from "@/components/companies/TitleContent";
import { styles } from "@/styles";

const CFormContact = () => {
  return (
    <TitleContent title="Get in touch today!">
      <p className={`${styles.sectionTitleText}`}>
        Fill out the form below and we'll get back to you as soon as possible.
      </p>
      <div className="flex flex-col md:gap-10 gap-4 md:p-10 p-6 rounded-3xl shadow-black shadow-md xl:w-[1080px] lg:w-[900px] md:w-[700px] w-full ">
        <div className="flex flex-col md:flex-row items-center  justify-center gap-4">
          <input
            type="text"
            placeholder="First name"
            className="input input-bordered input-secondary w-full "
          />
          <input
            type="text"
            placeholder="Last name"
            className="input input-bordered input-secondary w-full "
          />
        </div>
        <div className="flex flex-col md:flex-row items-center  justify-center gap-4 ">
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered input-secondary w-full "
          />
          <input
            type="text"
            placeholder="Phone"
            className="input input-bordered input-secondary w-full "
          />
        </div>
        <textarea
          className="textarea textarea-secondary w-auto"
          placeholder="Your questions"
        />
        <button className="btn  btn-secondary">SUBMIT NOW</button>
      </div>
    </TitleContent>
  );
};

export default CFormContact;

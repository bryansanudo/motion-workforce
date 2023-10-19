import React, { useState } from "react";
import { AiFillAlert } from "react-icons/ai";

import opportunity from "@/assets/opportunity.webp";
import success from "@/assets/success.webp";
import versatile from "@/assets/versatile.webp";

const IServicesCard = () => {
  return (
    <div className="flex flex-col items-center  p-2 mb-6 xl:w-[1080px] lg:w-[900px] md:w-[700px] w-full">
      <div className="relative  md:order-2">
        <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
          <div
            className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
            style={{
              background:
                "linear-gradient(90deg, #94171A -0.55%, #ffffff 22.86%, #000000 48.36%, #ffffff 73.33%, #94171A 99.34%)",
            }}
          ></div>
        </div>

        <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
          {/* Card one */}
          <div className="flex flex-col overflow-hidden shadow-md shadow-black rounded-3xl">
            <div className="flex flex-col items-center justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 gap-4">
              <img src={success} alt="" />

              <p className="font-bold text-2xl tracking-wider">
                Historic Success
              </p>
              <p className="tracking-wider">
                The Immigration and Nationality Act, passed in 1990, created the
                EB-3 Unskilled Visa program.
              </p>
            </div>
          </div>
          {/* Card two */}
          <div className="flex flex-col overflow-hidden shadow-md shadow-black rounded-3xl">
            <div className="flex flex-col items-center justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 gap-4">
              <img src={opportunity} alt="" />
              <p className="font-bold text-2xl tracking-wider">
                Opportunity Awaits
              </p>
              <p className="tracking-wider">
                Anyone can participate in this program. There are no educational
                or skill prerequisites for applying.
              </p>
            </div>
          </div>
          {/* Card three */}
          <div className="flex flex-col overflow-hidden shadow-md shadow-black rounded-3xl">
            <div className="flex flex-col items-center justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 gap-4">
              <img src={versatile} alt="" />
              <p className="font-bold text-2xl tracking-wider">
                Versatile Process
              </p>
              <p className="tracking-wider">
                Applicants can complete this procedure either from within the
                United States, if they live in the US on a different type of
                visa, or from their country of origin or where they currently
                reside.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IServicesCard;

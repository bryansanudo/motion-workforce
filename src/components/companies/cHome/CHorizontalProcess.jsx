import React from "react";
import FillForm from "@/components/icons/FillForm";
import Interview from "@/components/icons/Interview";
import ListCheck from "@/components/icons/ListCheck";

import Approved from "@/components/icons/Approved";

import checklist from "@/assets/checklist.svg";
import approved from "@/assets/approved.svg";

import process1 from "@/assets/process/process1.png";
import process6 from "@/assets/process/process6.png";
import process7 from "@/assets/process/process7.png";
import process8 from "@/assets/process/process8.png";
import process10 from "@/assets/process/process10.png";
import process18 from "@/assets/process/process14.png";
import process15 from "@/assets/process/process15.png";
import process17 from "@/assets/process/process17.png";

import { styles } from "@/styles";

const CHorizontalProcess = () => {
  return (
    <div className="overflow-x-auto  flex items-center justify-center my-20  ">
      <ul className="steps pb-40   xl:w-[1080px] lg:w-[900px] md:w-[700px] w-full ">
        {/* 1 content */}
        <li className="step step-primary">
          <div className="dropdown dropdown-open dropdown-bottom">
            <label tabIndex={0} className=" m-1">
              <img src={process1} className="mx-auto w-[50px]" alt="" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="tracking-wider font-bold">Month 1</p>
              <p className="tracking-wider">
                Labor Certification filed once employer obtains DOL prevailing
                wage
              </p>
            </ul>
          </div>
        </li>
        {/* 2 */}
        <li className="step "></li>
        {/* 3 */}
        <li className="step "></li>
        {/* 4 */}
        <li className="step "></li>
        {/* 5 */}
        <li className="step "></li>
        {/* 6 content */}
        <li className="step step-primary">
          <div className="dropdown  dropdown-bottom   ">
            <label tabIndex={0} className=" m-1">
              {/* <FillForm className="mx-auto w-[50px]  " /> */}
              <img
                src={process6}
                className="w-[65px] hover:scale-110 duration-700 "
                alt=""
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="tracking-wider font-bold">Month 6</p>
              <p className="tracking-wider">Labor Certification Approved</p>
            </ul>
          </div>
        </li>
        {/* 7 content */}
        <li className="step step-primary">
          <div className="dropdown  dropdown-bottom   ">
            <label tabIndex={0} className=" m-1">
              <img
                src={process7}
                className="w-[58px] hover:scale-110 duration-700"
                alt=""
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="tracking-wider font-bold">Month 7</p>
              <p className="Dependent fees due">Dependent fees due</p>
              <p className="tracking-wider">I-140 Filed</p>
            </ul>
          </div>
        </li>
        {/* 8 content */}
        <li className="step step-primary">
          <div className="dropdown  dropdown-bottom   ">
            <label tabIndex={0} className=" m-1">
              <img
                src={process8}
                className="w-[62px] hover:scale-110 duration-700"
                alt=""
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="tracking-wider font-bold">Month 8</p>
              <p className="tracking-wider">I-140 Approved</p>
            </ul>
          </div>
        </li>
        {/* 9 */}
        <li className="step "></li>
        {/* 10 content */}
        <li className="step step-primary">
          <div className="dropdown  dropdown-bottom  ">
            <label tabIndex={0} className=" m-1">
              <img
                src={process10}
                className="w-[70px] hover:scale-110 duration-700 pb-2"
                alt=""
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="font-bold tracking-wider">Month 10 </p>
              <p className="tracking-wider">DS 260</p>
            </ul>
          </div>
        </li>
        {/* 11 */}
        <li className="step "></li>
        {/* 12 */}
        <li className="step "></li>
        {/* 13  */}
        <li className="step step-primary"></li>
        {/* 14  */}
        <li className="step step-primary"></li>
        {/* 15 content */}
        <li className="step ">
          <div className="dropdown  dropdown-bottom  ">
            <label tabIndex={0} className=" m-1">
              <img
                src={process15}
                className="w-[70px] hover:scale-110 duration-700 pb-2"
                alt=""
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="font-bold tracking-wider">Month 15 </p>
              <p className="tracking-wider">Interview scheduled</p>
            </ul>
          </div>
        </li>
        {/* 16 content */}
        <li className="step ">
          <div className="dropdown  dropdown-bottom  ">
            <label tabIndex={0} className=" m-1">
              <Interview className="mx-auto w-[50px] hover:scale-110 duration-700 " />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="font-bold tracking-wider">Month 16 </p>
              <p className="tracking-wider">
                EW3 vida interview at usconsulate in your home country
              </p>
            </ul>
          </div>
        </li>
        {/* 17 content */}
        <li className="step ">
          <div className="dropdown  dropdown-bottom  ">
            <label tabIndex={0} className=" m-1">
              <img
                src={process17}
                className="w-[70px] hover:scale-110 duration-700 pb-2"
                alt=""
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="font-bold tracking-wider">Month 17 </p>
              <p className="tracking-wider">Received vida and travel to Us</p>
            </ul>
          </div>
        </li>
        {/* 18 content */}
        <li className="step ">
          <div className="dropdown  dropdown-bottom  ">
            <label tabIndex={0} className=" m-1">
              <img
                src={process18}
                className="w-[70px] hover:scale-110 duration-700 pb-2"
                alt=""
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="font-bold tracking-wider">Month 18 </p>
              <p className="tracking-wider">Green Card Issued</p>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CHorizontalProcess;

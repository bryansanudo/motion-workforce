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
import process14 from "@/assets/process/process14.png";

const HorizontalProcess = () => {
  return (
    <div className="overflow-x-auto mx-6 flex items-center justify-center   ">
      <ul className="steps pb-40 ">
        {/* 1 content */}
        <li className="step step-primary">
          <div className="dropdown  dropdown-bottom   ">
            <label tabIndex={0} className=" m-1">
              <img
                src={process1}
                className="mx-auto w-[50px] hover:scale-110 duration-700 "
                alt=""
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="mx-auto">
                Labor Certification filed once employer obtains DOL prevaling
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
          <div className="dropdown  dropdown-bottom   dropdown-end">
            <label tabIndex={0} className=" m-1">
              {/* <FillForm className="mx-auto w-[50px]  " /> */}
              <img
                src={process6}
                className="w-[60px] hover:scale-110 duration-700 "
                alt=""
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="mx-auto">
                Labor Certification Approved + Consular fees
              </p>
            </ul>
          </div>
        </li>
        {/* 7 content */}
        <li className="step step-primary">
          <div className="dropdown  dropdown-bottom   dropdown-end">
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
              <p className="mx-auto">I-140 Filed</p>
              <p className="mx-auto">I-485 Filed</p>
              <p className="mx-auto">I-765 Filed</p>
            </ul>
          </div>
        </li>
        {/* 8 content */}
        <li className="step step-primary">
          <div className="dropdown  dropdown-bottom   dropdown-end">
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
              <p className="mx-auto">I-140 Approved</p>
            </ul>
          </div>
        </li>
        {/* 9 */}
        <li className="step "></li>
        {/* 10 content */}
        <li className="step step-primary">
          <div className="dropdown  dropdown-bottom  dropdown-end">
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
              <p className="mx-auto">
                Employee can begin working for the employer sponsor
              </p>
            </ul>
          </div>
        </li>
        {/* 11 */}
        <li className="step "></li>
        {/* 12 */}
        <li className="step "></li>
        {/* 13 content */}
        <li className="step step-primary">
          <div className="dropdown  dropdown-bottom   dropdown-end">
            <label tabIndex={0} className=" m-1">
              <Interview className="mx-auto w-[50px] hover:scale-110 duration-700 " />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="mx-auto">I-485 Interview</p>
            </ul>
          </div>
        </li>
        {/* 14 content */}
        <li className="step step-primary">
          <div className="dropdown  dropdown-bottom   dropdown-end">
            <label tabIndex={0} className=" m-1">
              <img
                src={process14}
                className="w-[50px] hover:scale-110 duration-700"
                alt=""
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="mx-auto">Green Card Issued</p>
            </ul>
          </div>
        </li>
        {/* 15 */}
        <li className="step "></li>
        {/* 16 */}
        <li className="step "></li>
        {/* 17 */}
        <li className="step "></li>
        {/* 18 */}
        <li className="step "></li>
      </ul>
    </div>
  );
};

export default HorizontalProcess;

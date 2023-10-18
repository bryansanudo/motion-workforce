import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { AiOutlineCheck } from "react-icons/ai";
import { styles } from "@/styles";
import { AiFillAndroid } from "react-icons/ai";
import { VscChecklist } from "react-icons/vsc";
import { LuFileSignature } from "react-icons/lu";
import { AiOutlineFileDone } from "react-icons/ai";
import { GrWorkshop } from "react-icons/gr";
import { GiConversation } from "react-icons/gi";
import { BsPersonVcard } from "react-icons/bs";

import Interview from "@/components/icons/Interview";

const content = {
  borderRadius: "1.5rem",
  boxShadow:
    "20px 20px 25px 5px rgba(0, 0, 0, 0.2), 0 10px 10px 0px rgba(0, 0, 0, 1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Process = () => {
  return (
    <div className="">
      <p className={`${styles.titleText}`}>
        Adjustment of status typical timeline by month
      </p>
      <p className="my-6 font-bold text-lg">Typically 12-18 months</p>
      <VerticalTimeline lineColor="#000">
        {/* 1 content */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work   "
          contentStyle={content}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(0,0,0)",
          }}
          iconStyle={{
            background: "rgb(148,23,26)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon="1"
        >
          <div className="flex flex-col  items-center justify-center">
            <div className="text-lg mt-2">
              Labor Certification Filed employer obtains DOL prevaling wage
            </div>
          </div>
        </VerticalTimelineElement>
        {/* 2 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          iconStyle={{
            background: "rgb(148,23,26)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon="2"
        ></VerticalTimelineElement>
        {/* 3 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          iconStyle={{
            background: "rgb(148,23,26)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon="3"
        ></VerticalTimelineElement>
        {/* 4 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          iconStyle={{
            background: "rgb(148,23,26)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon="4"
        ></VerticalTimelineElement>
        {/* 5 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          iconStyle={{
            background: "rgb(148,23,26)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon="5"
        ></VerticalTimelineElement>
        {/* 6 content */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={content}
          contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
          iconStyle={{
            background: "rgb(148,23,26)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon="6"
        >
          <div className="flex flex-col  items-center justify-center">
            <VscChecklist className="text-7xl" />

            <div className="text-lg mt-2">Labor Certification Approved</div>
            <div className="text-lg mt-2">+</div>
            <div className="text-lg mt-2">Consular fees</div>
          </div>
        </VerticalTimelineElement>
        {/* 7 content */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={content}
          contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
          iconStyle={{
            background: "rgb(148,23,26)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon="7"
        >
          <div className="flex flex-col  items-center justify-center">
            <LuFileSignature className="text-6xl mb-3" />

            <div className="text-lg mt-2">Fill L-140 Form</div>
            <div className="text-lg mt-2">Fill L-485 Form</div>
            <div className="text-lg mt-2">Fill L-765 Form</div>
          </div>
        </VerticalTimelineElement>
        {/* 8 content */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={content}
          contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
          iconStyle={{
            background: "rgb(148,23,26)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon="8"
        >
          <div className="flex flex-col  items-center justify-center">
            <AiOutlineFileDone className="text-6xl mb-2" />

            <div className="text-lg mt-2">L-140 Approved</div>
          </div>
        </VerticalTimelineElement>
        {/* 9 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          iconStyle={{
            background: "rgb(148,23,26)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon="9"
        ></VerticalTimelineElement>
        {/* 10 content */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={content}
          contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
          iconStyle={{
            background: "rgb(148,23,26)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon="10"
        >
          <div className="flex flex-col  items-center justify-center">
            <GrWorkshop className="text-6xl mb-2" />

            <div className="text-lg mt-2">
              Employee can begin working for the employer sponsor
            </div>
          </div>
        </VerticalTimelineElement>
        {/* 11 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          iconStyle={{
            background: "rgb(148,23,26)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon="11"
        ></VerticalTimelineElement>
        {/* 12 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          iconStyle={{
            background: "rgb(148,23,26)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon="12"
        ></VerticalTimelineElement>
        {/* 13 content */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={content}
          contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
          iconStyle={{
            background: "rgb(148,23,26)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon="13"
        >
          <div className="flex flex-col  items-center justify-center">
            <Interview className="w-[70px]" />

            <div className="text-lg mt-2">L-485 Interview</div>
          </div>
        </VerticalTimelineElement>
        {/* 14 content */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={content}
          contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
          iconStyle={{
            background: "rgb(148,23,26)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon="14"
        >
          <div className="flex flex-col  items-center justify-center ">
            <BsPersonVcard className="text-6xl" />

            <div className="text-lg mt-2 ">Green Card Issued</div>
          </div>
        </VerticalTimelineElement>
        {/* 15 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          iconStyle={{
            background: "rgb(148,23,26)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon="15"
        ></VerticalTimelineElement>
        {/* 16 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          iconStyle={{
            background: "rgb(148,23,26)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon="16"
        ></VerticalTimelineElement>
        {/* 17 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          iconStyle={{
            background: "rgb(148,23,26)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon="17"
        ></VerticalTimelineElement>
        {/* 18 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          iconStyle={{
            background: "rgb(148,23,26)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon="18"
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Process;

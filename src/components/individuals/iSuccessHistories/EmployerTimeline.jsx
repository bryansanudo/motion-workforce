import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { AiOutlineCheck } from "react-icons/ai";
const EmployerTimeline = () => {
  return (
    <div className="px-4">
      <p className="font-bold text-3xl p-3 text-center text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl  ">
        Creating a bond with an employer.
      </p>
      <VerticalTimeline lineColor="#000">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(38,61,114)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(38,61,114)" }}
          iconStyle={{ background: "rgb(38,61,114)", color: "#fff" }}
          icon={<AiOutlineCheck />}
        >
          <h3 className="text-2xl font-bold">LC Filed</h3>

          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quis
            mollitia sequi dolorum iusto quos nemo ex a pariatur facilis.
          </p>
          <div className="font-bold text-left mt-6 text-lg">4/21/2020</div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(148,23,26)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(148,23,26)" }}
          iconStyle={{ background: "rgb(148,23,26)", color: "#fff" }}
          icon={<AiOutlineCheck />}
        >
          <h3 className="text-2xl font-bold">LC Approved</h3>

          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quis
            mollitia sequi dolorum iusto quos nemo ex a pariatur facilis.
          </p>
          <div className="font-bold text-left mt-6 text-lg">9/15/2020</div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(38,61,114)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(38,61,114)" }}
          iconStyle={{ background: "rgb(38,61,114)", color: "#fff" }}
          icon={<AiOutlineCheck />}
        >
          <h3 className="text-2xl font-bold">I-485 Filed</h3>

          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quis
            mollitia sequi dolorum iusto quos nemo ex a pariatur facilis.
          </p>
          <div className="font-bold text-left mt-6 text-lg">10/27/2020</div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(148,23,26)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(148,23,26)" }}
          iconStyle={{ background: "rgb(148,23,26)", color: "#fff" }}
          icon={<AiOutlineCheck />}
        >
          <h3 className="text-2xl font-bold">I-140 filed</h3>

          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quis
            mollitia sequi dolorum iusto quos nemo ex a pariatur facilis.
          </p>
          <div className="font-bold text-left mt-6 text-lg">10/27/2020</div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(38,61,114)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(38,61,114)" }}
          iconStyle={{ background: "rgb(38,61,114)", color: "#fff" }}
          icon={<AiOutlineCheck />}
        >
          <h3 className="text-2xl font-bold">I-140 Approved</h3>

          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quis
            mollitia sequi dolorum iusto quos nemo ex a pariatur facilis.
          </p>
          <div className="font-bold text-left mt-6 text-lg">1/6/2021</div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(148,23,26)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(148,23,26)" }}
          iconStyle={{ background: "rgb(148,23,26)", color: "#fff" }}
          icon={<AiOutlineCheck />}
        >
          <h3 className="text-2xl font-bold">Work Permit Approved</h3>

          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quis
            mollitia sequi dolorum iusto quos nemo ex a pariatur facilis.
          </p>
          <div className="font-bold text-left mt-6 text-lg">3/30/2021</div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(38,61,114)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(38,61,114)" }}
          iconStyle={{ background: "rgb(38,61,114)", color: "#fff" }}
          icon={<AiOutlineCheck />}
        >
          <h3 className="text-2xl font-bold">Visa Approved</h3>

          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quis
            mollitia sequi dolorum iusto quos nemo ex a pariatur facilis.
          </p>
          <div className="font-bold text-left mt-6 text-lg">8/9/2021</div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default EmployerTimeline;

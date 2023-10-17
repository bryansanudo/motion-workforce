import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { AiOutlineCheck } from "react-icons/ai";
import { styles } from "@/styles";

const LifeTimeline = () => {
  return (
    <div className="">
      <p className={`${styles.titleText}`}>A new life for this family</p>
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
          <div className="font-bold text-left mt-6 text-lg">06/20/2018</div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(148,23,26)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(148,23,26)" }}
          iconStyle={{ background: "rgb(148,23,26)", color: "#fff" }}
          icon={<AiOutlineCheck />}
        >
          <h3 className="text-2xl font-bold">I-140 Filed</h3>

          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quis
            mollitia sequi dolorum iusto quos nemo ex a pariatur facilis.
          </p>
          <div className="font-bold text-left mt-6 text-lg">12/12/2018</div>
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
          <div className="font-bold text-left mt-6 text-lg">2/26/2019</div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(148,23,26)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(148,23,26)" }}
          iconStyle={{ background: "rgb(148,23,26)", color: "#fff" }}
          icon={<AiOutlineCheck />}
        >
          <h3 className="text-2xl font-bold">Visa Interview </h3>

          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quis
            mollitia sequi dolorum iusto quos nemo ex a pariatur facilis.
          </p>
          <div className="font-bold text-left mt-6 text-lg">10/15/2019</div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(38,61,114)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(38,61,114)" }}
          iconStyle={{ background: "rgb(38,61,114)", color: "#fff" }}
          icon={<AiOutlineCheck />}
        >
          <h3 className="text-2xl font-bold">Visa approved</h3>

          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quis
            mollitia sequi dolorum iusto quos nemo ex a pariatur facilis.
          </p>
          <div className="font-bold text-left mt-6 text-lg">9/4/2021</div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default LifeTimeline;

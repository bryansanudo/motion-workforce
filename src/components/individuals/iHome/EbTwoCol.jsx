import { styles } from "@/styles";
import Tilt from "react-parallax-tilt";
import TitleContent from "@/components/individuals/TitleContent";

const EbTwoCol = () => {
  return (
    <TitleContent title="EB-3 Visa">
      <div className="flex flex-col items-center justify xl:w-[1080px] lg:w-[900px] md:w-[700px] w-full ">
        <div className="flex items-center justify-center flex-col md:flex-row gap-10 lg:gap-20 ">
          <Tilt tiltReverse={true}>
            <div className="flex flex-col justify-center items-center gap-4 max-w-[600px] p-4 md:p-10 shadow-md shadow-black rounded-3xl">
              <p className={`${styles.titleText}`}>Process Length</p>
              <p className="font-bold">Around 18 months</p>
              <p className={`${styles.sectionText}`}>
                The length of the processing times for the EB-3 Program varies
                and depends on the location (Country of Origin) and status of
                the applicant (Consular Process vs. Adjustment of Status) and
                can also depend on the type of industry the applicant is sought
                for.
              </p>
            </div>
          </Tilt>

          <Tilt tiltReverse={true}>
            <div className="flex flex-col justify-center items-center  gap-4 max-w-[600px] p-4 md:p-10 shadow-md shadow-black rounded-3xl">
              <p className={`${styles.titleText}`}>Investment</p>
              <p className="font-bold">$400-$1200</p>
              <p className={`${styles.sectionText}`}>
                In order to proceed with the Labor Certificate, compliance with
                regulations necessitates the advertisement of the position to
                U.S. Workers. This process labor certification process,
                independent of the quantity of employees required.
              </p>
            </div>
          </Tilt>
        </div>
      </div>
    </TitleContent>
  );
};

export default EbTwoCol;

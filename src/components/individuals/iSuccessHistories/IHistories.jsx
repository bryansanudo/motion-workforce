import { useEffect } from "react";
import ISection from "@/components/individuals/ISection";
import EmployerTimeline from "@/components/individuals/iSuccessHistories/EmployerTimeline";
import LifeTimeline from "@/components/individuals/iSuccessHistories/LifeTimeline";

import IHeroHistories from "@/components/individuals/iSuccessHistories/IHeroHistories";
import TitleContent from "@/components/individuals/TitleContent";
import { styles } from "@/styles";

const IHistories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <IHeroHistories />
      <ISection>
        {/* ***  Case Studies **** */}

        {/* A Process for almost anyone*/}
        <TitleContent title="A Process for almost anyone">
          <p className={`${styles.sectionTitleText}`}>
            We have seen first hand this process work for many different people
            at many different stages in their lives. The EB-3 program kickstarts
            opportunity in the United States by providing a U.S. Green Card to
            the main applicant and their dependents. Read about some of our
            client's experiences with this Green Card process with EB-3
            Workforce Solutions Solutions. No two cases are the same!
          </p>
          <p className={`${styles.sectionTitleText}`}>
            How does this process actually work for people? How long will the
            EB-3 Unskilled Visa take? Can I get promoted in my sponsor job? What
            kind of opportunities do I have after the program? Read to learn
            more about how individuals from around the world have experienced
            this process.
          </p>
        </TitleContent>

        <LifeTimeline />
        <TitleContent>
          <p className={`${styles.sectionTitleText}`}>
            This process gave this father the opportunity to get himself, his
            wife, and his young kids a U.S. Green Card. The COVID-19 pandemic
            put significant delays on getting a decision after their visa
            interview, but thanks to the EB-3 Workforce Solutions team fighting
            for their case, as the embassy began to open back up, the whole
            family got their visas approved.
          </p>
          <p className={`${styles.sectionTitleText}`}>
            They now are building a new life in the United States and are
            creating many opportunities for their family. Through the EB3
            process, this family can live and work legally in the United States.
            Currently, the main applicant is still working for their employer
            which is in the Southeast of the United States. We can’t wait to see
            this family continue to prosper in the United States and live their
            American dream.
          </p>
        </TitleContent>

        <EmployerTimeline />
        <TitleContent>
          <p className={`${styles.sectionTitleText}`}>
            This EB-3 Workforce Solutions client worked at a fast food
            restaurant in the mid-west United States. She worked for her
            employer for slightly over a year and was one of the first EB3
            workers to begin work at that employer. Her employer declared her
            one of the best workers their restaurant has ever had. After she
            finished working, her employer actually treated her out to dinner.
            In addition, her employer also graciously supported her husband’s
            entrepreneurial endeavors. Now, some of her family is starting their
            Green Card journey with EB-3 Workforce Solutions.
          </p>
          <p className={`${styles.sectionTitleText}`}>
            This situation is a testament to the wonderful employers that we
            work with. The EB-3 employees don’t get special treatment and are
            held to the same standards as every other employee at the
            organization, but the employers we work with do care about the
            success that EB-3 Workforce Solutions clients have in this program.
            They celebrate green card approvals with the EB-3 Workforce
            Solutions team and EB-3 Workforce Solutions clients.
          </p>
          <p className={`${styles.sectionTitleText}`}>
            While this client is moving on to other work opportunities, some of
            our clients continue to work for their employer sponsors in a
            greater capacity because they were promoted to more advanced
            positions in the organization. There are lots of opportunities
            through the EB3 Unskilled Visa Program.
          </p>
        </TitleContent>

        {/* Testimonials */}
        {/* <ISliderTestimonials /> */}
      </ISection>
    </>
  );
};

export default IHistories;

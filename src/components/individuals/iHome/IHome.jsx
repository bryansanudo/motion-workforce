import ISection from "@/components/individuals/ISection";
import JamesBg from "@/assets/James-bg.jpg";
import homeImg from "@/assets/home1.jpg";
import IHeroHome from "@/components/individuals/iHome/IHeroHome";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import ITestimonials from "@/components/individuals/iHome/ITestimonials";
import { RxGear } from "react-icons/rx";
import IFormContact from "@/components/individuals/IFormContact";
import contactImg from "@/assets/contact2.jpg";
import Divider from "@/components/individuals/IDivider";
import ImgContent from "@/components/individuals/ImgContent";

import TitleContent from "@/components/individuals/TitleContent";
import { styles } from "@/styles";
import { useEffect } from "react";

const IHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <IHeroHome />
      <ISection>
        {/* James */}

        <div name="teach me" className="pt-20" />
        <ImgContent
          img={JamesBg}
          title1="Meet The Founder"
          title2="James Baker, CPA"
        >
          <p className={`${styles.sectionText}`}>
            James is the head of different companies around the US, serving
            international Corporations and international entrepreneurs with
            different services and companies. ​ James allied with silent
            investors to create EB-3 Workforce solutions, a company that
            connects employers which are facing a chronic shortage of unskilled
            workers with immigrant employees willing to apply for a US Green
            Card through the EB-3 Visa program.
          </p>
        </ImgContent>

        {/* Divider committed workers */}
        <div className="flex items-center justify-center gap-6 md:gap-40 p-6 flex-col md:flex-row bg-gray-100 w-full ">
          <h1 className="text-4xl font-bold">Start Your Journey!</h1>
          <div className="flex flex-col items-center justify-center gap-4 text-xl font-bold">
            <div className="flex items-center justify-center gap-4">
              <div className="bg-white p-3 rounded-full hover:scale-110 duration-500 ">
                <a href="tel:+573055641311">
                  <BiPhoneCall className="text-4xl text-primary" />
                </a>
              </div>
              <p>Call Us </p>
            </div>
            <p>(305) 564-1311</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 font-bold text-xl">
            <div className="flex items-center justify-center gap-4">
              <div className="bg-white p-3 rounded-full hover:scale-110 duration-500">
                <a href="mailto:recruiter@eb3wfs.com">
                  <AiOutlineMail className="text-primary text-4xl" />
                </a>
              </div>
              <p>Email</p>
            </div>
            <p>recruiter@eb3wfs.com</p>
          </div>
        </div>

        {/* Want to know more */}

        <ImgContent
          img={homeImg}
          title1="Contact Us"
          title2="Want to Know More?"
        >
          <p className={`${styles.sectionText} mb-6`}>
            If you find yourself in a situation where you are seeking a
            significant opportunity for a better life and career in the United
            States, or if you are facing challenges in navigating the complex
            immigration process and associated costs, then we have the perfect
            solution for you.
          </p>
          <p className={`${styles.sectionText}`}>
            Introducing the EB-3 Visa Program, a long-term immigration solution
            specifically designed for individuals like yourself. This
            employment-based Green Card option is crafted to address your
            immigration goals and provide the pathway you need to the United
            States.
          </p>
        </ImgContent>

        {/* EB-3 VISA */}

        {/*  <EbTwoCol /> */}

        <Divider />

        {/* EB-3 Worfkforce Solutions */}
        <TitleContent title="EB-3 Workfoce Solutions">
          <p className={`${styles.sectionTitleText}`}>
            At EB-3 Workforce Solutions, we understand the significance of
            pursuing a better life and career opportunities in the United
            States. That's why we provide a unique solution to your immigration
            dreams - the EB-3 Visa program. Our dedicated team is committed to
            assisting interested individuals who are eager to contribute
            positively to the U.S. With a meticulous application process and a
            network of top-notch immigration experts, we ensure that you have
            the best support available for your EB-3 Visa journey. Say goodbye
            to the uncertainties of the immigration process and hello to a
            brighter future with EB-3 Workforce Solutions.
          </p>
        </TitleContent>

        {/* Looking to Start
your American Dream?*/}
        <ImgContent
          img={contactImg}
          title2="Looking to Start
          your American Dream?"
        >
          <p className={`${styles.sectionText}`}>
            Discover the pathway to your American dream with our company! Say
            goodbye to the uncertainty of the immigration journey and hello to a
            dedicated team of professionals eager to assist you. Our partners
            are carefully selected to ensure a smooth process and unwavering
            commitment to your immigration goals. Trust us to guide you on the
            path to the American Dream.
          </p>
        </ImgContent>

        <IFormContact color="primary" />

        <Divider />
      </ISection>
    </>
  );
};

export default IHome;

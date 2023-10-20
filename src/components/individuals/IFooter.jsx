import React from "react";
import logoImg from "@/assets/logo.png";
import { motion } from "framer-motion";
import { staggerContainer, slideIn, zoomIn } from "@/utils/motion";
import { Link } from "react-router-dom";

const IFooter = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.footer
        /* variants={slideIn("left", "tween", 0.2, 1)} */

        className="footer p-10 bg-base-200 text-base-content"
      >
        <aside>
          <img src={logoImg} alt="" />
          <p className="tracking-wider text-left max-w-[550px]">
            EB-3 Workforce Solutions is not a law firm and does not provide
            legal advice. Your communication with EB-3 Workforce Solutions does
            not create an attorney-client relationship and is not protected by
            attorney-client privilege.
          </p>
        </aside>

        <motion.nav variants={zoomIn(0, 1)}>
          <header className="footer-title text-black font-extrabold">
            Quick Links
          </header>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Testimonials</a>
          <a className="link link-hover">Resources</a>
          <a className="link link-hover">Contact</a>
        </motion.nav>
        <motion.nav variants={zoomIn(0.5, 1)}>
          <header className="footer-title text-black font-extrabold">
            Contact Us
          </header>
          <p className="">(305) 564-1311</p>
          <p className="">recruiter@eb3wfs.com</p>
          <p className="">American Dream Recruiting</p>
          <p className="">777 Brickell Avenue Suite 500</p>
          <p className="">Miami, FL 33131</p>
        </motion.nav>
        <motion.nav variants={zoomIn(1, 1)}>
          <header className="footer-title text-black font-extrabold">
            Legal
          </header>
          <a className="link link-hover">Copyright © 2023 All Right Reserved</a>
          <Link to="/privacy-policy">
            <div className="link link-hover">Privacy Policy</div>
          </Link>
          <Link to="/terms-services">
            <div className="link link-hover">Terms of Services</div>
          </Link>
        </motion.nav>
      </motion.footer>
    </motion.div>
  );
};

export default IFooter;

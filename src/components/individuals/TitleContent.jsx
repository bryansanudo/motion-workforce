import { styles } from "@/styles";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn } from "@/utils/motion";

const TitleContent = ({ title, children }) => {
  return (
    <motion.div
    /* variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }} */
    >
      <motion.div
        variants={zoomIn(0, 1)}
        className="flex flex-col gap-6 my-10 items-center justify-center mx-6"
      >
        <p className={`${styles.titleText} max-w-[700px] `}>{title}</p>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default TitleContent;

import { motion, MotionConfig } from "framer-motion";
import data from "../../assets/data";
import Title from "../global/Title";
import Button from "../global/Button";
import { MdPlayArrow } from "react-icons/md";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay },
  }),
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease },
  },
};

const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.3 },
};

const Testimony = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div
        data-nav-theme="light"
        className="max-w-6xl w-full flex max-md:flex-col items-center mx-auto py-20 gap-20 px-6 md:px-12"
      >
        {/* Image card fades and scales in; the photo inside zooms out slowly */}
        <motion.div
          {...inView}
          variants={imageReveal}
          className="flex-1 overflow-hidden border-2 border-[#c5d51a] rounded-2xl h-120 max-md:w-full"
        >
          <motion.img
            src={data.Image100}
            alt=""
            variants={{
              hidden: { scale: 1.2 },
              show: { scale: 1, transition: { duration: 1.6, ease } },
            }}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div>
          {/* Title handles its own animation */}
          <Title
            subtext={"Testimony"}
            mainText={"Your Story Of His"}
            breakedText={"Faithfullness"}
          />

          <motion.p
            {...inView}
            variants={fadeUp}
            custom={0.5}
            className="max-w-120 md:text-[16px] mb-5 text-black/90  text-[14px] font-secondary font-[200]  max-md:w-full"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            doloribus dolorem voluptatem odit a, autem est. A porro veniam,
            ipsum numquam tenetur asperiores eaque et reiciendis quidem ad,
            dolorum molestiae?
          </motion.p>

          <div className="mt-10" />

          <motion.div
            {...inView}
            variants={fadeUp}
            custom={0.65}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-fit"
          >
            <Button
              title={"Share your Testimony"}
              textColor={"text-sm text-[#1e1e1e]"}
              bgColor="bg-[#c5d51a]"
              icon={<MdPlayArrow />}
            />
          </motion.div>
        </div>
      </div>
    </MotionConfig>
  );
};

export default Testimony;

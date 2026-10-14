import { motion, MotionConfig } from "framer-motion";
import data from "../../assets/data";
import { GeneralButton } from "../global/Button";
import { MdPlayArrow } from "react-icons/md";
import Title from "../global/Title";

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
  hidden: { opacity: 0, scale: 0.9 },
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

const About = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div
        data-nav-theme="light"
        className="flex justify-center flex-wrap items-center py-20 md:min-h-125 gap-20 max-w-7xl mx-auto px-6 md:px-12"
      >
        {/* Image: circle fades and scales in, photo inside zooms out slowly */}
        <motion.div
          {...inView}
          variants={imageReveal}
          className="max-md:order-1 size-125 max-[512px]:size-75 max-[312px]:size-50 overflow-hidden rounded-full bg-gray-600"
        >
          <motion.img
            src={data.Image107}
            alt=""
            variants={{
              hidden: { scale: 1.2 },
              show: { scale: 1, transition: { duration: 1.6, ease } },
            }}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        <div className="flex-1">
          {/* Title handles its own animation */}
          <Title
            subtext={"Who We Are"}
            mainText={"Welcome To"}
            breakedText={"The Elevation Church"}
            specialTextwithGradient={"POG"}
          />

          <motion.p
            {...inView}
            variants={fadeUp}
            custom={0.5}
            className="md:text-[16px] mb-5 text-black/90 mt-2 text-[14px] font-secondary font-[200]"
          >
            We are not just a ministry, but a global movement dedicated to
            empowering individuals with the transformative power of biblical
            wisdom and practical principles. With a forward-thinking approach,
            we aim to equip our diverse community with the tools they need to
            achieve greatness in every aspect of their lives.
          </motion.p>

          <motion.div
            {...inView}
            variants={fadeUp}
            custom={0.65}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-fit"
          >
            <GeneralButton
              textColor="text-black"
              icon={<MdPlayArrow />}
              bgColor="bg-transparent border border-black"
              title={"Learn More"}
            />
          </motion.div>
        </div>
      </div>
    </MotionConfig>
  );
};

export default About;

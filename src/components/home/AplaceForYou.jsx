import { motion, MotionConfig } from "framer-motion";
import Title from "../global/Title";
import data from "../../assets/data";
import { GeneralButton } from "../global/Button";
import { MdPlayArrow } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const circle1 = {
  titleText: "Greatness Community",
  content:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsumerum expedita",
  buttonText: "Learn More",
  buttonLink: "/ab",
};
const box1 = {
  titleText: "SEEDS(Kids Church)",
  content:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum rerum expedita",
  buttonText: "Watch Seeds Content",
  buttonLink: "/be",
};
const box2 = { ...box1 };
const circle2 = { ...circle1 };

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay },
  }),
};

// Cards slide in from the side (x = -60 for left, 60 for right)
const slideIn = (x) => ({
  hidden: { opacity: 0, x, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease },
  },
});

const fromLeft = slideIn(-60);
const fromRight = slideIn(60);

const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.25 },
};

const hover = {
  whileHover: {
    y: -4,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const AplaceForYou = () => {
  let navigate = useNavigate();

  return (
    <MotionConfig reducedMotion="user">
      {/* overflow-hidden stops the sideways slide from causing a horizontal scrollbar */}
      <div className="w-full min-h-screen px-6 md:px-12 text-center py-25 bg-linear-to-br from-[#101e6d] to-[#154284] overflow-hidden">
        {/* Title handles its own animation */}
        <Title
          mainText={"POG IS A PLACE FOR YOU AND YOUR FAMILY"}
          textColor="text-white max-w-3xl mx-auto"
        />
        <motion.p
          {...inView}
          variants={fadeUp}
          custom={0.5}
          className="text-gray-100 max-w-3xl mx-auto md:text-[18px] mb-10 text-[14px] font-secondary font-extralight "
        >
          Come Experience an opportunity to connect with peers and cultivate{" "}
          whollesome and empowering relationships in a family of love
        </motion.p>

        <div className="max-w-7xl mt-15 flex flex-wrap items-center justify-center gap-10 mx-auto">
          {/* Box */}
          <motion.div
            {...inView}
            {...hover}
            variants={fromLeft}
            className="w-125 p-5 text-start flex flex-col justify-center gap-10 min-h-80 overflow-hidden max-md:order-1 relative bg-linear-to-r from-[#101e6d]/20 to-blue-300/10 backdrop-blur-2xl border-2 border-blue-500/20 rounded-xl"
          >
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl max-md:text-xl max-sm:text-lg font-primary text-white font-semibold capitalize">
                {box1.titleText}
              </h3>
              <p className="text-white text-sm  font-secondary font-extralight">
                {box1.content}
              </p>
            </div>
            <GeneralButton
              icon={<MdPlayArrow />}
              bgColor="bg-transparent border border-white"
              textColor="text-white text-xs"
              title={box1.buttonText}
              action={() => navigate(box1.buttonLink)}
            />
            <img
              src={data.Logo}
              className="h-40 opacity-5 absolute -bottom-10 -right-10"
              alt=""
              aria-hidden="true"
            />
          </motion.div>

          {/* Circle */}
          <motion.div
            {...inView}
            {...hover}
            variants={fromRight}
            className="size-100 max-sm:size-80 gap-5 p-5 flex flex-col justify-center items-center relative overflow-hidden max-[360px]:size-60 rounded-full bg-[#c5d51a]"
          >
            <div className="flex flex-col justify-center items-center gap-5">
              <h3 className="text-2xl text-[#1e1e1e] max-md:text-xl max-sm:text-lg font-primary font-semibold capitalize">
                {circle1.titleText}
              </h3>
              <p className="text-[#1e1e1e] text-sm  font-secondary font-extralight">
                {circle1.content}
              </p>
            </div>
            <GeneralButton
              icon={<MdPlayArrow />}
              bgColor="bg-transparent border border-[#1e1e1e]"
              textColor="text-[#1e1e1e] text-xs"
              action={() => navigate(circle1.buttonLink)}
              title={circle1.buttonText}
            />
            <img
              src={data.Logo}
              className="h-40 opacity-15 absolute -bottom-10 right-5"
              alt=""
              aria-hidden="true"
            />
          </motion.div>
        </div>

        <div className="max-w-7xl mt-15 flex flex-wrap items-center justify-center gap-10 mx-auto">
          {/* Circle */}
          <motion.div
            {...inView}
            {...hover}
            variants={fromLeft}
            className="size-100 max-sm:size-80 gap-5 p-5 flex flex-col justify-center items-center relative overflow-hidden max-[360px]:size-60 rounded-full bg-[#c5d51a]"
          >
            <div className="flex flex-col justify-center items-center gap-5">
              <h3 className="text-2xl text-[#1e1e1e] max-md:text-xl max-sm:text-lg font-primary font-semibold capitalize">
                {circle2.titleText}
              </h3>
              <p className="text-[#1e1e1e] text-sm  font-secondary font-extralight">
                {circle2.content}
              </p>
            </div>
            <GeneralButton
              icon={<MdPlayArrow />}
              bgColor="bg-transparent border border-[#1e1e1e]"
              textColor="text-[#1e1e1e] text-xs"
              action={() => navigate(circle2.buttonLink)}
              title={circle2.buttonText}
            />
            <img
              src={data.Logo}
              className="h-40 opacity-15 absolute -bottom-10 right-5"
              alt=""
              aria-hidden="true"
            />
          </motion.div>

          {/* Box */}
          <motion.div
            {...inView}
            {...hover}
            variants={fromRight}
            className="w-125 p-5 text-start flex flex-col justify-center gap-10 min-h-80 overflow-hidden max-md:order-1 relative bg-linear-to-r from-[#101e6d]/20 to-blue-300/10 backdrop-blur-2xl border-2 border-blue-500/20 rounded-xl"
          >
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl max-md:text-xl max-sm:text-lg font-primary text-white font-semibold capitalize">
                {box2.titleText}
              </h3>
              <p className="text-white text-sm  font-secondary font-extralight">
                {box2.content}
              </p>
            </div>
            <GeneralButton
              icon={<MdPlayArrow />}
              bgColor="bg-transparent border border-white"
              textColor="text-white text-xs"
              title={box2.buttonText}
              action={() => navigate(box2.buttonLink)}
            />
            <img
              src={data.Logo}
              className="h-40 opacity-5 absolute -bottom-10 -right-10"
              alt=""
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </MotionConfig>
  );
};

export default AplaceForYou;
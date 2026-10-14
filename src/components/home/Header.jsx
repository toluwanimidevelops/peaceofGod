import { motion, MotionConfig } from "framer-motion";
import data from "../../assets/data";
import Button from "../global/Button";
import { MdOndemandVideo } from "react-icons/md";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Line-by-line reveal for the heading
const lineReveal = {
  hidden: { y: "110%" },
  show: {
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const Header = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="w-full grid bg-[#101e6d] md:min-h-screen max-md:grid-cols-1 grid-cols-2">
        <div className="bg-linear-to-br max-md:pt-10 flex items-center max-md:min-h-90 justify-end max-md:justify-start from-[#101e6d] to-[#154284]">
          <motion.div
            className="max-w-3xl px-12 max-md:px-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex font-secondary max-w-full items-center gap-2 mb-5 rounded-full border border-[#c5d51a] bg-white/6 px-4 py-2 text-xs leading-none text-white md:text-sm md:leading-6"
            >
              <div className="size-2 relative bg-[#c5d51a] rounded-full">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#c5d51a] opacity-75 [animation-duration:1.5s]"></span>
              </div>
              <p>Sundays Services. 7AM, 9AM & 11:30AM</p>
            </motion.div>

            {/* Heading: each line slides up from behind a mask */}
            <h1 className="font-primary leading-none text-white text-[60px] max-md:text-[30px] font-bold">
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineReveal} className="block">
                  Making
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineReveal} className="block">
                  Greatness Common
                </motion.span>
              </span>
            </h1>

            {/* Buttons */}
            <motion.div variants={fadeUp} className="flex mt-10 gap-3">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  bgColor="bg-[#c5d51a] hover:bg-[#AAB812] duration-100"
                  title={"Join Us This Sunday"}
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  bgColor="bg-transparent hover:bg-white/5 border-2 text-white border-white duration-100"
                  title={"Watch Online"}
                  icon={<MdOndemandVideo />}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative max-md:h-90 overflow-hidden">
          {/* Slow zoom-out on the image */}
          <motion.img
            src={data.Image109}
            alt=""
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full max-h-screen object-center object-cover"
          />
          <div className="h-full flex-col absolute md:p-12 p-6 lg:pb-20 flex justify-end items-end w-full top-0 left-0 font-primary bg-linear-to-b from-[#001834]/40 to-[#001834]">
            <motion.div
              className="max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
            >
              <p className="text-[#c5d51a] max-md:text-sm text-right">
                OUR YEAR OF METAMORPHOSIS:
              </p>
              <p className="text-white max-md:text-sm text-right">
                A divine shift has been activated and a new form is emerging.
                Old limitations are dismantled and old cycles are broken. We
                walk in freedom, advance with power and
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
};

export default Header;

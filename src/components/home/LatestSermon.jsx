import { motion, MotionConfig } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const lineReveal = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.8, ease } },
};

const pop = {
  hidden: { opacity: 0, scale: 0.6 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 16 },
  },
};

const LatestSermon = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-[#1a699c] w-full min-h-125 flex max-md:flex-col justify-center items-center overflow-hidden">
        <div className="w-160 max-lg:w-100 max-md:order-1 max-md:w-full max-w-full">
          <motion.div
            className="flex justify-end px-6 md:px-12 py-12 flex-col"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={fadeUp}
              className="inline-flex min-h-9 w-fit mb-5 items-center justify-center rounded-full border border-[#c5d51a] bg-[#f0f5fc]/6 px-4 py-2 text-xs leading-none text-white"
            >
              Missed Service
            </motion.p>

            <h2 className="uppercase text-white text-6xl max-lg:text-4xl max-md:text-4xl max-sm:text-4xl font-extrabold font-main">
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineReveal} className="block">
                  Catch up on
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineReveal} className="block">
                  our powerful
                </motion.span>
              </span>
              {/* Outer span animates; inner span keeps the rotation */}
              <motion.span
                variants={pop}
                className="block mt-5 w-fit origin-left"
              >
                <span className="bg-[#c5d51a] rounded-md text-[#1a699c] rotate-10 block p-2 w-fit">
                  SERMON
                </span>
              </motion.span>
            </h2>
          </motion.div>
        </div>

        <motion.div
          className="flex-1 md:min-h-125 max-md:w-full max-md:min-h-60 bg-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </MotionConfig>
  );
};

export default LatestSermon;

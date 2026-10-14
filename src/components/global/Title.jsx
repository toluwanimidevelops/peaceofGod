import { motion, MotionConfig } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

const Title = ({
  subtext,
  mainText,
  breakedText,
  specialTextwithGradient,
  textColor = "text-[#1e1e1e]",
  as = "h2",
  delay = 0, // offset the whole sequence if needed
}) => {
  const Heading = motion[as] || motion.h2;

  // Shared scroll-trigger settings: play once, when ~30% is visible
  const inView = {
    initial: "hidden",
    whileInView: "show",
    viewport: { once: true, amount: 0.3 },
  };

  return (
    <MotionConfig reducedMotion="user">
      {subtext && (
        <motion.p
          {...inView}
          variants={fadeUp}
          custom={delay}
          className="inline-flex font-secondary min-h-9 mb-7 items-center justify-center rounded-full border border-[#c5d51a] bg-[#f0f5fc] px-4 py-2 text-xs leading-none text-[#1e1e1e]"
        >
          {subtext}
        </motion.p>
      )}

      <Heading
        {...inView}
        variants={fadeUp}
        custom={delay + 0.12}
        className={`font-primary mb-5 ${textColor} leading-none text-[48px] max-md:text-[30px] font-bold`}
      >
        {mainText}
        {breakedText && (
          <>
            {" "}
            <br /> {breakedText}
          </>
        )}{" "}
        <motion.span
          variants={fadeIn}
          custom={delay + 0.4}
          className="bg-linear-to-r from-[#101e6d] to-[#c5d51a] bg-clip-text text-transparent"
        >
          {specialTextwithGradient}
        </motion.span>
      </Heading>
    </MotionConfig>
  );
};

export default Title;

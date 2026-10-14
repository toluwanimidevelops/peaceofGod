import { motion } from "framer-motion";

const Button = ({
  title,
  action,
  bgColor = "bg-[#1a699c]",
  textColor = "text-[#1E1E1E]",
  icon,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      onClick={action}
      className={`w-fit ${textColor} flex items-center justify-center gap-2 ${bgColor} font-secondary text-[13px] max-md:text-[14px] max-md:font-semibold max-lg:text-[16px] max-sm:text-[12px] font-semibold px-6 max-lg:px-6 max-md:px-5 max-sm:px-3 duration-700 cursor-pointer rounded-md py-3`}
    >
      {title}
      {icon && icon}
    </motion.button>
  );
};
export const GeneralButton = ({
  title,
  action,
  bgColor = "bg-[#1a699c]",
  textColor = "text-[#1E1E1E]",
  icon,
}) => {
  return (
    <button
      onClick={action}
      className={` w-fit  flex items-center justify-center gap-2 ${bgColor}   font-secondary text-xs font-normal   px-5  duration-700 cursor-pointer rounded-sm py-2 ${textColor}`}
    >
      {title}
      {icon && icon}
    </button>
  );
};
export default Button;

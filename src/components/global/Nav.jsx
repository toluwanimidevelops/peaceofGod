import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import data from "../../assets/data";
import Button from "./Button";
import { MdOndemandVideo } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  { name: "Online", link: "/online", icon: <MdOndemandVideo /> },
  { name: "Home", link: "/" },
  { name: "Who We Are", link: "/about" },
  { name: "Expression", link: "/location" },
  { name: "Sermons", link: "/sermon" },
  { name: "Events", link: "/event" },
  { name: "Articles", link: "/blogs" },
  { name: "Give", link: "/give" },
];

const NAV_HEIGHT = 80; // h-20

// Animation variants
const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.25 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: -12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [onLight, setOnLight] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    let frame = null;

    const check = () => {
      setScrolled(window.scrollY > 10);

      // Is any light section sitting behind the middle of the nav?
      const probeY = NAV_HEIGHT / 2;
      const lightSections = document.querySelectorAll(
        '[data-nav-theme="light"]',
      );
      const isLight = Array.from(lightSections).some((el) => {
        const { top, bottom } = el.getBoundingClientRect();
        return top <= probeY && bottom >= probeY;
      });
      setOnLight(isLight);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        check();
        frame = null;
      });
    };

    const initial = requestAnimationFrame(check);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(initial);
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  // Nav container: nothing until scrolled, then blur + border (light tint over white sections)
  const navStyle = !scrolled
    ? "bg-transparent backdrop-blur-none border-transparent"
    : onLight
      ? "bg-white/40 backdrop-blur-md border-black/10"
      : "bg-transparent backdrop-blur-md border-[#c5d51a]/40";

  // Full class strings so Tailwind can detect them (faded black instead of pure black)
  const idleText = onLight ? "text-black/80" : "text-white";
  const activeText = onLight ? "text-blue-500" : "text-[#c5d51a]";
  const hoverText = onLight ? "hover:text-blue-500" : "hover:text-[#c5d51a]";
  const mobileLinks = ["Home", "Who We Are", "Events", "Give"];

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed z-99 md:px-12 px-6 h-20 w-full flex justify-between items-center border-b transition-[background-color,backdrop-filter,border-color] duration-300 ${navStyle}`}
    >
      {/* Logo */}
      <motion.div
        className="w-12"
        whileHover={{ scale: 1.08, rotate: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={data.Logo} alt="" />
      </motion.div>

      {/* Links */}
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="show"
        className="flex max-md:hidden gap-7 max-lg:gap-5   justify-center items-center"
      >
        {links.map((e) => (
          <motion.li
            key={e.link}
            className={
              mobileLinks.includes(e.name) ? "max-md:flex" : "max-[1000px]:hidden"
            }
            variants={itemVariants}
            whileHover={{ y: -2 }}
          >
            <NavLink
              to={e.link}
              end={e.link === "/"}
              className={({ isActive }) =>
                `flex justify-center font-semibold max-md:font-normal gap-2 items-center transition-colors duration-300 ${hoverText} ${
                  isActive ? activeText : idleText
                }`
              }
            >
              {e.icon && e.icon}
              {e.name}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>

      {/* Button */}
      <motion.div
        className="max-md:hidden"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button title="Testimony" textColor="text-white" />
      </motion.div>
    </motion.div>
  );
};

export default Nav;

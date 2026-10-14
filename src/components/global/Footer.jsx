import { Link } from "react-router-dom";
import { motion, MotionConfig } from "framer-motion";
import data from "../../assets/data";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease } },
};

const Footer = () => {
  const links = [
    {
      title: "Quick Links",
      items: [
        { name: "Who We Are", href: "#" },
        { name: "Our Expressions", href: "#" },
        { name: "Give", href: "#" },
        { name: "Testimonies", href: "#" },
        { name: "Events", href: "#" },
        { name: "Articles", href: "#" },
      ],
    },
    {
      title: "Service Times",
      items: [
        { name: "Sundays: 7AM, 9AM & 11:30AM" },
        { name: "Wednesday: 6:30PM" },
      ],
    },
    {
      title: "Media",
      items: [
        { name: "Watch Live", href: "#" },
        { name: "Sermons", href: "#" },
        { name: "Media", href: "#" },
      ],
    },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <footer className="bg-linear-to-br relative from-[#111e6d] to-[#19669a] px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="h-40 -top-50 mx-auto relative w-full max-w-6xl">
          {/* Animate the inner box, not the positioned wrapper */}
          <motion.div
            variants={cardReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full min-h-90 bg-[#f0f5fb] rounded-xl"
          />
        </div>

        <motion.div
          className="max-w-full pt-15 mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="flex flex-col lg:flex-row gap-16 pb-12">
            <motion.div
              variants={fadeUp}
              className="flex-1 max-w-full lg:max-w-100"
            >
              <div className="mb-6">
                <img src={data.Logo} className="w-12" alt="Peace of God logo" />
              </div>
              <p className="text-base font-secondary leading-7 text-white mb-7 max-w-80">
                Join us at Peace of God Apostolic and Prophetic Ministries for
                love, fellowship, and spiritual growth. Attend our services or
                participate in our community outreach programs.
              </p>
            </motion.div>

            <div className="flex flex-wrap sm:flex-nowrap flex-1 justify-between gap-8 w-full max-w-3xl">
              {links.map((link, index) => (
                <motion.div key={index} variants={fadeUp}>
                  <h3 className="text-base font-[600] text-white font-primary mb-6">
                    {link.title}
                  </h3>
                  <ul className="flex flex-col gap-5 list-none">
                    {link.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {item.name && item.href && (
                          <Link
                            to={item.href}
                            className="inline-block text-base cursor-pointer text-white/80 font-secondary hover:text-white hover:translate-x-1 transition-all duration-300"
                          >
                            {item.name}
                          </Link>
                        )}
                        {item.name && !item.href && (
                          <p className="text-base text-white/80 font-secondary">
                            {item.name}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            variants={fadeUp}
            className="py-4 border-t border-zinc-300"
          >
            <p className="text-sm text-center text-zinc-500">
              &copy; {new Date().getFullYear()} Peace of God Apostolic and
              Prophetic Ministry. All Rights Reserved.
            </p>
          </motion.div>
        </motion.div>

        <img
          src={data.Logo}
          className="w-100 absolute opacity-5 bottom-0 right-0"
          alt=""
          aria-hidden="true"
        />
      </footer>
    </MotionConfig>
  );
};

export default Footer;
import { motion, MotionConfig } from "framer-motion";
import Title from "../global/Title";
import data from "../../assets/data";
import Button from "../global/Button";
import EventCard from "../global/EventCard";

const EventData = [
  {
    id: 1,
    image: data.Image118,
    title: "Bake Sale For Charity",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Monday 20th October 2026",
    time: "5:00pm",
    location: "Lagos Nigeria",
  },
  {
    id: 1,
    image: data.Image108,
    title: "Bake Sale For Charity",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Monday 20th October 2026",
    time: "5:00pm",
    location: "Lagos Nigeria",
  },
  {
    id: 1,
    image: data.Image18,
    title: "Bake Sale For Charity",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Monday 20th October 2026",
    time: "5:00pm",
    location: "Lagos Nigeria",
  },
];

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay },
  }),
};

const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
};

const Events = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div
        data-nav-theme="light"
        className="py-20 gap-20 max-w-7xl mx-auto px-6 md:px-12"
      >
        <div className="text-center">
          {/* Title handles its own animation */}
          <Title mainText={"Past Events At"} specialTextwithGradient={"POG"} />
          <motion.p
            {...inView}
            variants={fadeUp}
            custom={0.5}
            className="max-w-md text-center mx-auto md:text-[18px] mb-10 text-black/90 mt-2 text-[14px] font-secondary font-extralight"
          >
            No upcoming events right now... Here is a look at our more recent
            gatherings.
          </motion.p>
        </div>

        <div className="grid pt-5 sm:grid-cols-2 grid-cols-1 gap-7 lg:grid-cols-3 md:grid-cols-2">
          {EventData.map((e, ind) => (
            <motion.div
              key={ind}
              {...inView}
              variants={fadeUp}
              // delay resets every 3 cards so lower rows don't wait on upper ones
              custom={(ind % 3) * 0.12}
              className="h-full"
            >
              <EventCard data={e} />
            </motion.div>
          ))}

          <motion.div
            {...inView}
            variants={fadeUp}
            custom={0}
            className="col-span-1 lg:col-span-3 sm:col-span-2 md:col-span-2 flex justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button title={"View All Events"} textColor="text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </MotionConfig>
  );
};

export default Events;

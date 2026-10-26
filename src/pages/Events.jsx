import { useMemo, useState } from "react";

import { CiSearch } from "react-icons/ci";
import data from "../assets/data";
import EventCard from "../components/global/EventCard";
import Title from "../components/global/Title";
import moment from "moment";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
const EventData = [
  {
    id: 1,
    image: data.Image1,
    title: "Tech Innovation Summit 2026",
    description:
      "A conference exploring the latest advancements in AI, robotics, and cloud computing.",
    date: "2026-11-05",
    time: "09:00 AM",
    location: "Convention Center, Hall A",
  },
  {
    id: 2,
    image: data.Image2,
    title: "Autumn Jazz Night",
    description:
      "An evening of smooth jazz performances by local and international artists.",
    date: "2026-11-08",
    time: "07:30 PM",
    location: "Blue Note Lounge",
  },
  {
    id: 3,
    image: data.Image3,
    title: "Startup Pitch Fest",
    description:
      "Emerging entrepreneurs pitch their ideas to a panel of venture capitalists.",
    date: "2026-11-12",
    time: "02:00 PM",
    location: "Innovation Hub, Room 302",
  },
  {
    id: 4,
    image: data.Image4,
    title: "Global Food & Wine Expo",
    description:
      "Taste cuisines and premium wines from over 30 countries around the world.",
    date: "2026-11-15",
    time: "11:00 AM",
    location: "Grand Exhibition Pavilion",
  },
  {
    id: 5,
    image: data.Image5,
    title: "Charity 10K Run",
    description:
      "Annual marathon raising funds for local children's hospitals.",
    date: "2026-11-20",
    time: "06:30 AM",
    location: "Central Park Main Gate",
  },
  {
    id: 6,
    image: data.Image6,
    title: "Modern Art Exhibition",
    description:
      "Showcasing contemporary paintings, sculptures, and digital art installations.",
    date: "2026-11-22",
    time: "10:00 AM",
    location: "City Art Gallery",
  },
  {
    id: 7,
    image: data.Image7,
    title: "Cybersecurity Workshop",
    description:
      "Hands-on training session on ethical hacking, threat prevention, and network security.",
    date: "2026-11-25",
    time: "01:00 PM",
    location: "Tech Campus, Lab 4B",
  },
  {
    id: 8,
    image: data.Image8,
    title: "Indie Film Festival",
    description:
      "Screenings of award-winning independent films followed by Q&A with directors.",
    date: "2026-11-28",
    time: "05:00 PM",
    location: "Cinema Paradisio",
  },
  {
    id: 9,
    image: data.Image9,
    title: "E-Commerce Growth Bootcamp",
    description:
      "Learn strategies for digital marketing, conversion optimization, and customer retention.",
    date: "2026-12-01",
    time: "10:00 AM",
    location: "Online / Zoom Webinar",
  },
  {
    id: 10,
    image: data.Image10,
    title: "Acoustic Sunset Concert",
    description: "Relaxing live acoustic music by the beach as the sun sets.",
    date: "2026-12-04",
    time: "05:30 PM",
    location: "Sunset Beach Stage",
  },
  {
    id: 11,
    image: data.Image11,
    title: "UX/UI Design Masterclass",
    description:
      "Interactive session on creating user-centered interfaces and high-fidelity prototypes.",
    date: "2026-12-07",
    time: "03:00 PM",
    location: "Design Studio 101",
  },
  {
    id: 12,
    image: data.Image12,
    title: "Winter Craft Market",
    description:
      "Discover handcrafted jewelry, ceramics, clothing, and holiday decorations.",
    date: "2026-12-10",
    time: "09:00 AM",
    location: "Old Town Square",
  },
  {
    id: 13,
    image: data.Image13,
    title: "Game Developers Meetup",
    description:
      "Network with game designers, programmers, and animators to share ideas.",
    date: "2026-12-12", // was 2027-12-12 (likely typo)
    time: "06:00 PM",
    location: "Pixel Gaming Lounge",
  },
  {
    id: 14,
    image: data.Image14,
    title: "Sustainable Living Forum",
    description:
      "Panel discussions on eco-friendly habits, renewable energy, and waste reduction.",
    date: "2026-12-15",
    time: "11:30 AM",
    location: "Green Life Center",
  },
  {
    id: 15,
    image: data.Image15,
    title: "Symphony Orchestra Night",
    description:
      "Classical masterpiece performances conducted by Maestro Alexander Vance.",
    date: "2026-12-18",
    time: "08:00 PM",
    location: "Royal Concert Hall",
  },
  {
    id: 16,
    image: data.Image16,
    title: "Photography Outdoor Walk",
    description:
      "Guided street and nature photography walk for beginners and enthusiasts.",
    date: "2026-12-20",
    time: "08:00 AM",
    location: "Botanical Gardens",
  },
  {
    id: 17,
    image: data.Image17,
    title: "Data Science & AI Conference",
    description:
      "Deep dive into machine learning algorithms, big data, and neural networks.",
    date: "2027-01-10",
    time: "09:30 AM",
    location: "Metropolitan Hotel Ballroom",
  },
  {
    id: 18,
    image: data.Image18,
    title: "Stand-up Comedy Night",
    description:
      "A hilarious night featuring top stand-up comedians from across the country.",
    date: "2027-01-14",
    time: "08:30 PM",
    location: "The Laugh Factory",
  },
  {
    id: 19,
    image: data.Image19,
    title: "Fitness & Wellness Retreat",
    description:
      "A full day of yoga, meditation, nutrition talks, and mindfulness practice.",
    date: "2025-01-18",
    time: "07:00 AM",
    location: "Serenity Resort & Spa",
  },
  {
    id: 20,
    image: data.Image20,
    title: "Blockchain & Web3 Summit",
    description:
      "Exploring decentralized applications, smart contracts, and the future of finance.",
    date: "2026-10-26",
    time: "10:00 AM",
    location: "FinTech Hub Plaza",
  },
];
// + motion variants (outside the component so they're created once)
const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    // cap the delay so long lists don't feel slow
    transition: { duration: 0.4, ease: "easeOut", delay: Math.min(i, 8) * 0.06 },
  }),
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

const TermData = [
  { key: "All", value: "" },
  { key: "This Week", value: "this-week" },
  { key: "Next Week", value: "next-week" },
  { key: "This Month", value: "this-month" },
];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [term, setTerm] = useState("");

  // EventData is never modified. The visible list is derived from it
  // on every change, so clearing the search or picking "All" always
  // brings back the full list.

  const PastEvents = useMemo(() => {
    // Sets 'now' to today at 00:00:00
    let todayStart = moment().startOf("day");

    // Captures everything strictly before today (yesterday and older)
    return EventData.filter((e) =>
      moment(e.date, "YYYY-MM-DD").isBefore(todayStart),
    );
  }, []); // Added EventData dependency so it recalculates when data changes

  const RecentEvents = useMemo(() => {
    let todayStart = moment().startOf("day");

    // Captures everything from today (00:00:00) onwards
    return EventData.filter((e) =>
      moment(e.date, "YYYY-MM-DD").isSameOrAfter(todayStart),
    );
  }, []);

  const filteredEvents = useMemo(() => {
    const now = moment();
    const startThisWeek = now.clone().startOf("isoWeek");
    const endThisWeek = now.clone().endOf("isoWeek");
    const startNextWeek = now.clone().add(1, "week").startOf("isoWeek");
    const endNextWeek = now.clone().add(1, "week").endOf("isoWeek");
    const query = searchTerm.trim().toLowerCase();

    return RecentEvents.filter((e) => {
      // 1. Search filter
      if (query && !e.title.toLowerCase().includes(query)) return false;

      // 2. Period filter
      const eventDate = moment(e.date, "YYYY-MM-DD");
      switch (term) {
        case "this-week":
          return eventDate.isBetween(startThisWeek, endThisWeek, "day", "[]");
        case "next-week":
          return eventDate.isBetween(startNextWeek, endNextWeek, "day", "[]");
        case "this-month":
          return eventDate.isSame(now, "month");
        default:
          return true;
      }
    });
  }, [searchTerm, term, RecentEvents]);

  return (
     <MotionConfig reducedMotion="user">
      <div className="relative">
        {/* HERO: staggered fade-up */}
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="min-h-120 px-6 md:px-12 bg-linear-to-br from-[#101e6d] to-[#154284] flex flex-col justify-center items-center"
        >
          <motion.p
            variants={fadeUp}
            className="inlines-flex min-h-8 w-fit mb-5 items-center justify-center rounded-full border border-[#c5d51a] bg-[#f0f5fc]/6 px-4 py-2 text-xs leading-none text-white"
          >
            Events
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className={`font-primary mb-2 text-white leading-none text-[48px] max-md:text-[30px] font-bold`}
          >
            Events At <span className="text-[#c5d51a]">PGAPM</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="max-w-md text-center text-white mx-auto md:text-[14px] mb-10 text-black/90
       text-[12px] font-secondary font-extralight"
          >
            Stay updated with the latest events and activities at PGAPM.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="w-3xl rounded-full max-md:p-3 max-w-full mx-auto p-4  self-center bg-white/10 backdrop-blur-sm border border-white/20  flex justify-between items-center gap-5"
          >
            <input
              type="text"
              className="flex-1 outline-none text-white"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex justify-center  items-center bg-[#c5d51a]/30 backdrop-blur-lg  cursor-pointer rounded-full  text-white hover:bg-[#a0b50f] transition-colors duration-300 p-2"
            >
              <CiSearch size={20} color="white" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* TABS: fade in after the hero, press feedback on buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="h-12 w-xl max-w-full   px-6 md:px-12 mx-auto relative -top-12"
        >
          <div className="h-24 p-4 bg-white/10 border border-white/30 shadow-md  backdrop-blur-sm rounded-2xl  w-full">
            <div className="h-full bg-white/30 border border-white/30 flex gap-1 justify-between items-center p-2.5  backdrop-blur-sm rounded-2xl  w-full">
              {TermData.map((e) => {
                const active = e.value === term;
                return (
                  <motion.button
                    key={e.key}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full max-md:text-xs font-medium text-sm max-w-4xs p-2 rounded-lg flex items-center justify-center h-full  text-center font-secondary ${active ? "bg-white shadow-md  text-gray-500" : " text-gray-700"} cursor-pointer`}
                    onClick={() => setTerm(e.value)}
                    disabled={!RecentEvents.length}
                  >
                    {e.key}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* RECENT EVENTS TITLE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          data-nav-theme="light"
          className="max-w-7xl px-6 md:px-12 mt-10  mx-auto"
        >
          <Title mainText={"Recent Events"} />
        </motion.div>

        {/* RECENT EVENTS GRID: cards animate in, out, and reflow on filter */}
        <div
          data-nav-theme="light"
          className="grid  pt-3 sm:grid-cols-2 max-w-7xl mx-auto px-6 md:px-12 grid-cols-1 gap-3 lg:grid-cols-3 md:grid-cols-2"
        >
          <AnimatePresence>
            {filteredEvents.map((e, i) => (
              <motion.div
                key={e.id}
                layout
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="h-full"
              >
                <EventCard data={e} isPresent={"Upcoming Event"} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {filteredEvents.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto px-6 md:px-12 py-10 text-center text-gray-500 font-secondary text-sm"
          >
            No events match your search. Try a different keyword or period.
          </motion.p>
        )}

        {/* Past Event */}
        {!term && !searchTerm.trim() && (
          <>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              data-nav-theme="light"
              className="max-w-7xl px-6 md:px-12 mt-10  mx-auto"
            >
              <Title mainText={"Past Events"} />
            </motion.div>
            <div
              data-nav-theme="light"
              className="grid  pt-3 sm:grid-cols-2 max-w-7xl mx-auto px-6 md:px-12 grid-cols-1 gap-3 lg:grid-cols-3 md:grid-cols-2"
            >
              {PastEvents.map((e, i) => (
                <motion.div
                  key={e.id}
                  custom={i % 3} // stagger within each row, not the whole list
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="h-full"
                >
                  <EventCard data={e} isPresent={"Past Event"} />
                </motion.div>
              ))}
            </div>
            {PastEvents.length === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-6 md:px-12 py-10 text-center text-gray-500 font-secondary text-sm"
              >
                No past Events
              </motion.p>
            )}
          </>
        )}
      </div>
    </MotionConfig>
  );
};

export default Events;

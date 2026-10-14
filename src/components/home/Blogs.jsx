import { motion, MotionConfig } from "framer-motion";
import Title from "../global/Title";
import Button from "../global/Button";
import data from "../../assets/data";
import { MdArrowForward } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";


const BlogData = [
  {
    id: 1,
    image: data.Image118,
    genre: "Press",
    title: "Bake Sale For Charity",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Monday 20th October 2026",
    time: "5:00pm",
    location: "Lagos Nigeria",
  },
  {
    id: 1,
    genre: "Press",
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
    genre: "Press",
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

const BlogCard = ({ data, index = 0 }) => {
  return (
    <motion.div
      {...inView}
      variants={fadeUp}
      // delay resets every 3 cards so lower rows don't wait on upper ones
      custom={(index % 3) * 0.12}
      whileHover={{
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="group w-full flex rounded-xl flex-col gap-10 justify-between cursor-pointer bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 p-3"
    >
      <div className="flex flex-col gap-3">
        {/* Image: the wrapper clips the zoom */}
        <div className="overflow-hidden rounded-xl">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-50 object-center object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>

        <div className="w-full justify-between items-start gap-20 text-[#1e1e1e]">
          <p className="inline-flex mb-1 shrink-0 items-center justify-center rounded-full bg-[#f0f5fc] px-3 py-0.5 text-xs leading-none text-[#1e1e1e]/80">
            {data.genre}
          </p>
          <h3 className="flex-1 max-sm:text-xl text-xl font-secondary font-semibold">
            {data.title}
          </h3>
        </div>

        <p className="text-xs text-gray-600 leading-5 tracking-wide font-secondary">
          {data.description.slice(0, 200)}{" "}
          {data.description.length > 200 && <span>.....</span>}
        </p>
      </div>

      <Link
        to={`/blog/${data.id}`}
        className="inline-flex items-center gap-1 w-fit text-sm font-secondary group-hover:text-[#101e6d] transition-colors duration-300"
      >
        Read More
        <MdArrowForward className="transition-transform duration-300 group-hover:translate-x-1.5" />
      </Link>
    </motion.div>
  );
};

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-125 bg-[#f0f5fb]">
        <div className="py-20 gap-20 max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-start">
            {/* Title handles its own animation */}
            <Title subtext={"From our Blog"} mainText={"Latest Articles"} />
            <motion.p
              {...inView}
              variants={fadeUp}
              custom={0.5}
              className="max-w-2xl md:text-[18px] mb-10 text-black/90 mt-2 text-[14px] font-secondary font-extralight"
            >
              Explore Stories Insights and inspiration from Peace of God
              Apostilic and Prophetic Ministry. Community
            </motion.p>
          </div>

          <div className="grid pt-5 sm:grid-cols-2 grid-cols-1 gap-7 lg:grid-cols-3 md:grid-cols-2">
            {BlogData.map((e, ind) => (
              <BlogCard data={e} index={ind} key={ind} />
            ))}

            <motion.div
              {...inView}
              variants={fadeUp}
              custom={0}
              className="col-span-1 lg:col-span-3 sm:col-span-2 md:col-span-2 flex justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  action={() => navigate("/blogs")}
                  title={"View All Articles"}
                  bgColor="bg-[#c5d51a]"
                  textColor="text-[#1e1e1e]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
};

export default Blogs;
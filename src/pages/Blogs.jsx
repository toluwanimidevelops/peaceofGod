import  { useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";
import data from "../assets/data";
import { BlogCard } from "../components/home/Blogs";
const TermData = [
  { key: "All", value: "" },
  { key: "Faith", value: "faith" },
  { key: "Devotionals", value: "devotionals" },
  { key: "Leadership", value: "leader-ship" },
  { key: "Lifestyle", value: "lifestyle" },
];

const blogPosts = [
  {
    id: 1,
    image: data.Image118,
    genre: "faith",
    title: "Walking in Unshakeable Confidence",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Monday 20th October 2026",
    time: "5:00pm",
    location: "Lagos Nigeria",
  },
  {
    id: 2,
    image: data.Image119,
    genre: "devotionals",
    title: "Finding Strength in Morning Solitude",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Tuesday 21st October 2026",
    time: "6:00am",
    location: "Lagos Nigeria",
  },
  {
    id: 3,
    image: data.Image120,
    genre: "leader-ship",
    title: "Leading with Empathy and Purpose",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Wednesday 22nd October 2026",
    time: "4:00pm",
    location: "Lagos Nigeria",
  },
  {
    id: 4,
    image: data.Image121,
    genre: "lifestyle",
    title: "Balancing Work, Faith, and Family",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Thursday 23rd October 2026",
    time: "2:00pm",
    location: "Lagos Nigeria",
  },
  {
    id: 5,
    image: data.Image122,
    genre: "faith",
    title: "Embracing Grace in Times of Trial",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Friday 24th October 2026",
    time: "10:00am",
    location: "Lagos Nigeria",
  },
  {
    id: 6,
    image: data.Image123,
    genre: "devotionals",
    title: "The Power of Persistent Prayer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Saturday 25th October 2026",
    time: "7:00am",
    location: "Lagos Nigeria",
  },
  {
    id: 7,
    image: data.Image124,
    genre: "leader-ship",
    title: "Mentoring the Next Generation",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Sunday 26th October 2026",
    time: "3:00pm",
    location: "Lagos Nigeria",
  },
  {
    id: 8,
    image: data.Image125,
    genre: "lifestyle",
    title: "Cultivating Gratitude Every Day",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Monday 27th October 2026",
    time: "8:00am",
    location: "Lagos Nigeria",
  },
  {
    id: 9,
    image: data.Image126,
    genre: "faith",
    title: "Overcoming Fear with Divine Assurance",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Tuesday 28th October 2026",
    time: "6:00pm",
    location: "Lagos Nigeria",
  },
  {
    id: 10,
    image: data.Image127,
    genre: "devotionals",
    title: "Meditation on Scripture for Daily Peace",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Wednesday 29th October 2026",
    time: "5:30am",
    location: "Lagos Nigeria",
  },
  {
    id: 11,
    image: data.Image128,
    genre: "leader-ship",
    title: "Stewardship and Accountability in Teams",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Thursday 30th October 2026",
    time: "1:00pm",
    location: "Lagos Nigeria",
  },
  {
    id: 12,
    image: data.Image129,
    genre: "lifestyle",
    title: "Mindful Living Through Christian Values",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Friday 31st October 2026",
    time: "11:00am",
    location: "Lagos Nigeria",
  },
  {
    id: 13,
    image: data.Image130,
    genre: "faith",
    title: "Trusting the Process of Spiritual Growth",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Saturday 1st November 2026",
    time: "4:00pm",
    location: "Lagos Nigeria",
  },
  {
    id: 14,
    image: data.Image131,
    genre: "devotionals",
    title: "Walking Closely with the Creator",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Sunday 2nd November 2026",
    time: "6:30am",
    location: "Lagos Nigeria",
  },
  {
    id: 15,
    image: data.Image132,
    genre: "leader-ship",
    title: "Vision Casting for Community Impact",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Monday 3rd November 2026",
    time: "2:00pm",
    location: "Lagos Nigeria",
  },
  {
    id: 16,
    image: data.Image133,
    genre: "lifestyle",
    title: "Intentional Rest and Sabbath Keeping",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Tuesday 4th November 2026",
    time: "9:00am",
    location: "Lagos Nigeria",
  },
  {
    id: 17,
    image: data.Image134,
    genre: "faith",
    title: "Finding Hope in Uncertain Seasons",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Wednesday 5th November 2026",
    time: "5:00pm",
    location: "Lagos Nigeria",
  },
  {
    id: 18,
    image: data.Image135,
    genre: "devotionals",
    title: "Renewing Your Mind Daily",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Thursday 6th November 2026",
    time: "6:00am",
    location: "Lagos Nigeria",
  },
  {
    id: 19,
    image: data.Image136,
    genre: "leader-ship",
    title: "Servant Leadership in Action",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Friday 7th November 2026",
    time: "3:30pm",
    location: "Lagos Nigeria",
  },
  {
    id: 20,
    image: data.Image137,
    genre: "lifestyle",
    title: "Building Healthy Habits with Purpose",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis?",
    date: "Saturday 8th November 2026",
    time: "10:00am",
    location: "Lagos Nigeria",
  },
];
const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [tabFilter, setTabFilter] = useState("");
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearchTerm = post.title
        .toLowerCase()
        .includes(searchTerm?.toLowerCase() || "");
      const matchesTabFilter = tabFilter === "" || post.genre === tabFilter;
      return matchesSearchTerm && matchesTabFilter;
    });
  }, [searchTerm, tabFilter]);

  return (
    <div>
      <div className="min-h-120 px-6 md:px-12  flex flex-col justify-center items-center bg-[#1a699c]">
        <p className="inlines-flex min-h-8 w-fit mb-5 items-center justify-center rounded-full border border-[#c5d51a] bg-[#f0f5fc]/6 px-4 py-2 text-xs leading-none text-white">
          Blogs
        </p>
        <h1
          className={`font-primary mb-2 text-white leading-none text-[48px] max-md:text-[30px] font-bold`}
        >
          Here To Help You{" "}
          <span className="text-[#c5d51a] bg-linear-to-br from-[#101e6d] to-[#154284] p-0.5 rounded-md">
            Grow
          </span>
        </h1>
        <p
          className="max-w-md text-center text-white mx-auto md:text-[14px] mb-10 text-black/90
                 text-[12px] font-secondary font-extralight"
        >
          Stay updated with the latest events and activities at PGAPM.
        </p>
        <div className="w-3xl rounded-full max-md:p-3 max-w-full mx-auto p-4  self-center bg-white/10 backdrop-blur-sm border border-white/20  flex justify-between items-center gap-5">
          <input
            type="text"
            className="flex-1 outline-none text-white"
            placeholder="Search Blogs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="flex justify-center  items-center bg-[#c5d51a]/30 backdrop-blur-lg  cursor-pointer rounded-full  text-white hover:bg-[#a0b50f] transition-colors duration-300 p-2">
            <CiSearch size={20} color="white" />
          </button>
        </div>
      </div>
      {/* TABS: fade in after the hero, press feedback on buttons */}
      <div
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        className="h-12 w-2xl max-w-full   px-6 md:px-12 mx-auto relative -top-12"
      >
        <div className="h-24 p-4 bg-white/10 border border-white/30 shadow-md  backdrop-blur-sm rounded-2xl  w-full">
          <div className="h-full bg-white/30 border border-white/30 flex gap-1 justify-between items-center p-2.5  backdrop-blur-sm rounded-2xl  w-full">
            {TermData.map((e) => {
              const active = e.value === tabFilter;
              return (
                <button
                  key={e.key}
                  className={`w-full max-md:text-xs font-medium text-sm max-w-4xs p-2 rounded-lg flex items-center justify-center h-full  text-center font-secondary ${active ? "bg-white shadow-md  text-gray-500" : " text-gray-700"} cursor-pointer`}
                  onClick={() => setTabFilter(e.value)}
                >
                  {e.key}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div
        data-nav-theme="light"
        className="grid  pt-3 sm:grid-cols-2 max-w-7xl mx-auto px-6 md:px-12 grid-cols-1 gap-3 lg:grid-cols-3 md:grid-cols-2"
      >
        {filteredPosts.map((post, index) => (
          <BlogCard key={post.id} data={post} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;

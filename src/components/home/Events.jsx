import React from "react";
import Title from "../global/Title";
import data from "../../assets/data";
import { FiCalendar } from "react-icons/fi";
import { CiClock1, CiLocationOn } from "react-icons/ci";
import Button from "../global/Button";
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
const EventCard = ({ data }) => {
  return (
    <div className="w-full flex rounded-xl flex-col gap-10 justify-between hover:scale-99 cursor-pointer bg-white duration-300 shadow-xl p-3">
      {/* Image Title and Description  */}
      <div className="flex flex-col gap-3">
        {/* Image */}
        <img
          src={data.image}
          className="w-full h-50 rounded-xl object-center object-cover"
        />
        {/* Title */}
        <div className="flex w-full justify-between items-start gap-20 text-[#1e1e1e]">
          <h1 className=" flex-1 max-sm:text-xl text-2xl  font-secondary font-bold">
            {data.title}
          </h1>
          <p className="inline-flex min-h-4 shrink-0 items-center justify-center rounded-full border border-[#b5c0ce] bg-[#f0f5fc] px-3 py-1.5 text-xs leading-none text-[#1e1e1e]/80">
            Past Event
          </p>
        </div>
        {/* Description  */}
        <p className="text-sm  tracking-wide font-primary">
          {data.description.slice(0, 120)}{" "}
          {data.description.length > 120 && <span>.....</span>}
        </p>
      </div>
      {/* Date Time & Location with learn More Button  */}
      <div className="flex flex-col gap-2">
        <div className="gap-5 flex ">
          <p className="flex gap-1 justify-center items-center">
            <FiCalendar /> {data.date}
          </p>{" "}
          {data.time && (
            <p className="flex gap-1 justify-center items-center">
              {" "}
              <CiClock1 strokeWidth={1} />
              {data.time}
            </p>
          )}
        </div>
        <div className="flex justify-between items-center">
          <p className="flex gap-1 justify-center items-center">
            {" "}
            <CiLocationOn strokeWidth={1} />
            {data.location}
          </p>
        </div>
      </div>
    </div>
  );
};
const Events = () => {
  return (
    <div
      data-nav-theme="light"
      className=" py-20 gap-20 max-w-7xl mx-auto px-6 md:px-12 "
    >
      <div className="text-center">
        <Title mainText={"Past Events At"} specialTextwithGradient={"POG"} />
        <p className="max-w-sm text-center  mx-auto">
          No upcoming events right now... Here is a look at our more recent
          gatherings.
        </p>
      </div>
      <div className="grid pt-5 grid-cols-1 gap-7 lg:grid-cols-3 md:grid-cols-2">
        {EventData.map((e, ind) => (
          <EventCard data={e} key={ind} />
        ))}
        <div className="col-span-1 lg:col-span-3 md:col-span-2 flex justify-center items-center">
          <Button title={"View All Events"} textColor="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Events;

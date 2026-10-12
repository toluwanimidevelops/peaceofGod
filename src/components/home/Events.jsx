
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

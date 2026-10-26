import { CiClock1, CiLocationOn } from "react-icons/ci";
import { FiCalendar } from "react-icons/fi";
import moment from "moment"
const EventCard = ({ data, isPresent }) => {
  return (
    <div className="w-full h-full flex rounded-xl flex-col gap-10 justify-between hover:scale-99 cursor-pointer bg-white duration-300 shadow-xl p-3">
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
            {isPresent}
          </p>
        </div>
        {/* Description  */}
        <p className="text-xs  tracking-wide font-secondary ">
          {data.description.slice(0, 120)}{" "}
          {data.description.length > 120 && <span>.....</span>}
        </p>
      </div>
      {/* Date Time & Location with learn More Button  */}
      <div className="flex flex-col gap-2">
        <div className="gap-5 flex ">
          <p className="flex gap-1 justify-center items-center">
            <FiCalendar /> {moment(data.date).format("dddd Do MMMM YYYY")}
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
export default EventCard;

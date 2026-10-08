import { Link } from "react-router-dom";
import data from "../../assets/data";
import Title from "../global/Title";
import { MdPlayArrow } from "react-icons/md";

const Location = () => {
  return (
    <div
      data-nav-theme="light"
      className=" py-20 md:min-h-125 relative gap-20 max-w-[1400px] mx-auto px-0 md:px-2"
    >
      <img
        src={data.Logo}
        className="absolute h-full right-0 object-contain bottom-0 -z-1 opacity-5"
      />
      <div className="text-center max-w-3xl mx-auto px-2 flex items-center flex-col">
        <Title
          subtext={"Are you a first-time visitor?"}
          mainText={"Find The Right Experience For You!"}
         
        />
        <p className="md:text-[18px] mb-10 text-black/90 mt-2 text-[14px]  font-secondary font-extralight">
          No matter where you are, online or in person, become a part of all God
          is doing
        </p>
      </div>
      <div className="grid-cols-2 gap-7 min-h-[270px] w-full grid max-lg:grid-cols-1">
        <div className=" bg-blue-100 p-7 max-md:rounded-none rounded-lg h-full">
          <div className="flex flex-col h-full gap-3 justify-between">
            <div>
              <h1 className="text-2xl max-md:text-lg tracking-tight text-[#1e1e1e] font-primary font-bold">
                Physical Expressions
              </h1>
              <p className="max-w-sm max-md:text-sm mt-2 text-lg leading-5.5 text-black/70">
                Worship with us in person at one of our physical Expressions
                (locations).
              </p>
            </div>
            <Link
              to={"/location"}
              className="p-2 px-7 duration-700 text-[13px] hover:text-[#101e6d] flex justify-center items-center gap-2 border-b-2 w-fit rounded-2xl"
            >
              {" "}
              Find a Location <MdPlayArrow />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 max-lg:relative gap-7 h-full max-lg:grid-cols-1">
          <div className="h-full bg-linear-to-br from-[#101e6d] to-blue-300 max-md:rounded-none rounded-lg">
            <div className="flex flex-col gap-3 p-7 h-full justify-between">
              <div>
                <h1 className="text-2xl max-md:text-lg tracking-tight text-white font-primary font-bold">
                  Watch Online
                </h1>
                <p className=" mt-5 max-md:text-sm  text-lg leading-5.5 text-white">
                  Our online community who stream church from wherever they are.
                </p>
              </div>
              <Link
                to={"/location"}
                className="p-2 px-7 duration-700 text-[13px] text-white hover:text-[#c5d51a] flex justify-center items-center gap-2 border-b-2 w-fit rounded-2xl"
              >
                {" "}
                Watch Now <MdPlayArrow />
              </Link>
            </div>
          </div>
          <div className="h-full bg-linear-to-br max-lg:sticky max-lg:top-0 from-[#101e6d] to-[#c5d51a] max-md:rounded-none rounded-lg">
            <div className="flex flex-col gap-3 p-7 h-full justify-between">
              <div>
                <h1 className="text-2xl max-md:text-lg tracking-tight text-white font-primary font-bold">
                  Become a Member
                </h1>
                <p className=" mt-5 max-md:text-sm  text-lg leading-5.5 text-white">
                  We want to show you how you can become a vital part of the
                  vision.
                </p>
              </div>
              <Link
                to={"/location"}
                className="p-2 px-7 duration-700 text-[13px] text-white hover:text-[#c5d51a] flex justify-center items-center gap-2 border-b-2 w-fit rounded-2xl"
              >
                {" "}
                Join The Family
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

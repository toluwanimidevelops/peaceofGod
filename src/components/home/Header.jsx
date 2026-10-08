import React from "react";
import data from "../../assets/data";
import Button from "../global/Button";
import { MdOndemandVideo } from "react-icons/md";
const Header = () => {
  return (
    <div className="w-full grid bg-[#101e6d]  md:min-h-screen max-md:grid-cols-1 grid-cols-2">
      <div className="bg-linear-to-br max-md:pt-10  flex items-center max-md:min-h-90  justify-end max-md:justify-start from-[#101e6d]  to-[#154284] ">
        <div className="max-w-3xl px-12 max-md:px-6 ">
          <div className="inline-flex max-w-full items-center gap-2 mb-5 rounded-full border border-[#c5d51a] bg-white/6 px-4 py-2 text-xs leading-none text-white md:text-sm md:leading-6">
            <div className="size-2 relative bg-[#c5d51a] rounded-full">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#c5d51a] opacity-75 [animation-duration:1.5s]"></span>
            </div>
            <p>Sundays Services. 7AM, 9AM & 11:30AM</p>
          </div>
          <p className=" font-primary leading-none text-white text-[60px] max-md:text-[30px]  font-bold  ">
            Making <br /> Greatness Common
          </p>
          <div className="flex mt-10 gap-3">
            <Button
              bgColor="bg-[#c5d51a] hover:bg-[#AAB812] duration-100"
              title={"Join Us This Sunday"}
            />
            <Button
              bgColor="bg-transparent hover:bg-white/5 border-2 text-white border-white duration-100"
              title={"Watch Online"}
              icon={<MdOndemandVideo />}
            />
          </div>
        </div>
      </div>
      <div className="relative max-md:h-90">
        <img
          src={data.Image109}
          className="w-full h-full max-h-screen object-center object-cover"
        />
        <div className="h-full  flex-col absolute md:p-12 p-6 lg:pb-20 flex justify-end items-end w-full top-0 left-0 bg-linear-to-b from-[#001834]/40 to-[#001834]">
          <div className="max-w-lg">
            <p className="text-[#c5d51a] max-md:text-sm text-right">
              OUR YEAR OF METAMORPHOSIS:
            </p>
            <p className="text-white max-md:text-sm text-right ">
              A divine shift has been activated and a new form is emerging. Old
              limitations are dismantled and old cycles are broken. We walk in
              freedom, advance with power and
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

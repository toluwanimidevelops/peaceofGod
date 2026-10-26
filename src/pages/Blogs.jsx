import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState();
  return (
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
  );
};

export default Blogs;

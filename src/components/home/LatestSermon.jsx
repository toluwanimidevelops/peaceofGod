import React from "react";

const LatestSermon = () => {
  return (
    <div className="bg-[#1a699c] w-full min-h-125  flex max-md:flex-col justify-center items-center">
      <div className="w-160 max-md:w-full   max-w-full">
        <div className="flex justify-end px-6 md:px-12 py-12  flex-col">
          <p className="inline-flex min-h-9 w-fit mb-5 items-center justify-center rounded-full border border-[#c5d51a] bg-[#f0f5fc]/6 px-4 py-2 text-xs leading-none text-white">
            Missed Service
          </p>
          <h1 className="uppercase  text-white  text-6xl max-lg:text-4xl max-md:text-4xl max-sm:text-4xl font-extrabold  font-main">
            Catch up on <br /> our powerful <br />{" "}
            <span className="bg-[#c5d51a] rounded-md text-[#1a699c] rotate-10 mt-5 block p-2 w-fit">
              SERMON
            </span>
          </h1>
        </div>
      </div>
      <div className="flex-1 md:min-h-125 max-md:w-full  bg-black"></div>
    </div>
  );
};

export default LatestSermon;

import React from "react";
import Title from "../global/Title";
import data from "../../assets/data";

const AplaceForYou = () => {
  return (
    <div className="w-full min-h-screen px-6 md:px-12 text-center py-25 bg-linear-to-br from-[#101e6d]  to-[#154284]">
      <Title
        mainText={"POG IS A PLACE FOR YOU AND YOUR FAMILY"}
        textColor="text-white max-w-3xl mx-auto"

      />
      <p className="text-gray-100 max-w-3xl mx-auto text-md">
        Come Experience an opportunity to connect with peers and cultivate{" "}
      whollesome and empowering relationships in a family of love
      </p>
      <div className="max-w-7xl mt-15 flex flex-wrap items-center justify-center gap-10 mx-auto">
        <div className="w-125 flex flex-col justify-center gap-3 min-h-80 overflow-hidden max-md:order-1 relative bg-linear-to-r  from-[#101e6d]/20 to-blue-300/10 backdrop-blur-2xl border-2 border-blue-500/20  rounded-xl">
          <h1>SEEDS(KIDS CHURCH)</h1>
          <img
            src={data.Logo}
            className="h-40 opacity-5 absolute -bottom-10 -right-10"
            alt=""
          />
        </div>
        <div className="size-80 relative overflow-hidden max-[360px]:size-60 rounded-full  bg-[#c5d51a]">
          <img
            src={data.Logo}
            className="h-40 opacity-15 absolute -bottom-10 right-5"
            alt=""
          />
        </div>
      </div>
      <div className="max-w-7xl mt-15 flex flex-wrap items-center justify-center gap-10 mx-auto">
        <div className="size-80 relative overflow-hidden max-[360px]:size-60 rounded-full  bg-[#c5d51a]">
          <img
            src={data.Logo}
            className="h-40 opacity-15 absolute -bottom-10 right-5"
            alt=""
          />
        </div>
        <div className="w-125 min-h-80 overflow-hidden max-md:order-1 relative bg-linear-to-r  from-[#101e6d]/20 to-blue-300/10 backdrop-blur-2xl border-2 border-blue-500/20  rounded-xl">
          <img
            src={data.Logo}
            className="h-40 opacity-5 absolute -bottom-10 -right-10"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AplaceForYou;

import React from "react";
import data from "../../assets/data";
import Title from "../global/Title";
import Button from "../global/Button";
import { MdPlayArrow } from "react-icons/md";

const Testimony = () => {
  return (
    <div
      data-nav-theme="light"
      className="max-w-6xl w-full flex max-md:flex-col items-center mx-auto  py-20 gap-20 px-6 md:px-12"
    >
      <div className="flex-1 overflow-hidden border-2 border-[#c5d51a] rounded-2xl h-120">
        <img
          src={data.Image100}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div>
        <Title
          subtext={"Testimony"}
          mainText={"Your Story Of His"}
          breakedText={"Faithfullness"}
        />
        <p className="max-w-120 max-md:w-full">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          doloribus dolorem voluptatem odit a, autem est. A porro veniam, ipsum
          numquam tenetur asperiores eaque et reiciendis quidem ad, dolorum
          molestiae?
        </p>
        <div className="mt-10" />
        <Button
          title={"Share your Testimony"}
          textColor={"text-sm text-[#1e1e1e]"}
          bgColor="bg-[#c5d51a]"
          icon={<MdPlayArrow />}
        />
      </div>
    </div>
  );
};

export default Testimony;

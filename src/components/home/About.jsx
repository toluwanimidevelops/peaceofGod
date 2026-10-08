import data from "../../assets/data";
import { GeneralButton } from "../global/Button";
import { MdPlayArrow } from "react-icons/md";
import Title from "../global/Title";
const About = () => {
  return (
    <div
      data-nav-theme="light"
      className="flex justify-center flex-wrap items-center py-20 md:min-h-125 gap-20 max-w-7xl mx-auto px-6 md:px-12 "
    >
      <div className=" max-md:order-1 size-125 max-[512px]:size-75 max-[312px]:size-50 overflow-hidden rounded-full bg-gray-600">
        <img
          src={data.Image107}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex-1 ">
        <Title
          subtext={"Who We Are"}
          mainText={"Welcome To"}
          breakedText={"The Elevation Church"}
          specialTextwithGradient={"POG"}
        />

        <p className="md:text-[16px] mb-5 text-black/90 mt-2 text-[14px] font-secondary font-[200]">
          We are not just a ministry, but a global movement dedicated to
          empowering individuals with the transformative power of biblical
          wisdom and practical principles. With a forward-thinking approach, we
          aim to equip our diverse community with the tools they need to achieve
          greatness in every aspect of their lives.
        </p>
        <GeneralButton
          textColor="text-black"
          icon={<MdPlayArrow />}
          bgColor="bg-transparent border border-black "
          title={"Learn More"}
        />
      </div>
    </div>
  );
};

export default About;

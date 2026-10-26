import Title from "../global/Title";

const MissionandVision = () => {
  return (
    <div className="w-full  px-6 md:px-12 text-center py-20 bg-linear-to-r from-[#101e6d] to-[#c5d51a] overflow-hidden">
      <Title
        subtext={"Who We Are"}
        mainText={"We Guide Those Far From God To New Life In Christ."}
        textColor=" max-w-5xl mx-auto text-white"
      />
      <div className="max-w-7xl mt-15 flex flex-wrap items-center justify-center gap-10 mx-auto">
        <div className="w-125 p-5 items-center text-start flex flex-col justify-center gap-10 min-h-80 overflow-hidden max-md:order-1 relative bg-linear-to-r from-[#101e6d]/20 to-[#c5d51a]/10 backdrop-blur-2xl border-2 border-blue-500/40 rounded-xl">
          <h1 className="bg-linear-to-r p-1 font-primary font-semibold text-[20px] max-md:text-[10px] rounded text-white w-fit from-[#101e6d] to-[#c5d51a]">
            Mission
          </h1>
        </div>
        <div className="w-125 p-5 items-center text-start flex flex-col justify-center gap-10 min-h-80 overflow-hidden max-md:order-1 relative bg-linear-to-r from-[#101e6d]/20 to-[#c5d51a]/10 backdrop-blur-2xl border-2 border-blue-500/40 rounded-xl">
          <h1 className="bg-linear-to-r p-1 font-primary font-semibold text-[20px] max-md:text-[10px] rounded from-[#101e6d] w-fit text-white to-[#c5d51a]">
            Vision
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MissionandVision;

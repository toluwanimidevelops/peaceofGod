import Title from "../global/Title";

const MissionandVision = () => {
  return (
    <div className="w-full  px-6 md:px-12 text-center py-20 bg-linear-to-r from-[#101e6d] to-[#c5d51a] overflow-hidden">
      <Title
        subtext={"Who We Are"}
        mainText={"We Guide Those Far From God To New Life In Christ."}
        textColor=" max-w-5xl mx-auto text-white"
      />
      <div className="max-w-7xl mt-15 flex flex-col items-center justify-center gap-10 mx-auto">
        <div className="w-full p-5  text-start flex flex-col justify-center gap-2 min-h-80 overflow-hidden max-md:order-1 relative bg-linear-to-r from-[#101e6d]/20 to-[#c5d51a]/10 backdrop-blur-2xl border-2 border-blue-500/40 rounded-xl">
          <h1 className="bg-linear-to-r text-center mx-auto p-1 font-primary font-semibold text-[20px] max-md:text-[10px] rounded text-white w-fit from-[#101e6d] to-[#c5d51a]">
            Vision
          </h1>
          <p className="md:text-[16px] mb-5 text-black/90  text-[14px] font-secondary font-[200]  text-white">
            To fulfil the Great Commission of our Lord Jesus Christ by:
            Preaching the Gospel of salvation and leading souls to Christ till
            they are born again{" "}
          </p>
        </div>
        <div className="w-full p-5  text-start flex flex-col justify-center gap-2 min-h-80 overflow-hidden max-md:order-1 relative bg-linear-to-r from-[#101e6d]/20 to-[#c5d51a]/10 backdrop-blur-2xl border-2 border-blue-500/40 rounded-xl">
          <h1 className="bg-linear-to-r text-center mx-auto p-1 font-primary font-semibold text-[20px] max-md:text-[10px] rounded text-white w-fit from-[#101e6d] to-[#c5d51a]">
            Mission
          </h1>
          <p className="md:text-[16px] mb-5 text-black/90  text-[14px] font-secondary font-[200]  text-white">
            Teaching the undiluted Word of God and promoting holiness,
            righteousness and godly living. Advancing apostolic and prophetic
            ministry through prayer, biblical teaching, spiritual growth and
            discipleship. Bringing hope, comfort, healing and encouragement to
            people through the ministry of God's Word and prayer. Caring for
            orphans, widows, widowers and less-privileged people. Providing
            vocational education, skills development and opportunities for
            people to improve their lives. Promoting peace, love, unity and
            godly values in families and communities. Spreading the Gospel and
            extending the ministry's humanitarian impact to nations around the
            world. Getting to Heaven at last.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionandVision;

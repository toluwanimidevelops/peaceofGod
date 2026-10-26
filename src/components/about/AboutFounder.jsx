import Title from "../global/Title";
import data from "../../assets/data";

const AboutFounder = () => {
  return (
    <div
      data-nav-theme="light"
      className="py-20 max-w-[1400px] mx-auto px-6 md:px-12"
    >
      <div className="text-center">
        <Title
          subtext={"Meet our Founder"}
          mainText={"About Our"}
          specialTextwithGradient={"Founder"}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full    gap-x-10 gap-y-5 ">
        <div className="w-full h-full relative  border-17 border-white shadow-lg">
          <img
            src={data.Image5}
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="h-30 w-20  absolute bg-red-700 -bottom-2 right-0 rotate-30  border-white border-8 shadow-lg">
            <img
            src={data.Image100}
            className="w-full h-full object-cover"
            alt=""
          />
          </div>
          <div className="h-30 w-20  absolute bg-red-700 -top-2 left-0 -rotate-30  border-white border-8 shadow-lg">
            <img
            src={data.Image103}
            className="w-full h-full object-cover"
            alt=""
          />
          </div>
        </div>
        <div>
          <h1
            className={`font-primary mb-2 text-[#1e1e1e]  leading-none text-[30px] max-md:text-[20px] font-bold`}
          >
            ARCHBISHOP (PROF.) MRS. MARY OLUWASEUN AJISAFE JP
          </h1>
          <p className="md:text-[15px]  text-black/90 mt-3 text-[14px] font-secondary font-[200]">
            Archbishop (Prof.) Mrs. Mary Oluwaseun Ajisafe JP was born in CAC
            Oniyanrin Mission House Ibadan, Oyo State.
          </p>
          <p className="md:text-[15px]  text-black/90 mt-1 text-[14px] font-secondary font-[200]">
            Her late father. Joseph Ogundare Awayino was the AGS CAC Oniyanrin,
            Ibadan and her mother Mrs. F.O Ogundare is a Deaconess in the same
            church.
          </p>
          <p className="md:text-[15px]  text-black/90 mt-1 text-[14px] font-secondary font-[200]">
            Archbishop Mary Ajisafe hails from Efon Alaye, Ekiti State but grew
            up in the city of Ibadan, Oyo State. She had her early education in
            Trinity Home Nursery and Primary School, Methodist School II,
            Akintola Road Ibadan and Onireke High School, Sabo, Ibadan, Oyo
            State. Thereafter, she proceeded to Osun State College of Education,
            Ila Orangun, Osun State where she studied Economics/Social Studies.
          </p>
          <p className="md:text-[15px]  text-black/90 mt-1 text-[14px] font-secondary font-[200]">
            Her theological education started in the city of Ibadan, Oyo State
            where she obtained a Diploma in Bible Study from Agbara Jesu Wa Sibe
            Bible Training Institute, Apate Inuolaji, Ibadan, Oyo State.
          </p>
          <p className="md:text-[15px]  text-black/90 mt-1 text-[14px] font-secondary font-[200]">
            Archbishop Mary Ajisafe went on to increase her scriptural Knowledge
            in various religious institute, amongst them are:
          </p>
          <ul>
            <li className="md:text-[13px]  text-black/90 mt-1 pl-2 text-[12px] font-secondary font-[200]">
              The Robert Institute College affiliate with the University of
              Columbia where she bagged a Bachelor degree in Theology, Master
              degree as well as a doctorate degree honour as doctor of Divinity.
            </li>
            <li className="md:text-[13px]  text-black/90 mt-1 pl-2 text-[12px] font-secondary font-[200]">
              Great Achiever university College and Seminary, Spain, an
              affiliate campus of Team Impact Christian University, USA, where
              she obtained Doctorate degree in Mission and Church Management
              (D.miss) Honorius,Golden Mother in Israel and a Global Patron of
              JGI.
            </li>
          </ul>
          <p className="md:text-[15px]  text-black/90 mt-1 text-[14px] font-secondary font-[200]">
            Her services to God started sometimes in 1988, when she received her
            first call from the Most High God and in 1989 she commenced full
            ministerial work as a Revivalist, Evangelist and Prophetess.
          </p>
          <p className="md:text-[15px]  text-black/90 mt-1 text-[14px] font-secondary font-[200]">
            She traveled around to minister the gospel of our Lord, Jesus
            Christ. Her evangelism activities continued till she heard the voice
            of God directing her to establish a church. She obeyed her Father,
            and His church, Peace of God Ministry was established in 1998. From
            there on God has been her backbone. His Church, Peace of God
            Ministry is 28 years today and our Archbishop is a Matron for many
            Christian Society.
          </p>
          <p className="md:text-[15px]  text-black/90 mt-1 text-[14px] font-secondary font-[200]">
            She joined Pentecostal Fellowship of Nigeria (PFN) as a grass root
            member and she has remained an active member till date. She has
            received over 33 awards from PFN, WOWICAN, Ghana, Spain and United
            State of America.
          </p>
          <p className="md:text-[15px]  text-black/90 mt-1 text-[14px] font-secondary font-[200]">
            She was consecrated as Bishop by interministerial College of
            Missionary Bishop and later bestowed as an Archbishop by Preach The
            Word Soldiers of Christ Seminary INC. Association of Gospel Bishops.
          </p>
          <p className="md:text-[15px]  text-black/90 mt-1 text-[14px] font-secondary font-[200]">
            She was decorated as Brigadier General from ULS Chaplain Ambassador
            of Christ. She has ministered across the world: USA, UK, Rome,
            Egypt, Kenya, South Africa, Ghana to mention a few. She is also
            Ambassador/Women Leader Soul Winners International.
          </p>
          <p className="md:text-[15px]  text-black/90 mt-1 text-[14px] font-secondary font-[200]">
            Archbishop Mary Ajisafe is called an evangelist, a Prophetess and an
            ambassador of Christ. A woman of God, and the Overseer of Peace of
            God Ministry. She is married to Chief Apostle (Dr). Isaac Ayodele
            Ajisafe (JP) and blessed with lovely children.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;

import data from "../../assets/data";
import Title from "../global/Title";
const Header = () => {
  return (
    <section
      data-nav-theme="light"
      aria-label="About Peace of God Apostolic and Prophetic ministry "
      className="min-h-125  w-full relative"
    >
      <img
        src={data.Image108}
        className="h-125 object-cover object-center  absolute top-0 bottom-0  w-full"
        alt=""
      />
      <div className="relative h-125  flex justify-center flex-col items-center px-6 w-full bg-linear-to-b from-transparent to-[#101e6d]">
        <div className="max-w-3xl text-center mx-auto">
          <Title
            subtext={"About Us"}
            
            textColor="text-white"
            mainText={"Our History At "}
            specialTextwithGradient={"PGAPM"}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;

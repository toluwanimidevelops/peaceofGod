import Button from "../components/global/Button";
import Title from "../components/global/Title";
import About from "../components/home/About";
import AplaceForYou from "../components/home/AplaceForYou";
import Blogs from "../components/home/Blogs";
import Events from "../components/home/Events";
import Header from "../components/home/Header";
import LatestSermon from "../components/home/LatestSermon";
import Location from "../components/home/Location";
import PhotoCollage from "../components/home/PhotCollage";
import Testimony from "../components/home/Testimony";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Location />
      <LatestSermon />
      <Events />
      <Testimony />
      <AplaceForYou />
      <div className="relative  max-w-full w-7xl  mx-auto">
        <div className="text-center mt-20">
          <Title
            subtext={"Gallery"}
            breakedText={true}
            mainText={"Check Our Recent"}
            specialTextwithGradient={"Pictures"}
          />
        </div>
        <PhotoCollage />
        <div className="flex justify-center items-center mb-20">
          <Button
            title={"View Our Gallery"}
            bgColor="bg-[#c5d51a]"
            textColor="text-[#1e1e1e]"
          />
        </div>
      </div>
      <Blogs />
    </div>
  );
};

export default Home;

import About from "../components/home/About";
import AplaceForYou from "../components/home/AplaceForYou";
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
      {/* <div className="relative min-h-[50vh] max-w-full w-7xl  mx-auto"> */}
        <PhotoCollage />
      {/* </div> */}
    </div>
  );
};

export default Home;

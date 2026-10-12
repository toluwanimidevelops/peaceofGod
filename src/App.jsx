import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OurActivities from "./pages/OurActivities";
import LiveStream from "./pages/LiveStream";
import Sermon from "./pages/Sermon";
import OurGallery from "./pages/OurGallery";
import ContactUs from "./pages/ContactUs";
import Support from "./pages/Support";
import Nav from "./components/global/Nav";
import Footer from "./components/global/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/activities" element={<OurActivities />} />

        <Route path="/live-stream" element={<LiveStream />} />
        <Route path="/video-gallery" element={<Sermon />} />

        <Route path="/our-gallery" element={<OurGallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/giving" element={<Support />} />
      </Routes>
      {/* <div className="h-50"/> */}
      <Footer />
    </>
  );
};

export default App;

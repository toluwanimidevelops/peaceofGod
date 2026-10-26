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
import NotFound from "./pages/NotFound";
import Events from "./pages/Events";
import Blogs from "./pages/Blogs";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<OurActivities />} />
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/live-stream" element={<LiveStream />} />
        <Route path="/video-gallery" element={<Sermon />} />
        <Route path="/event" element={<Events />} />
        <Route path="/our-gallery" element={<OurGallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/giving" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className="h-60" />
      <Footer />
    </>
  );
};

export default App;

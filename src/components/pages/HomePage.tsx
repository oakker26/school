import {
  // AboutUs,
  Activities,
  Banner,
  // Cards,
  Facilities,
  Founder,
  NavigationSection,
  // PopularCourse,
  PreSchool,
  Primary,
  Secondary,
  // Why,
} from "../home";
import IG from "../home/IG";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <NavigationSection />
      <div id="section-1">
        <Founder />
      </div>
      <div id="section-2">
        <PreSchool />
      </div>
      <div id="section-3">
        <Primary />
      </div>
      <div id="section-4">
        <Secondary />
      </div>
      <div id="section-5">
        <Activities />
      </div>
      <div id="section-6">
        <Facilities />
      </div>
      <div id="section-7">
        <IG />
      </div>
      {/* <Cards /> */}
      {/* <PopularCourse /> */}
      {/* <Why />
      <AboutUs /> */}
    </div>
  );
};

export default HomePage;

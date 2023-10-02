import { Link } from "react-scroll";

const NavigationSection = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center py-10 fontstyle2 px-4">
      <Link
        activeClass="inline-block text-green-500"
        className="px-4 py-2 bg-slate-100 border-purple-400 border"
        to="section-1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
       Founder
      </Link>
      <Link
        activeClass="inline-block text-green-500"
        className="px-4 py-2 bg-slate-100 border-purple-400 border"
        to="section-2"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
       PreSchool
      </Link>
      <Link
        activeClass="inline-block text-green-500"
        className="px-4 py-2 bg-slate-100 border-purple-400 border"
        to="section-3"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
       primary
      </Link>
      <Link
        activeClass="inline-block text-green-500"
        className="px-4 py-2 bg-slate-100 border-purple-400 border"
        to="section-4"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
      Secondary
      </Link>
      <Link
        activeClass="inline-block text-green-500"
        className="px-4 py-2 bg-slate-100 border-purple-400 border"
        to="section-5"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
      Co-Curricular
      </Link>
      <Link
        activeClass="inline-block text-green-500"
        className="px-4 py-2 bg-slate-100 border-purple-400 border"
        to="section-6"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
       Facilities
      </Link>
      <Link
        activeClass="inline-block text-green-500"
        className="px-4 py-2 bg-slate-100 border-purple-400 border"
        to="section-7"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
       Instagram
      </Link>
    </div>
  );
};

export default NavigationSection;

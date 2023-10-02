import { PopularCourse } from ".";
import videoImage from "../../assets/founder.jpg";
import Myanmar from '../../assets/founder1.jpg'
import founderImage1 from "../../assets/founder1.png";
// import founderImage2 from "../../assets/founder2.png";
// import founderImage3 from "../../assets/founder3.png";
// import founderImage4 from "../../assets/founder4.png";
import { FaPlay } from "react-icons/fa";
const Founder = () => {
  return (
    <div className="flex flex-col gap-10 bg-[#F2F2F2]">
      <div className="flex md:flex-row flex-col ">
        <div className="md:w-1/2 relative overflow-hidden">
         <div className="relative">
         <img
            src={videoImage}
            className=" hover:scale-105 transition-all duration-500"
            alt=""
          />
          <div className="absolute top-[42%] left-[46%]">
            <FaPlay className="text-white" size={40} />
          </div>
         </div>
        </div>
        <div className="md:w-1/2 flex flex-col items-center gap-4 pt-4 px-2">
          <img src={founderImage1} className="w-24" alt="" />
          <h3 className=" text-lg lg:text-xl font-bold fontstyle2 text-center ">
            Jaspal Sidhu - SIS Group of Schools Founder
          </h3>
          <p className="lg:px-20 px-10 md:text-sm text-center fontstyle2  md:tracking-wider md:leading-5">
            “I have always been enchanted by Myanmar. Its rich history, its
            people, and beautiful traditions are a testimony of a hard-working
            population. However Myanmar, like the other countries, is not free
            from the challenges of technology, world politics and globalization.
            The young today need 21st century skills like analytical thinking
            and collaboration. Singapore is leading the world in an education
            system that is moulding its population to take on these challenges.
            I know that SIS Myanmar, in this partnership with SLG, will emulate
            the kind of success I have seen in other countries where we have
            established SIS schools.”
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
            <PopularCourse/>
        </div>
        <div className="md:w-1/2">
            <img src={Myanmar} alt="" />
        </div>

      </div>
    </div>
  );
};

export default Founder;

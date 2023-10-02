import { useEffect, useState } from "react";
// import { LuNetwork } from "react-icons/lu";
// import { BsFiletypePhp } from "react-icons/bs";
// import { BiLogoPython } from "react-icons/bi";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaGraduationCap, FaHistory, FaUserAlt, FaUsers } from "react-icons/fa";

const PopularCourse = () => {
  const [active, setActive] = useState(0);
  const [tabContent, setTabContent] = useState<dataTypes>([]);
  type dataTypes = {
    id: number;
    name: string;
    icons: JSX.Element;
    image: string;
    title: string;
    desc: string;
    text1: string;
    text2?: string;
    text3?: string;
    text4?: string;
  }[];
  const data: dataTypes = [
    {
      id: 1,
      name: "History",
      icons: <FaHistory size={16} />,
      image:
        "http://codestar.xyz/demo/eduserve/assets/img/course/course-img-1.jpg",
      title: "Nural Networking",
      desc: "Hamburger pork beef shank turducken drumstick pork loin. Pork short ribs rump fatback capicola ham strip steak jowl filet mignon buffalo alcatra swine",
      text1:
        "With its rich history and population of almost 54 million,  Myanmar (also known as Burma) is renowned for its warm, friendly and hard working population.  The countryside consists of beautiful mountains, scenic plains and lovely islands, beaches, and is one of ASEAN’s popular tourist destinations. Yangon, formerly known as Rangoon, is the largest city in Myanmar and the busiest commercial centre that is strategically located attracting numerous investors and foreign investment.",
      text2:
        "SIS Myanmar is the SIS Group of Schools’ next international campus. Located in Yangon, in a partnership with SLG Education, a member of SLG Holdings, SIS Myanmar aims to prepare local and international students for the 21st century. The SIS Group of Schools is the region’s most renowned K-12 School group with international and private schools in multiple countries. It is in a strategic partnership with the International Finance Corporation (World Bank) to bring high-end, quality schools at affordable fees to countries across the world.",
    },
    {
      id: 2,
      name: "Network",
      icons: <AiOutlineGlobal size={16} />,
      image:
        "http://codestar.xyz/demo/eduserve/assets/img/course/course-img-2.jpg",
      title: "Learning PHP",
      desc: "Hamburger pork beef shank turducken drumstick pork loin. Pork short ribs rump fatback capicola ham strip steak jowl filet mignon buffalo alcatra swine",
      text1:
        "The SIS Group of Schools is fast expanding into Indonesia, Myanmar, India, Korea and soon to China, Kazakhstan and Africa. The SIS Group of Schools is a network of schools. Networks give greater access to resources and promote creative ideas among schools. Students from SIS Myanmar will work on projects with their peers in other schools within the SIS Group of Schools. Teachers will also collaborate with their fellow educators from across the network.",
      text2:
        "This effective eco-system of collaboration was recognized and acknowledged by the Financial Times (FT) and the IFC, International Finance Corporation (World Bank) when SIS became the only K-12 school in the world to be awarded the global 2019 FT-IFC Transformational Business Award – Education in London.",
      text3:
        "Our schools are especially designed to stimulate creativity, enhance concentration and allow students and teachers to work in teams as well as collaborate to allow SIS Programs to achieve their maximum impact.",
    },
    {
      id: 3,
      name: "Curriculum",
      icons: <FaGraduationCap size={16} />,
      image:
        "http://codestar.xyz/demo/eduserve/assets/img/course/course-img-3.jpg",
      title: "Learning Python",
      desc: "Hamburger pork beef shank turducken drumstick pork loin. Pork short ribs rump fatback capicola ham strip steak jowl filet mignon buffalo alcatra swine",
      text1: "The SIS Group of Schools adopts 3 world-renowned curricula; the Singapore curriculum in the pre-school as well as the primary levels. The Singapore system is then complemented by the Cambridge curriculum at the secondary school levels. For our high schools (Junior College) we adopt the Cambridge A-levels and/or the International Baccalaureate Diploma Program (IBDP).",
      text2: "Embedded in the curriculum is our PACE initiative which looks to develop 21st century skills; Perseverance, Analytical thinking, Collaboration / Communication and Entrepreneurism.",

    },
    {
      id: 4,
      name: "Teachers",
      icons: <FaUserAlt size={16} />,
      image:
        "http://codestar.xyz/demo/eduserve/assets/img/course/course-img-4.jpg",
      title: "Creative Design",
      desc: "Hamburger pork beef shank turducken drumstick pork loin. Pork short ribs rump fatback capicola ham strip steak jowl filet mignon buffalo alcatra swine",
      text1: "All SIS teachers are highly qualified and experienced. They are part of the diversity of cultures within the school, that we embrace. They are passionate about what they teach and have excellent subject knowledge.",
      text2: "For students who are still working towards the expectations of the subject, SIS has an Academic Support Program, where the subject teacher will give individual support and attention to the student outside of curriculum time. This allows them personalized attention.",
   
    },
    {
      id: 5,
      name: "Parents",
      icons: <FaUsers size={16} />,
      image:
        "http://codestar.xyz/demo/eduserve/assets/img/course/course-img-5.jpg",
      title: "HTML5/CSS3 Essentials",
      desc: "Hamburger pork beef shank turducken drumstick pork loin. Pork short ribs rump fatback capicola ham strip steak jowl filet mignon buffalo alcatra swine",
      text1: "Parents will always remain the main influence in a child’s learning experience and education. In SIS Schools, we encourage parents to provide feedback to us on our learner’s experiences and emotions in their learning journeys at home. We then work with parents to enhance and reinforce their learning to ensure our children are always having fun learning both in school and at home.",
   
    },
  ];
  useEffect(() => {
    if (data) {
      setTabContent(data);
    }
  }, []);
  const handleClick = (tabId: any) => {
    setActive(tabId);
  };
  return (
    <div className="px-10">
      <div className=" ">
        <ul className="flex justify-center  gap-5 flex-wrap ">
          {data.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={`${
                active == index ? "bg-slate-200" : "bg-slate-100/50"
              } transition-all   flex items-center  gap-2  cursor-pointer px-3 py-4 `}
            >
              <p>{item.icons}</p>
              <p className="uppercase text-sm ">{item.name}</p>
            </li>
          ))}
        </ul>
        <div>
          {tabContent?.map((item, index) => (
            <div className="mt-10">
              {index === active && (
                <div className="flex flex-col lg:flex-row justify-center fontstyle2 ">
                  {/* <img src={item.image} alt="" /> */}
                  <div className="w-full h-full flex flex-col lg:px-10  gap-5">
                    {/* <h3 className="text-xl font-semibold">{item.title}</h3> */}
                    {/* <p className="text-base">{item.desc}</p> */}
                    <div className="flex items-center gap-4">
                      <p className="text-sm ">{item?.text1}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-sm ">{item?.text2}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-sm ">{item?.text3}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-sm ">{item?.text4}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCourse;

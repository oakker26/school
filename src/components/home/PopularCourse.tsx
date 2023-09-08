import React, { useEffect, useState } from "react";
import { LuNetwork } from "react-icons/lu";
import { BsFiletypePhp } from "react-icons/bs";
import { SiInteractiondesignfoundation } from "react-icons/si";
import { BiLogoPython, BiSolidCamera } from "react-icons/bi";
import { AiOutlineHtml5 } from "react-icons/ai";

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
    text2: string;
    text3: string;
    text4: string;
  }[];
  const data: dataTypes = [
    {
      id: 1,
      name: "networking",
      icons: <LuNetwork size={32} />,
      image:
        "http://codestar.xyz/demo/eduserve/assets/img/course/course-img-1.jpg",
      title: "Nural Networking",
      desc: "Hamburger pork beef shank turducken drumstick pork loin. Pork short ribs rump fatback capicola ham strip steak jowl filet mignon buffalo alcatra swine",
      text1: "Pig swine prosciutto rump pork chop",
      text2: "Tail spare ribs capicola flank shank",
      text3: "24-hour Supports for any courses",
      text4: "Beef ribs sirloin cupim frankfurter",
    },
    {
      id: 2,
      name: "Php",
      icons: <BsFiletypePhp size={32} />,
      image:
        "http://codestar.xyz/demo/eduserve/assets/img/course/course-img-2.jpg",
      title: "Learning PHP",
      desc: "Hamburger pork beef shank turducken drumstick pork loin. Pork short ribs rump fatback capicola ham strip steak jowl filet mignon buffalo alcatra swine",
      text1: "Pig swine prosciutto rump pork chop",
      text2: "Tail spare ribs capicola flank shank",
      text3: "24-hour Supports for any courses",
      text4: "Beef ribs sirloin cupim frankfurter",
    },
    {
      id: 3,
      name: "pyhton",
      icons: <BiLogoPython size={32} />,
      image:
        "http://codestar.xyz/demo/eduserve/assets/img/course/course-img-3.jpg",
      title: "Learning Python",
      desc: "Hamburger pork beef shank turducken drumstick pork loin. Pork short ribs rump fatback capicola ham strip steak jowl filet mignon buffalo alcatra swine",
      text1: "Pig swine prosciutto rump pork chop",
      text2: "Tail spare ribs capicola flank shank",
      text3: "24-hour Supports for any courses",
      text4: "Beef ribs sirloin cupim frankfurter",
    },
    {
      id: 4,
      name: "Design",
      icons: <LuNetwork size={32} />,
      image:
        "http://codestar.xyz/demo/eduserve/assets/img/course/course-img-4.jpg",
      title: "Creative Design",
      desc: "Hamburger pork beef shank turducken drumstick pork loin. Pork short ribs rump fatback capicola ham strip steak jowl filet mignon buffalo alcatra swine",
      text1: "Pig swine prosciutto rump pork chop",
      text2: "Tail spare ribs capicola flank shank",
      text3: "24-hour Supports for any courses",
      text4: "Beef ribs sirloin cupim frankfurter",
    },
    {
      id: 5,
      name: "html/css",
      icons: <AiOutlineHtml5 size={32} />,
      image:
        "http://codestar.xyz/demo/eduserve/assets/img/course/course-img-5.jpg",
      title: "HTML5/CSS3 Essentials",
      desc: "Hamburger pork beef shank turducken drumstick pork loin. Pork short ribs rump fatback capicola ham strip steak jowl filet mignon buffalo alcatra swine",
      text1: "Pig swine prosciutto rump pork chop",
      text2: "Tail spare ribs capicola flank shank",
      text3: "24-hour Supports for any courses",
      text4: "Beef ribs sirloin cupim frankfurter",
    },
    {
      id: 6,
      name: "photography",
      icons: <BiSolidCamera size={32} />,
      image:
        "http://codestar.xyz/demo/eduserve/assets/img/course/course-img-6.jpg",
      title: "Art of Photography",
      desc: "Hamburger pork beef shank turducken drumstick pork loin. Pork short ribs rump fatback capicola ham strip steak jowl filet mignon buffalo alcatra swine",
      text1: "Pig swine prosciutto rump pork chop",
      text2: "Tail spare ribs capicola flank shank",
      text3: "24-hour Supports for any courses",
      text4: "Beef ribs sirloin cupim frankfurter",
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
    <div>
      <div className="fontstyle2 text-center">
        <h1 className="text-3xl font-semibold">Popular Course</h1>
        <p className="mt-4">a morden and unique style</p>
      </div>
      <div className="lg:px-20 px-10 mt-10 ">
        <ul className="flex justify-between lg:flex-nowrap gap-5 flex-wrap">
          {data.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={`${
                active == index ? "bg-slate-200" : "bg-slate-100/50"
              } transition-all  px-3 py-3 flex flex-col items-center justify-center w-32 h-32`}
            >
              {item.icons}
              <p className="uppercase text-sm  mt-3">{item.name}</p>
            </li>
          ))}
        </ul>
        <div>
          {tabContent.map((item, index) => (
            <div className="mt-10">
              {index === active && (
                <div className="flex flex-col lg:flex-row justify-center fontstyle2 ">
                  <img src={item.image} alt="" />
                  <div className="w-full h-full flex flex-col lg:px-10 py-10 gap-5">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-base">{item.desc}</p>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-black rotate-45"></div>
                      <p>{item.text1}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-black rotate-45"></div>
                      <p>{item.text2}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-black rotate-45"></div>
                      <p>{item.text3}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-black rotate-45"></div>
                      <p>{item.text4}</p>
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

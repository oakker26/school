import image1 from "../../assets/sis-myanmar-1-2-550x550.jpeg";
import image2 from "../../assets/sis-myanmar-2-550x550.jpeg";
import image3 from "../../assets/sis-myanmar-3-550x550.jpeg";
import image4 from "../../assets/sis-myanmar-4-550x550.jpeg";
import image5 from "../../assets/sis-myanmar-5-550x550.jpeg";
import image6 from "../../assets/SIS-MM-Library-Photo-550x550.jpg";
import image7 from "../../assets/sis-myanmar-11-550x550.jpeg";
import image8 from "../../assets/sis-myanmar-12-550x550.jpeg";
import image9 from "../../assets/SIS-Myanmar-outdoor-football-pitch-2-550x550.jpg";
import image10 from "../../assets/SIS-Myanmar-Admission-Area-550x550.jpg";
import image11 from "../../assets/SIS-Myamar-Kindergarten-Playground-550x550.jpg";
import image12 from "../../assets/SIS-Myanmar-Sandpit-550x550.jpg";
const Facilities = () => {
  const images = [
    {
      id: 1,
      image: image1,
      title: "Campus",
    },
    {
      id: 2,
      image: image2,
      title: "multi Purpose Hall",
    },
    {
      id: 3,
      image: image3,
      title: "Aquatic Center",
    },
    {
      id: 4,
      image: image4,
      title: "Covered Football Pitch",
    },
    {
      id: 5,
      image: image5,
      title: "Primary Classrooms",
    },
    {
      id: 6,
      image: image6,
      title: "Library",
    },
    {
      id: 7,
      image: image7,
      title: "Primary School Corridor",
    },
    {
      id: 8,
      image: image8,
      title: "Outdoor Play Area",
    },
    {
      id: 9,
      image: image9,
      title: "Outdoor Football Pitch",
    },
    {
      id: 10,
      image: image10,
      title: "Admission Area",
    },
    {
      id: 11,
      image: image11,
      title: "Kindergarten Playground",
    },
    {
      id: 12,
      image: image12,
      title: "Sandpit",
    },
  ];
  return (
    <div className="lg:px-14 px-5">
      <h1 className="text-center text-xl font-bold fontstyle2 pb-10">Facilities</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {images?.map((item) => (
          <div className="relative overflow-hidden" key={item.id}>
            <img
              src={item.image}
              className="hover:scale-110 transition-all duration-500"
              alt=""
            />
            <p className=" absolute top-[45%] bg-purple-600/50 text-white px-5 py-2 fontstyle2 font-semibold text-xl">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;

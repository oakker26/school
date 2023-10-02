import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import image from "../../assets/K-Graduate-100x50.jpg";
import { useState } from "react";
const Activities = () => {
  const [click, setClick] = useState(false);
  return (
    <div>
      <div className="flex flex-col md:flex-row px-8 py-14 gap-10 ">
        <div className="md:w-1/2 relative  overflow-hidden">
          <img src={image} className=" w-full " alt="" />
        </div>
        <div className="md:w-1/2 flex flex-col items-center gap-4 pt-4">
          <h3 className="text-2xl font-bold fontstyle2 ">
            Co-Curricular Activities
          </h3>
          <p className="fontstyle2 lg:px-14">
            The outstanding Co-Curricular Activities offered at SIS schools are
            unique to each campus. However, each activity, at each school, is
            organised and monitored by trained professionals and staff that are
            passionate about teaching the unique skills required. Leadership in
            the boardroom often begins with leadership on the pitch and SIS
            Co-Curricular make full use of these engaging activities to drive
            home positive values related to team play, individual development
            and leadership.
          </p>
          <div className="place-items-start">
            {!click && (
              <button
                onClick={() => setClick(true)}
                className="px-4 py-2 flex items-center gap-2 bg-slate-300 "
              >
                {" "}
                <span>
                  <FaAngleRight />
                </span>{" "}
                READ MORE
              </button>
            )}
            {/* <button>BOOK TOUR</button> */}
          </div>
        </div>
      </div>
      {click && (
        <div className="border mx-8 flex flex-col gap-4 py-10 px-5 fontstyle2 relative ">
          <button onClick={() => setClick(false)}>
            <FaAngleDown />
          </button>
          <h5 className="text-center uppercase tracking-wider text-sm font-medium">
            read more
          </h5>
          <p className="tracking-wide leading-7">
            Every child is a unique individual who has an innate desire to do
            his or her very best. Children must be valued, listened to,
            respected, loved and cared for. Our{" "}
            <span className="font-semibold">
              Nurturing Early Learners Framework
            </span>{" "}
            aims to build the foundation for children to achieve the desired
            outcomes of education and key stage outcomes by helping them acquire
            knowledge, skills and dispositions through six learning areas added
            with Information Technology and the Mandarin language.
          </p>
          <div>
            <h5 className="font-semibold">Language and Literacy:</h5>
            <p className="tracking-wide leading-7">
              Students learn to listen for information and enjoyment. Speak to
              convey meaning and communicate with others. They will use drawing,
              mark-making, symbols and writing with invented and conventional
              spelling to communicate ideas and information. Examples: Story
              time, rhymes and songs, creative writing, phonics development and
              reading.
            </p>
          </div>
          <div>
            <h5 className="font-semibold">Numeracy:</h5>
            <p className="tracking-wide leading-7">
              Students will learn to count, classify, manipulate numbers, and
              concepts (time, shapes, measures, patterns) through stories, games
              and exploration.
            </p>
          </div>
          <div>
            <h5 className="font-semibold">Discovery of the World:</h5>
            <p className="tracking-wide leading-7">
              Students will find out why things happen and how things work
              through simple investigations and explorations. They will learn to
              show an interest in the world they live in and others around them.
              Examples: cooking, environmental awareness, responsibility, and
              celebrating cultural diversity.
            </p>
          </div>
          <div>
            <h5 className="font-semibold">Motor Skills Development:</h5>
            <p className="tracking-wide leading-7">
              Students will learn to demonstrate control and coordination in
              fine motor tasks as well as gross motor skills. They will develop
              healthy habits and safety awareness at home, in school and in
              public places. Examples: Sand and water play, gym, indoor and
              outdoor play, get fit programme, threading, art activities and
              field trips.
            </p>
          </div>
          <div>
            <h5 className="font-semibold">Social and Emotional Development:</h5>
            <p className="tracking-wide leading-7">
              Students will learn to develop an awareness of personal identity
              and how to manage emotions and behaviors. They will also learn to
              show respect for diversity and how to become independent and
              responsible life-long learners
            </p>
          </div>
          <div>
            <h5 className="font-semibold">
              Aesthetic and Creative Expression:
            </h5>
            <p className="tracking-wide leading-7">
              Students will learn to express ideas and feelings through art,
              music and movement. They will create art and music and movement
              using experimentation and imagination. Examples: Art, music,
              dance, performance, developing personal expression and confidence.
            </p>
          </div>
          <div>
            <h5 className="font-semibold">Information Technology (IT):</h5>
            <p className="tracking-wide leading-7">
              Students will learn to develop computer skills and how to use
              technology purposefully.
            </p>
          </div>
          <div>
            <h5 className="font-semibold">Mandarin:</h5>
            <p className="tracking-wide leading-7">
              Students will learn to speak with confidence, recognize and write
              characters, songs , rhymes, stories and other cultural activities.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Activities;

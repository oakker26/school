import backgroundImageUrl from "../../assets/background.png";

const AboutUs = () => {
  return (
    <div className="mt-20 w-full fontstyle2">
      {" "}
      <section className="relative  h-[500px] lg:min-h-screen">
        <div
          className="   absolute  bg-fixed  md:bg-contain bg-cover bg-no-repeat bg-center  h-full w-full"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
          }}
        ></div>
        <div className=" absolute  h-full w-full">
          <div className="h-full w-full flex flex-col  items-center bg-[rgba(0,0,0,0.3)]  ">
            <h1 className="text-white md:py-16 py-8 font-medium text-2xl">About Us</h1>
           <div className="lg:px-64 px-6 text-white text-base flex flex-col">
           <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              doloremque blanditiis error corrupti! Ipsum eos voluptas labore
              animi velit deleniti nulla eveniet illo, necessitatibus aut illum,
              unde molestiae? A, aperiam.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              doloremque blanditiis error corrupti! Ipsum eos voluptas labore
              animi velit deleniti nulla eveniet illo, necessitatibus aut illum,
              unde molestiae? A, aperiam.
            </p>
            <p className="hidden lg:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              doloremque blanditiis error corrupti! Ipsum eos voluptas labore
              animi velit deleniti nulla eveniet illo, necessitatibus aut illum,
              unde molestiae? A, aperiam.
            </p>
            <br />
            <p className="hidden lg:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              doloremque blanditiis error corrupti! Ipsum eos voluptas labore
              animi velit deleniti nulla eveniet illo, necessitatibus aut illum,
              unde molestiae? A, aperiam.
            </p>
            <button className="self-end bg-indigo-600 px-4 py-2  rounded-lg  mt-10 mr-10"> more info</button>
           </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

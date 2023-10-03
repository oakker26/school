import { useEffect, useState } from "react";
import logo from "../../assets/logo rgb no bg(1).png";
const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Adjust the scroll threshold as needed
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`text-slate-700 fixed transition-all top-0 bg-purple-400/80   z-50  fontstyle2  mx-auto flex flex-col w-screen overflow-hidden px-14 py-4 lg:flex-row lg:items-center`}
    >
      <a
        href="#"
        className="flex items-center whitespace-nowrap text-2xl font-black"
      >
        <span className="mr-2 w-32">
          <img src={logo} className={`  ${scrolling ? "scale-100":"scale-125" } transition-all duration-300  `} alt="" />
        </span>
      </a>
      <input type="checkbox" className="peer hidden" id="navbar-open" />
      <label
        className="absolute top-5 right-5 cursor-pointer lg:hidden"
        htmlFor="navbar-open"
      >
        <svg
          className="h-7 w-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
      <nav
        aria-label="Header Navigation"
        className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
      >
     
        <hr className="mt-4 w-full lg:hidden" />
        <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
        <ul className="flex w-full text-white flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
          <li className="lg:mr-12">
            <a
              className="rounded  transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              href="#"
            >
             About Us
            </a>
          </li>
          <li className="lg:mr-12">
            <a
              className="rounded  transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              href="#"
            >
              Our School
            </a>
          </li>
          <li className="lg:mr-12">
            <a
              className="rounded  transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              href="#"
            >
              Contact Us
            </a>
          </li>
          <li className="lg:mr-12">
            <a
              className="rounded  transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              href="#"
            >
              FAQ
            </a>
          </li>
        </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

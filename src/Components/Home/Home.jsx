import React from "react";
import avatarImg from "../../assets/male-avatar.png"; // Replace with the male avatar image
import TextChange from "../TextChange";
import Footer from "../Footer/Footer";
import { MdOutlineEmail } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-xl tracking-tight mt-3">
          Passionate about data analysis and full-stack development, with a keen interest in learning data structures and algorithms to enhance problem-solving skills. Continuously exploring new technologies to build impactful solutions.
        </p>
        <div className="flex gap-4 mt-10">
          <a href="#Footer">
            <button className="flex items-center text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              <MdOutlineEmail size={20} className="mr-2" />
              Contact Me
            </button>
          </a>
          <a href="/Prasanna_Jothiraman.pdf" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              <FaFileDownload size={20} className="mr-2" />
              Resume
            </button>
          </a>
        </div>
      </div>
      <div className="mt-10 md:mt-0 md:w-1/4 flex justify-center">
        <img
          src={avatarImg}
          alt="Avatar"
          className="w-48 h-48 md:w-64 md:h-64  shadow-lg object-cover" // Adjust size and add shadow
        />
      </div>
    </div>
  );
};

export default Home;

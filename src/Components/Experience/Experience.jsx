import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaCode,FaFileExcel, FaJava } from "react-icons/fa";
import { SiRedis, SiMongodb, SiMysql, SiPostgresql, SiPython } from "react-icons/si";
import lv from "../../assets/lv.png"
import digit from "../../assets/digit.png"
import bi from "../../assets/powerbi.png"
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center mb-8">Experience</h1>
      {/* <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10"> */}
        <div className="flex flex-wrap items-center justify-around md:justify-center">
    <div className="flex flex-wrap w-full md:w-2/5 gap-8 md:p-12 py-10 justify-center">
          {/* Skills Icons */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-105 transition-transform duration-300">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-105 transition-transform duration-300">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-105 transition-transform duration-300">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-105 transition-transform duration-300">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-105 transition-transform duration-300">
            <FaFileExcel color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-105 transition-transform duration-300">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-105 transition-transform duration-300">
            <FaJava color="#FF4438" size={50} />
          </span>
          {/* New Skills Icons for C++ and Python */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-105 transition-transform duration-300">
            <FaCode color="#00599C" size={50} /> {/* C++ icon */}
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-105 transition-transform duration-300">
            <SiPython color="#3776AB" size={50} /> {/* Python icon */}
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-105 transition-transform duration-300">
            <SiMysql color="#4479A1" size={50} /> {/* MySQL icon */}
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-105 transition-transform duration-300">
            <SiPostgresql color="#336791" size={50} /> {/* PostgreSQL icon */}
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-105 transition-transform duration-300">
          <img src={bi} alt="bi Logo" className="w-12 h-12" />
          </span>
        </div>
    
        <div>
          {/* Experience Cards */}
          
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          <img src={lv} alt="LV Logo" className="w-12 h-12" />
            <span className="text-white">
              <h2 className="leading-tight">Upcoming Analyst, Latentview Analytics</h2>
              <p className="text-sm leading-tight font-thin">Nov 2024 - Present</p>
              <ul className="text-sm p-2">
                <li>- Working as Power BI analyst.</li>
                <li>- Learning data visualization tools and databases.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          <img src={digit} alt="Digit Insurance Logo" className="w-12 h-12" />
            <span className="text-white">
              <h2 className="leading-tight">Analytics and Data Science, Digit Insurance</h2>
              <p className="text-sm leading-tight font-thin">June 2023 - Aug 2023</p>
              <ul className="text-sm p-2">
                <li>- Worked as Data Analyst Intern</li>
                <li>- Learned Python, Selenium WebDriver, and Request module.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

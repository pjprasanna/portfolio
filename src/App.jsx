import { ImOpt } from "react-icons/im";
// import About from "./Components/About/About";
import DarkModeToggle from "./DarkModeToggle";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">  
    <Navbar />
      <Home />
      {/* <About /> */}
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

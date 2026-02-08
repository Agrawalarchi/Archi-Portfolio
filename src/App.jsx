import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Skills from "./Skills.jsx";
import About from "./About.jsx";
import Project from "./Project.jsx";
import Contact from "./Contact.jsx";
export default function App() {
  return (
    <div className="app">
      <Navbar/>
      <Home />
      <Skills
        skills={[
          "HTML",
          "CSS",
          "Tailwindcss",
          "JavaScript",
          "React JS",
          "Git-GitHub",
          "MySQL",
          "Node JS",
          "Express JS",
          "Java",
          "DSA",
          "C",
        ]}
      />

      <About/>

      <Project/>

      <Contact/>
    </div>
  );
}

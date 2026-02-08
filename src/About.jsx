import "./About.css";
export default function About(){
    return(
       <>

<section className="main" id="about"  >
  <div className="heading">
    <ul className="head-list">
      <li className="head1">Web-Development</li>
      <li className="bullet">•</li>
      <li className="head1">Web Hosting</li>
    </ul>
  </div>

  <div className="about-me">
    <p className="head2">About Me</p>
    <p className="about-text">
      Motivated and goal-driven B.Tech CSE student of JECRC University, Jaipur. 
      I have a strong foundation in programming, DSA, and web development along 
      with great problem-solving skills. I want to secure a Software Development 
      Engineering role at an organization where I can contribute to its growth 
      while improving my skills.
    </p>
  </div>
</section>



  

<section className="main2">
 <p className="head2"> Experience</p> 
 
 <div className="experience">
  <ul>
    <h1 className="title"> NGO Team Everest | Curriculum Writer , Remote July 2023 - August 2023 :-</h1>
    <li className="description">Attending the mandatory orientation webinar for the volunteering activity</li>
    <li className="description"> Creating content as per the instructions in the orientation and handbook</li>
  </ul>
 </div>
</section>

       </>
    )
}
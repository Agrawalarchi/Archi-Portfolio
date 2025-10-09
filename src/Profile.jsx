import "./Profile.css";
export default function Profile(){
    return(
        <>
        <div className="profile">
            

            <div className="profileName">
               <p className="myname">Hello, Archi this side !</p>
               <p className="aboutme">I'm a </p>
            </div>
            
            <div className="pic">
              <img src="/Archi.jpg" alt="some image"/>
            </div>

        </div>
  

          <div className="myResume">
                    <button className="buttons"><a href="/Archi_Agrawal_CV.pdf" target="_blank" rel="noopener noreferrer">Resume</a></button>
                    <button className="buttons"><a href="https://mail.google.com/mail/u/0/?fs=1&to=archiagrawal387@gmail.com&su=Hiring&body=Hi+Archi&tf=cm" rel="noopener noreferrer">Hire Me</a></button>
          </div>   
        </>
        
    );
}
import "./Contact.css";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Contact() {
  return (
    <section className="contact-section" id="contact">

       <h2 className="headh2">Contact Us</h2>

      <p className="contact-text">
       If you’re looking for a passionate web developer who loves writing clean code and creating smooth user experiences, feel free to reach out.
       Let's build something amazing together!
      </p>

      <footer className="contact-footer">
        <ul className="contact-list">
          <li className="contact-item">
            <EmailIcon className="icon"/>
            :<a href="https://mail.google.com/mail/u/0/?fs=1&to=archiagrawal387@gmail.com&su=Hiring&body=Hi+Archi&tf=cm" target="_blank" rel="noreferrer">Email</a>
          </li>
          <li className="contact-item">
            <LinkedInIcon className="icon"/>
            :<a href="https://www.linkedin.com/in/archi-agrawal-049a3024b/" target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
          <li className="contact-item">
            <GitHubIcon className="icon"/>
            :<a href="https://github.com/Agrawalarchi" target="_blank" rel="noreferrer">GitHub</a>
          </li>
        </ul>

        <br></br>

        <ul className="contact-list">
          <li className="contact-item">
           © 2025 Archi-Portfolio. All rights reserved.
          </li>
          
        </ul>
       
      </footer>
    </section>
  );
}

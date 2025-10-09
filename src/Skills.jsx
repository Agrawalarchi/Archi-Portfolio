import "./Skills.css"
export default function Skills({ skills }) {

  if (!skills || skills.length === 0) {
    return <p>No skills to display.</p>;
  }

  return (
    <ul className="skills">
      {skills.map((skill, index) => (
        <li key={index} className="skill">
          {skill}
        </li>
      ))}
    </ul>
  );
}

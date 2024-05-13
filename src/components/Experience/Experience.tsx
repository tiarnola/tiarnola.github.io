import "./Experience.css";

interface ExperienceProps {
  date: string;
  position: string;
  company: string;
  description: string;
  skills: string[];
  website: string;
}

const handleClick = (link: string) => {
  return () => {
    window.open(link, "_blank");
  };
};

const Experience = ({
  date,
  position,
  description,
  skills,
  website,
  company,
}: ExperienceProps) => {
  return (
    <div onClick={handleClick(website)}>
      <div>
        <ol className="experience-block">
          <li>
            <div className="experience-cell">
              <header className="experience-cell-left-section">{date}</header>
              <div className="experience-cell-right-section">
                <h3>
                  {position}
                  <div>
                    <a>
                      <span></span>
                      <span></span>
                    </a>
                  </div>
                </h3>
                <div className="company-link">
                  <h4>{company}</h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="arrow"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>

                <p>{description}</p>
                <ul className="skill-block">
                  {skills.map((skill, index) => (
                    <li key={index}>
                      <div className="skill-cell">{skill}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Experience;

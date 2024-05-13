import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import "./Information.css";
import crypto from "../../assets/img/crypto.png";
import todo from "../../assets/img/todo.png";
import gym from "../../assets/img/gym.png";
import tetris from "../../assets/img/tetrisPic.png";
import Link from "../Link/Link";

const Information = () => {
  return (
    <>
      <div className="info-main">
        <div className="contain-info">
          <section id="about">
            <div className="divider-1"></div>
            <h1 className="main-headings">ABOUT</h1>
            <div>
              <p>
                Having graduated in engineering, and subsequently worked as a
                Process Engineer, I made the switch into the programming space
                in 2019 by starting an Interactive Media masters in University
                College Cork.
              </p>
              <br></br>
              <p>
                Here I garnered an interest in Front-End Development and decide
                to pursue this as a career choice. My first Development job
                arrived with FDM Group in 2022 and here I undertook high
                intensive training in a range of front-end and back-end coding
                languages.
              </p>
              <br></br>
              <p>
                As a contractor for FDM, I began working for Shell Energy Retail
                in Rotterdam as a Front-End Developer before the company left
                the Dutch Market in 2023. I subsequently returned working
                in-house for FDM Group until March 2024.
              </p>
              {/* <br></br>
              <p>Programming Stack:</p>
              <br></br>
              <ul>
                <li>- React</li>
                <li>- JavaScript/TypeScript</li>
                <li>- Three.js</li>
                <li>- HTML</li>
                <li>- CSS</li>
                <li>- Java</li>
                <li>- Spring Boot</li>
                <li>- Python</li>
                <li>- SQL</li>
                <li>- PHP</li>
                <li>- AJAX</li>
              </ul> */}
            </div>
          </section>
          <section id="experience">
            <div className="divider"></div>
            <h1 className="main-headings">EXPERIENCE</h1>
            <Experience
              date={"10/2023 - 03/2024"}
              position={"Software Developer"}
              company="FDM Group (Remote)"
              description={
                "Developer in FDM Academy training team working on development of online learning platform"
              }
              skills={["React", "Java", "Figma", "CSS"]}
              website={"https://www.fdmgroup.com"}
            />
            <Experience
              date={"10/2022 – 09/2023"}
              position={"Frontend Developer"}
              company="Shell Energy Retail, Rotterdam"
              description={
                "Frontend Developer for Shell B2C Energy business, primarily focused on the improvement of the Upgrade and Renewal journey where customers can extend their energy contracts via an online account."
              }
              skills={["JavaScript", "TypeScript", "React", "CSS"]}
              website="https://www.shell.nl/over-ons/nieuws/nieuwsberichten-2023/shell-energy-voor-consumenten-is-gestopt-in-nederland.html#vanity-aHR0cHM6Ly93d3cuc2hlbGwubmwvbWVkaWEvbmlldXdzYmVyaWNodGVuLzIwMjMvc2hlbGwtZW5lcmd5LXZvb3ItY29uc3VtZW50ZW4taXMtZ2VzdG9wdC1pbi1uZWRlcmxhbmQuaHRtbA"
            />
            <Experience
              date={"05/2022 – 10/2022"}
              position={"Trainee IT Consultant"}
              company="FDM Group (Remote)"
              description={
                "Intensive training covering several programming languages, with a focus on both frontend and backend development, with weekly assesments and a group project at the end of training"
              }
              skills={[
                "React",
                "JavaScript",
                "Java",
                "Spring Boot",
                "Thymeleaf",
                "SQL",
                "Python",
                "HTML",
                "CSS",
                "UNIX",
              ]}
              website="https://www.fdmgroup.com"
            />
            <Link href={"/cv"} heading={"See Full Experience"}></Link>
          </section>
          <section id="projects">
            <div className="divider">
              <p></p>
            </div>
            <h1 className="main-headings">PROJECTS</h1>
            <Projects
              name={"Crypto Market Tracker"}
              picture={crypto}
              description={
                "An application to get updates on Crypto Markets. This application uses an API from coingecko.com."
              }
              skills={["React", "CSS"]}
              website={"https://tiarnola.github.io/crypto-take-two/"}
            ></Projects>
            <Projects
              name={"Dissertation: Gym Designer Application"}
              picture={gym}
              description={
                "An interactive Gym Designer tool I created for my thesis. Developed using three.js."
              }
              skills={["Three.js", "JavaScript", "HTML", "CSS"]}
              website={"https://tiarnola.com/gym/gymdesigner.html"}
            ></Projects>
            <Projects
              name={"Todo App"}
              picture={todo}
              description={
                "A to do list where you can add, remove tasks and mark them complete or incomplete. Developed using ReactJS."
              }
              skills={["React", "CSS"]}
              website={"https://tiarnola.github.io/to-do-app/"}
            ></Projects>
            <Projects
              name={"Tetris Game"}
              picture={tetris}
              description={"A tetris game developed with React ."}
              skills={["React", "CSS"]}
              website={"https://tiarnola.github.io/tetris-game/"}
            ></Projects>
            <div className="divider-2"></div>
          </section>
          <div className="bottom-section">
            <p>tiarnanguinee@gmail.com</p>
            {/* <br></br>
            <p>+353 87 233 5205</p> */}
          </div>
        </div>
        <div className="border-info"></div>
      </div>
    </>
  );
};

export default Information;

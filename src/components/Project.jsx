import madisonImage from "../assets/madisonImage.jpg";
import magicMenu from "../assets/magicMenu.jpg";
import usedCarUniverseImage from "../assets/usedCarUniverseImage.png";
import jate from "../assets/jate.png";
import noteTaker from "../assets/noteTaker.png";
import scheduler from "../assets/scheduler.png";
import weatherDashboard from "../assets/weatherDashboard.png";
import "../assets/css/project.css";

export default function Project() {
  const allProjects = [
    {
      title: "UsedCarUniverse",
      link: 'https://aqueous-coast-47792-7cd474c52b1d.herokuapp.com/',
      linkRepo: 'https://github.com/mradison/UsedCarUniverse',
      img: usedCarUniverseImage,
    },
    {
      title: "MagicMenu",
      link: "https://mradison.github.io/MagicMenu/",
      linkRepo: 'https://github.com/mradison/MagicMenu',
      img: magicMenu,
    },
    {
      title: "JATE",
      link: "https://pwa-mradison-1a80b4faa2e2.herokuapp.com/",
      linkRepo: 'https://github.com/mradison/progressive-web-applications-text-editor',
      img: jate,
    },
    {
      title: "Note Taker",
      link: "https://lit-island-70015-5aa84570dd22.herokuapp.com/",
      linkRepo: 'https://github.com/mradison/express.js-note-taker',
      img: noteTaker,
    },
    {
      title: "Weather Dashboard",
      link: "https://mradison.github.io/Server-Side-API-Weather-App/",
      linkRepo: 'https://github.com/mradison/Server-Side-API-Weather-App',
      img: weatherDashboard,
    },
    {
      title: "Scheduler",
      link: "https://mradison.github.io/Third-Party-API-Scheduler/",
      linkRepo: 'https://github.com/mradison/Third-Party-API-Scheduler',
      img: scheduler,
    },
  ];

  return (
    <>
      <h1>Projects</h1>

      <div>
        {allProjects.map((project, index) => (
          <section key={index}>
            <h2>{project.title}</h2>
            <img src={project.img} alt="test" width={300} height={300} />
            <br />
            <br />
            <p>
            <a href={project.link}>Click Here to View Project</a>
            </p>
            <p>
            <a href={project.linkRepo}>Project Repository Link</a>
            </p>
          </section>
        ))}
      </div>
    </>
  );
}

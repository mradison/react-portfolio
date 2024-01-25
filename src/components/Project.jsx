import madisonImage from "../assets/madisonImage.jpg";
import magicMenu from "../assets/magicMenu.jpg";
import usedCarUniverseImage from "../assets/usedCarUniverseImage.png";
import "../assets/css/project.css";

export default function Project() {
  const allProjects = [
    {
      title: "Project 1",
      link: 'https://aqueous-coast-47792-7cd474c52b1d.herokuapp.com/',
      img: usedCarUniverseImage,
    },
    {
      title: "Project 2",
      link: "2 Link",
      img: magicMenu,
    },
    {
      title: "Project 3",
      link: "3 Link",
      img: usedCarUniverseImage,
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
            <p>
            <a>{project.link}</a>
            </p>
          </section>
        ))}
      </div>
    </>
  );
}

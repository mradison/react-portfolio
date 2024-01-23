import madisonImage from "../assets/madisonImage.jpg";
import magicMenu from "../assets/magicMenu.jpg"
import "../assets/css/project.css";

export default function Project() {
  const allProjects = [
    {
      title: "Project 1",
      link: "1 Link",
      img: madisonImage,
    },
    {
      title: "Project 2",
      link: "2 Link",
      img: magicMenu,
    },
    {
      title: "Project 3",
      link: "3 Link",
      img: magicMenu,
    },
  ];

  return (
    <>
      <h1>Projects</h1>

      <div>
        {allProjects.map((project, index) => (
          <section key={index}>
            <h2>{project.title}</h2>
            <a>Link: {project.link}</a>
            <img src={project.img} alt="test" width={300} height={300} />
          </section>
        ))}
      </div>
    </>
  );
}

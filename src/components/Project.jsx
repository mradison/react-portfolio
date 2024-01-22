// import './App.css';
import testImage from "../assets/testImage.png";
import '../assets/css/project.css'
export default function Project() {

const allProjects=[{
    title: 'Project 1',
    link: '1 Link',
    img: testImage
},{
    title: 'Project 2',
    link: '2 Link',
    img: testImage
},
{
    title: 'Project 3',
    link: '3 Link',
    img: testImage
}]

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





        {/* <section>
          <h2>Project Name</h2>
          <h3>Deployed Link</h3>
          <img src={testImage} alt="" />
        </section>{" "}
        <section>
          <h2>Project Name</h2>
          <h3>Deployed Link</h3>
          <img src={testImage} alt="" />
        </section>{" "}
        <section>
          <h2>Project Name</h2>
          <h3>Deployed Link</h3>
          <img src={testImage} alt="" />
        </section>{" "}
        <section>
          <h2>Project Name</h2>
          <h3>Deployed Link</h3>
          <img src={testImage} alt="" />
        </section>{" "}
        <section>
          <h2>Project Name</h2>
          <h3>Deployed Link</h3>
          <img src={testImage} alt="" />
        </section> */}
      </div>
    </>
  );
}

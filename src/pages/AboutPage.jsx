import madisonImage from "../assets/madisonImage.jpg";
import "../assets/css/project.css";

export default function AboutPage() {
  return (
    <div className="aboutMeContainer pt-4">
      <section className="features-icons bg-light text-center m-4">
        <div className="row p-2">
          <div className="col-lg">
            <img src={madisonImage} alt="picture of madison" />
            <h3>Madison Reynolds</h3>
            <p className="lead mb-0">
              I am a Full Stack Software Engineer and Developer who is hungry to
              learn and make the world a better place through technology. I am
              completing a Full-Stack Bootcamp through Arizona State University.
              I have already learned the basics of HTML, CSS, Flexbox,
              Responsive Design, JavaScript, Web API, Server-Side API, jQuery,
              BootStrap, Bulma, and Google Fonts.
            </p>
            <p className="lead mb-0">
              I enjoy solving problems and coming up with new ways to make
              things more effective and efficient. I am a Certified SAFe
              Practicioner. I am also a Certified Professional Scrum Master I
              and II.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

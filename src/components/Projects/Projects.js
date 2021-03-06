import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.css";
import waxomImg from "../../assets/project-waxom-img.jpg";
import messengerImg from "../../assets/project-unichat-img.jpg";
import firegramImg from "../../assets/project-firegram-img.jpg";
import momentumImg from "../../assets/project-momentum-img.jpeg";
import defiImg from "../../assets/project-defi.jpg";

const projectList = [
  {
    name: "Waxom",
    deployLink: "https://kim-ensu.github.io/waxom/",
    githubLink: "https://github.com/kim-ensu/waxom",
    image: waxomImg,
    description: "One of my first work, made only with HTMl and CSS. Check out slider at the top)",
    icons: [
      "devicon devicon-html5-plain colored",
      "devicon devicon-css3-plain colored",
      "devicon devicon-less-plain-wordmark colored",
    ],
  },
  {
    name: "Unichat",
    deployLink: "https://unichatbykimensu.netlify.app/",
    githubLink: "https://github.com/kim-ensu/react-app-unichat",
    image: messengerImg,
    description:
      "It is an application where you can create chatrooms and communicate with users all over the world!",
    icons: [
      "devicon devicon-html5-plain colored",
      "devicon devicon-css3-plain colored",
      "devicon devicon-javascript-plain colored",
      "devicon devicon-react-original colored",
    ],
  },
  {
    name: "Momentum",
    deployLink: "https://kim-ensu.github.io/momentum-clone/",
    githubLink: "https://github.com/kim-ensu/momentum-clone",
    image: momentumImg,
    description:
      "A small react app based on google momentum, made with weather, random quotes apis and axios",
    icons: [
      "devicon devicon-html5-plain colored",
      "devicon devicon-css3-plain colored",
      "devicon devicon-javascript-plain colored",
      "devicon devicon-react-original colored",
      "devicon fas fa-cogs",
    ],
  },
  {
    name: "DeFi Crypto App",
    deployLink: "https://kim-ensu.github.io/react-defi-crypto-app/",
    githubLink: "https://github.com/kim-ensu/react-defi-crypto-app",
    image: defiImg,
    description:
      "React app, made with crypto API CoinGecko. You can see top six cryptocurrencies and how they changing.",
    icons: [
      "devicon devicon-html5-plain colored",
      "devicon devicon-css3-plain colored",
      "devicon devicon-javascript-plain colored",
      "devicon devicon-react-original colored",
      "devicon fas fa-cogs",
    ],
  },
  {
    name: "Firegram",
    deployLink: "https://react-app-firegram.herokuapp.com/",
    githubLink: "https://github.com/kim-ensu/firegram",
    image: firegramImg,
    description:
      "Upload and enjoy your favourite arts, photos and images to this art gallery. Made with ReactJS and Firebase, also added infinite scroll function for your comfort",
    icons: [
      "devicon devicon-html5-plain colored",
      "devicon devicon-css3-plain colored",
      "devicon devicon-javascript-plain colored",
      "devicon devicon-react-original colored",
      "devicon devicon-firebase-plain colored",
    ],
  },
];

function Projects() {
  return (
    <div className="projects component__space" id="Projects">
      <div className="section__container">
        <h1 className="heading">My Projects</h1>
        <h2 className="heading">
          A Selection of stuff I've built or took part. There is not all works, some are still in
          process, I will update this list in future
        </h2>
        <div className="projects__wrapper">
          {projectList.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
        <div className="projects__h3__wrp">
          <h3>You also can check this repositories</h3>
          <p className="additional">
            Repository of <a href="https://github.com/kim-ensu/react-portfolio">this page</a>
          </p>
          <p className="additional">
            And a project made by team of five, two backend and three frontend developers. It is
            online book of recipes, with authentication and flexible search. You can look it{" "}
            <a href="https://github.com/MaxLebedinsky/CookBook">here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;

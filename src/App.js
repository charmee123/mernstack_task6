import React from "react";

const App = () => {
  const portfolioData = {
    name: "Charmee Gandhi",
    reg:"21BCE11016",
    place: "Ahmedabad , Gujarat | India",
    skills: ["Proficient in C++", "Novice in Web Development(Full stack)", "Intermediate in Database(mySQL & MongoDB)"],
    projects: [
      {
        title: "Krishak Vriddhi | Agricultural Project",
        description: "Krishak Vridhhi is a website that will be used for agriculture purposes.A user-friendly interface is designed to predict crop suitableness based on soil pH, availability of potassium and nitrogen, and soil type. The software allows users to input soil data and schedule fertilizer sprays. Farmers can set calendar events and receive notifications for future climatic changes. The project relies on GitHub and YouTube for user-friendly interfaces. Check here- https://krishakvriddhi.charmee123.repl.co/",
      },
      {
        title: "Rythmic | Musical instruments website",
        description: "Rhythmic is the ultimate virtual music platform that enables you to effortlessly play the piano, drums, guitar, and panflute from the comfort of your own home. Our platform is designed to accommodate all levels of expertise, whether you are a novice or an experienced musician. Check here- https://rhythmic-two.vercel.app/",
      },
      {
        title: "Charmee Gandhi | Portfolio Website",
        description: "Explore my portfolio website, a dynamic showcase of my work powered by HTML, CSS, and JavaScript with the flexibility of Flexbox.",
      },
    ],
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <div className="header">
          <h1>{portfolioData.name}</h1>
          <h2><u>Registration no:</u> {portfolioData.reg}</h2>
          <h2><u>Postal Location:</u> {portfolioData.place}</h2>
        </div>
        <div className="body">
          <div className="about">
            <h3><u>Description about me:</u></h3>
            <p>Hey! I am  Charmee, 20 Years of age and currently pursuing my B.Tech Degree from VIT-Bhopal in CSE-Core. I love coding. My hobbies are reading, cooking and listening music. I love to make contact with new people. I am self motivated, detail oriented, disciplined, hardworking, loyal and versatile person. </p>
          </div>
          <div className="skills">
            <h3><u>Skills:</u></h3>
            <ul>
              {portfolioData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="projects">
            <h3><u>Some Personal Projects: </u></h3>
            {portfolioData.projects.map((project) => (
              <ul>
                <div className="project" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              </ul>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
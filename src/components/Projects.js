import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";

import lobster from "../assets/img/lobster.jpg";
import portfolio from "../assets/img/portfolio.png";
import sunbreath from "../assets/img/sunbreath.png";
import xamarin from "../assets/img/xamarin.jpg";
import game from "../assets/img/2048.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import lift from "../assets/img/lift.png";

export const Projects = () => {
  const projects = [
    {
      title: "Lobster? Bot (NodeJS / DiscordJS)",
      description: "Discord bot that creates reminders for users",
      imgUrl: lobster,
      Url: "https://github.com/nivans-dan/reminder_bot"
    },
    {
      title: "First portfolio (NodeJS / ReactJS)",
      description:
        "Training portfolio, my first creation made with the help of tutorials",
      imgUrl: portfolio,
      Url: "https://github.com/nivans-dan/nivans-dan.github.io"
    },
    {
      title: "SunBreath Simulator (HTML, CSS, JavaScript)",
      description:
        "Software simulator for a machine that accelerates the wear of polymers by UV rays, establishing a time, type of polymer and the intensity of UV rays",
      imgUrl: sunbreath,
      Url: "https://github.com/nivans-dan/SunBreath-Simulator"
    },
    {
      title: "Sleeping App (C# / Xamarin)",
      description:
        "Mobile app in which you set shutdown/silence times to be able to sleep without interruption (still under development)",
      imgUrl: xamarin,
      Url: "https://github.com/Whaibe/SleepApp"
    },
    {
      title: "2048 Video Game (C)",
      description:
        "2048 is a single-player sliding tile puzzle video game, the objective is to slide numbered tiles on a grid to combine them to create a tile with the number 2048",
      imgUrl: game,
      Url: "https://github.com/nivans-dan/Programming-C/blob/main/Game2048.c"
    },
    {
      title: "Forklift Design (Autodesk Inventor)",
      description:
        "Crane mounted on racks in charge of locating products and taking them to the operator, capable of supporting 15 Kg",
      imgUrl: lift,
      Url: "https://drive.google.com/file/d/1mvbnocVWNtslus81HtCSpt0r4lWgJS8D/view"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Some projects that I have done in recent months, others are still
              under development and some are already in mind for soon
              development!
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lore</Tab.Pane>
                <Tab.Pane eventKey="third">Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Img"></img>
    </section>
  );
};

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "Inventory",
      description:
        "New version of Microsoft Inventory sample, built on WinUI 3, using DDD and Clean Architecture approach.",
      imgUrl: projImg1,
      category: "open-source",
    },
    {
      title: "Modern CQRS",
      description:
        "Shows, how to implement CQRS architecture approach, using Autofac and MediatR libraries.",
      imgUrl: projImg2,
      category: "open-source",
    },
    {
      title: "React Pizza",
      description:
        "Here I'm learning ReactJS by YouTube course from Archakov Blog",
      imgUrl: projImg3,
      category: "pet",
    },
    {
      title: "WinUI 3",
      description: "Article about the new age of Windows development.",
      imgUrl: projImg4,
      category: "article",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
              At free time I like to experiment with new technologies,
              contributing open source projects, participate hackathons and
              writing technical articles.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Open source</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Pet</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Articles</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects
                      .filter((project) => project.category == "open-source")
                      .map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects
                      .filter((project) => project.category == "pet")
                      .map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects
                      .filter((project) => project.category == "article")
                      .map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

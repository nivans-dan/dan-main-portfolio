import { Col, Container, Row, Carousel } from "react-bootstrap";

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Here you can find some of my skills that I have developed and
                continue to develop with my projects. I'm working to improve 
                the percentage and add more statistics!
              </p>
              <Carousel infinite={true} indicators={false} className="skill-slider">
                <Carousel.Item>
                  <div className="item">
                    <img src={meter1} alt="Img"></img>
                    <h5>Back-end (Python / Django)</h5>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="item">
                    <img src={meter3} alt="Img"></img>
                    <h5>Front-end (ReactJs / AngularJs)</h5>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="item">
                    <img src={meter3} alt="Img"></img>
                    <h5>Database management (SQL / NOSQL)</h5>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="item">
                    <img src={meter3} alt="Img"></img>
                    <h5>Technical support (Bug fixing)</h5>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="item">
                    <img src={meter2} alt="Img"></img>
                    <h5>Mobile development (C# / Xamarin)</h5>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Img" />
    </section>
  );
};

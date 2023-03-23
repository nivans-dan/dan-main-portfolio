import { Col, Container, Row, Carousel } from "react-bootstrap";

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <Carousel.Item>
                  <div className="item">
                    <img src={meter1} alt="Img"></img>
                    <h5>Back-end</h5>
                    <h5>(Python / Django)</h5>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="item">
                    <img src={meter3} alt="Img"></img>
                    <h5>Front-end</h5>
                    <h5>(ReactJs / AngularJs)</h5>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="item">
                    <img src={meter3} alt="Img"></img>
                    <h5>Database management</h5>
                    <h5>(SQL / NOSQL)</h5>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="item">
                    <img src={meter3} alt="Img"></img>
                    <h5>Technical support</h5>
                    <h5>(Bug fixing)</h5>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="item">
                    <img src={meter2} alt="Img"></img>
                    <h5>Mobile development</h5>
                    <h5>(C# / Xamarin)</h5>
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

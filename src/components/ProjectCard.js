import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, Url }) => {
  return (
    <Col sm={6} md={4}>
      <a
        href={Url}
        target={"_blank"}
        rel="noreferrer"
        style={{ color: "inherit" }}
      >
        <div className="proj-imgbx">
          <img src={imgUrl} alt="ImgUrl" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container id="about"  style={{ marginTop: "15vh" }}>
      <Row style={{ marginBottom: "5vh" }}>
        <Col style={{ textAlign: "center" }}>
          {" "}
          <h3>
            <i> HI </i>{" "}
          </h3>
        </Col>
      </Row>
      <Row>
        <Col className="about__description">
          <p>
            {" "}
            I am a Full-stack Developer with two years of commercial experience
            in frontend development. I specialize in building modern, scalable
            web applications with a strong focus on user experience and
            performance.{" "}
          </p>

          <p>
            {" "}
            I graduated from WSB Merito University with a degree in computer
            science, specializing in programming. Currently, I am pursuing my
            master's degree in artificial intelligence, deepening my knowledge
            of machine learning, data science, and AI-driven solutions.{" "}
          </p>

          <p>
            {" "}
            My primary technologies include React, Next.js, TypeScript, and Solidity. I
             also have a solid background in building decentralized applications and
            working with blockchain technologies.{" "}
          </p>

          <p>
            {" "}
            I have experience working with REST APIs, both consuming and
            creating them, using Python and Node.js. My backend skills also
            extend to database management and ORM.{" "}
          </p>

          <p>
            {" "}
            I am passionate about emerging technologies and continuously
            expanding my expertise in fields like blockchain and AI. I enjoy
            tackling complex challenges and finding innovative solutions that
            drive digital transformation.{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const About = () => {
    return (
        <Container id="about" fluid style={{marginTop:"15vh"}}>
        <Row style={{marginBottom:"5vh"}}>
            <Col style={{textAlign:"center"}}> <h2>
                <i> HI </i> </h2></Col>
        </Row>
        <Row>
            <Col className="about__description" >
           <p>  I am a Full-stack Developer with two years of commercial experience in frontend development. </p>
           <p>  I graduated from WSB Merito University in computer science with a specialization in programming. </p>
           <p>  My main technologies are React, TypeScript and Solidity. </p>
           <p>  I have experience working with Rest API and creating it in Python and Node js.</p>
           <p>  I am fascinated by new technologies and developing in them, e.g. Blockchain and AI</p>

            </Col>
        </Row>
        </Container>
    )
}

export default About

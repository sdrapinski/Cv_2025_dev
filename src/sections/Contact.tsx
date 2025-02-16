import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const Contact = () => {
  return (
    <Container className='contact' id="contact">
      <Row>
        <Col style={{textAlign:"center"}}>
        <h2> Feel free to contact me: </h2> 
        <p>
        <b>  Email:   <a className='contact__link' href="mailto:szymondrapinski@gmail.com">szymondrapinski@gmail.com</a> </b>
        </p>
        <p>
         <a className='contact__link' href="https://www.linkedin.com/in/szymon-drapinski-it-developer/"> <img src="./linkedin.png" alt="linkedin contact" /> </a>
        </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
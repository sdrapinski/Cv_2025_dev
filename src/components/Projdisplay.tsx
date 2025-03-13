import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectPop from "./ProjectPop";
import ProjectCard from "./ProjectCard";

const shop_images = [
  "/shop/shop1.png",
  "/shop/kolekcja.png",
  "/shop/loggin.png",
  "/shop/checkout.png",
];

const layout_images = ["/shop/main.png", "/shop/menu.png", "/shop/about.png"];

const Projdisplay = () => {
  return (
    <Container id="projects"  style={{ marginTop: "15vh" }}>
      <h2 style={{textAlign:"center",marginBottom:"25px"}} >Hosted Projects</h2>
      <Row className="projectRow" style={{ marginBottom: "15vh" }}>

       <ProjectCard img="kingless_library/1.png" link="https://kinglessgame.com/library"/>
       <ProjectCard img="kingless/1.png" link="https://kinglessgame.com"/>
       <ProjectCard img="cryptoshop/1.png" link="https://crypto-shop.up.railway.app/"/>
       <ProjectCard img="smartcontract/1.png" link="https://sepolia.etherscan.io/address/0xed77a44706a85a11e19604d8d03ba9997f096a18"/>
      </Row>
    </Container>
  );
};

export default Projdisplay;

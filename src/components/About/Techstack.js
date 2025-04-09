import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
} from "react-icons/di";
import { FaWordpress, FaBootstrap, FaCss3Alt } from "react-icons/fa";
import { BsFileBarGraph } from "react-icons/bs";
import { TiHtml5 } from "react-icons/ti";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <TiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaCss3Alt/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <BsFileBarGraph />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      

    </Row>
  );
}

export default Techstack;

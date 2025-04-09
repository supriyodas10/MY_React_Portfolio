import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiLeetcode
} from "react-icons/si";
import { FaGithub, FaDatabase  } from "react-icons/fa";
import { RiFileExcel2Line } from "react-icons/ri";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiLeetcode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <RiFileExcel2Line />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaDatabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;

import React from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const FooterSide = () => {
  return (
    <>
      <h1>Official Stores</h1>
      <hr />
      <Row className="mt-3 px-3">
        <Col xs={6} md={3}>
          <Image src="com 1.png" rounded />
        </Col>{" "}
        <Col xs={6} md={3}>
          <Image src="com 2.png" rounded />
        </Col>{" "}
        <Col xs={6} md={3}>
          <Image src="com 3.png" rounded />
        </Col>{" "}
        <Col xs={6} md={3}>
          <Image src="com 4.png" rounded />
        </Col>{" "}
      </Row>
      <Row className="mt-3">
        <Image src="./eeeeeeee.png"></Image>
      </Row>
      <Row className="mt-3">
        <Image src="./wwww.png"></Image>
      </Row>
    </>
  );
};

export default FooterSide;

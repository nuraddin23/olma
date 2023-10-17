import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BasketItems from "./BasketItems";
import OrderSummary from "./OrderSummary";

const BasketContainer = () => {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <BasketItems />
        </Col>
        <Col md={4}>
          <div className="position-sticky top-50">
            <OrderSummary />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BasketContainer;

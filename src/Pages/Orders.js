import React from "react";
import { useSelector } from "react-redux";
import Header from "../Components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Order = () => {
  const orders = useSelector((state) => state.orders.orders);

  const calculateTotalPrice = (order) => {
    return order.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  return (
    <>
      <Header />
      <Container className="mt-4">
        <h2 className="mb-3">Your Orders</h2>
        {orders ? (
          orders.map((order) => (
            <Card key={order.id} className="mb-3">
              <Card.Body>
                <Card.Title className="mb-3">Order ID: {order.id}</Card.Title>
                <Row>
                  <Col md={6} xs={12}>
                    <h4>Products:</h4>
                    <ul>
                      {order.products.map((product) => (
                        <li key={product.id}>
                          {product.quantity}x {product.title} - $
                          {(product.price * product.quantity).toFixed(2)}
                        </li>
                      ))}
                    </ul>
                  </Col>
                  <Col md={6} xs={12}>
                    <h4>Total Price:</h4>
                    <p>${calculateTotalPrice(order)}</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No orders available.</p>
        )}
      </Container>
    </>
  );
};

export default Order;

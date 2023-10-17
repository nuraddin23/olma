import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleProductSelection,
  removeProductFromBasket,
  removeFromBasket,
  addToBasket,
} from "../ReduxToolkit/addToBasketReducer";
import { Badge, Row, Col, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { FaStar } from "react-icons/fa";


const BasketItems = () => {
  const dispatch = useDispatch();
  const addedProducts = useSelector((state) => state.addToBasket.addedProducts);

  const handleProductCheckbox = (productId) => {
    dispatch(toggleProductSelection(productId));
  };

  const handleRemoveProductFromBasket = (productId) => {
    dispatch(removeProductFromBasket(productId));
  };

  const handleRemoveFromBasket = (productId) => {
    dispatch(removeFromBasket(productId));
  };

  const handleAddToBasket = (product) => {
    dispatch(addToBasket(product));
  };

  const renderRatingStars = (rating) => {
    const starIcons = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        starIcons.push(<FaStar key={i} style={{ color: " #ffd700" }} />);
      } else {
        starIcons.push(<FaStar key={i} style={{ color: "#c1c1c1" }} />);
      }
    }
    return starIcons;
    
  };

  return (
    <>
      {addedProducts.map((product) => (
        <Card key={product.id} className="mb-3">
          <Card.Header>
            <Form>
              <Form.Check
                type="checkbox"
                name={product.title}
                value={product.title}
                checked={product.isSelected}
                onChange={() => handleProductCheckbox(product.id)}
              />
            </Form>
          </Card.Header>
          <Card.Body>
            <Row>
              {/* Column for the product image */}
              <Col xs={12} md={4}>
                <Image src={product.image} fluid />
              </Col>

              {/* Column for product details and actions */}
              <Col xs={12} md={8}>
                <Card.Title>
                  <h3>{product.title}</h3>
                  <h6 className="text-secondary">{product.category}</h6>
                </Card.Title>
                <Card.Text>
                  <h3 className="text-danger">Price: ${product.price}</h3>
                  <p>Rating: {renderRatingStars(product.rating.rate)}</p>
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveProductFromBasket(product.id)}
                  >
                    Remove
                  </Button>
                </Card.Text>
                <Card.Text>
                  <Badge className="d-flex p-2 bg-body-secondary align-items-center w-25 justify-content-between">
                    <Button
                      variant="light"
                      onClick={() => handleRemoveFromBasket(product.id)}
                    >
                      <h4>-</h4>
                    </Button>
                    <span><h4 className="text-dark">{product.quantity}</h4></span>
                    <Button
                      variant="light"
                      onClick={() => handleAddToBasket(product)}
                    >
                      <h4>+</h4>
                    </Button>
                  </Badge>
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default BasketItems;

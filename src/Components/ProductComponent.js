import React from "react";
import { ButtonGroup, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaStar } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";
import {
  addToBasket,
  removeFromBasket,
} from "../ReduxToolkit/addToBasketReducer";
import { Link } from "react-router-dom";
const ProductComponent = () => {
  const filteredProducts = useSelector(
    (state) => state.product.filteredProducts
  );
  const addedProducts = useSelector((state) => state.addToBasket.addedProducts);

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

  const dispatch = useDispatch();
  const handleAddToBasket = (product) => {
    dispatch(addToBasket(product));
  };
  const handleRemoveFromBasket = (productId) => {
    dispatch(removeFromBasket(productId));
  };

  const renderList = filteredProducts.map((product) => {
    const { id, title, image, price, category, rating } = product;
    const productInBasket = addedProducts.find((item) => item.id === id);
    const quantity = productInBasket ? productInBasket.quantity : 0;

    return (
      <Col key={id} xs={12} sm={6} md={4} lg={3}>
        <Card style={{ width: "18rem", height: "30rem" }} className="mb-3 ">
          <Card.Img className="h-50 cover-empty" variant="top" src={image} />
          <Card.Body className="h-50 ">
            <Link
              to={`/product/${id}`}
              className="h-75"
              style={{ textDecoration: "none" }}
            >
              <Card.Title className=" h-25 overflow-hidden text-dark ">
                {title}
              </Card.Title>
              <Card.Text className="">
                <h3 className="text-danger">${price}</h3>
                <p className="text-secondary mb-0">{category}</p>
                <h6> {renderRatingStars(rating.rate)}</h6>
              </Card.Text>
            </Link>
            {quantity > 0 ? (
              <>
                <ButtonGroup className="mt-3 w-100" aria-label="Basic example">
                  <Button
                    className="w-50"
                    variant="danger"
                    onClick={() => handleRemoveFromBasket(id)}
                  >
                    -
                  </Button>
                  <Button
                    className="w-50"
                    onClick={() => handleAddToBasket(product)}
                  >
                    +
                  </Button>
                </ButtonGroup>
              </>
            ) : (
              <Button
                className="mt-3 w-100"
                onClick={() => handleAddToBasket(product)}
              >
                Add to Basket
              </Button>
            )}
          </Card.Body>
          {quantity > 0 && (
            <Badge bg="success" className="position-absolute top-0 end-0">
              <h5 className="mb-0">{quantity}</h5>
            </Badge>
          )}
        </Card>
      </Col>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;

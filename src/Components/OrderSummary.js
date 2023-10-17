import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addOrder } from "../ReduxToolkit/ordersReducer";
import { setBoughtStatus } from "../ReduxToolkit/buyNowReducer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const addedProducts = useSelector((state) => state.addToBasket.addedProducts);
  const handleBuyNow = () => {
    if (addedProducts.length > 0) {
      const orderId = uuidv4();
      dispatch(addOrder({ id: orderId, products: addedProducts }));
      dispatch(setBoughtStatus(true));
    }
  };
  const totalNumberofProducts = addedProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const totalPrice = addedProducts.reduce((total, product) => {
    const productTotal = product.price * product.quantity;
    return total + parseFloat(productTotal.toFixed(2));
  }, 0);

  return (
    <>
      <Card >
        <Card.Header className="d-flex justify-content-center text-opacity-100">
          <h3>Order Summary</h3>
        </Card.Header>
        <Card.Body>
          <p>Subtotal {totalNumberofProducts} items</p>

          <Form.Control
            type="text"
            id="inputPassword5"
            placeholder="Enter Voucher Code"
            aria-describedby="passwordHelpBlock"
          />
          <Card.Text className="d-flex justify-content-center mt-3">
            <Button variant="danger">Apply</Button>{" "}
          </Card.Text>
          <div className="d-flex justify-content-between">
            <h3>Total: </h3>
            <h2 className="text-danger">{totalPrice}</h2>
          </div>
          <Button
            onClick={handleBuyNow}
            disabled={addedProducts.length === 0}
            className="w-100"
            variant="danger"
            size="lg"
          >
            Buy Now
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default OrderSummary;

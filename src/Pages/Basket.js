import React from "react";
import Header from "../Components/Header";
import HeaderBasket from "../Components/HeaderBasket";
import BasketContainer from "../Components/BasketContainer";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBoughtStatus } from "../ReduxToolkit/buyNowReducer";
import { resetAddedProductsSlice } from "../ReduxToolkit/addToBasketReducer";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

const Basket = () => {
  const isBought = useSelector((state) => state.buyNow.isBought);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/orders");
    dispatch(setBoughtStatus(false));
    dispatch(resetAddedProductsSlice());
  };

  const onHide = () => {
    dispatch(setBoughtStatus(false));
  };

  return (
    <>
      {isBought && (
        <Offcanvas show={isBought} onHide={onHide}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Order Placed Successfully</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex flex-column ">
            <h4>Thank you for shopping with us!</h4>
            <p>Your order has been placed successfully.</p>
            <h6 className="d-flex justify-content-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                fill="currentColor"
                class="bi bi-check-circle"
                viewBox="0 0 16 16"
                className="d-inline-block"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
            </h6>
            <Button variant="danger" onClick={handleNavigate}>
              Go to Orders Page
            </Button>
          </Offcanvas.Body>
        </Offcanvas>
      )}
      <Header />
      <HeaderBasket />
      <BasketContainer />
    </>
  );
};

export default Basket;

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  removeAllSelectedProducts,
  toggleSelectAllProducts,
} from "../ReduxToolkit/addToBasketReducer";
import { useDispatch } from "react-redux";

const HeaderBasket = () => {
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const toggleSelectAll = () => {
    dispatch(toggleSelectAllProducts());
    setSelectAll(!selectAll);
  };
  const handleRemoveAll = () => {
    dispatch(removeAllSelectedProducts());
    setSelectAll(false);
  };
  return (
    <>
      <div className="bg-body-secondary d-flex justify-content-between px-3 align-items-center my-3" >
        <Container className="d-flex justify-content-between align-items-center">
          <Form>
            <Form.Group id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                checked={selectAll}
                onChange={toggleSelectAll}
                label="Select All products"
              />
            </Form.Group>
          </Form>
          <Button variant="danger" onClick={handleRemoveAll}>
            Remove All
          </Button>
        </Container>
      </div>
    </>
  );
};

export default HeaderBasket;

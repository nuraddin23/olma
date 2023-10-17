import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../ReduxToolkit/productReducer";
import ProductComponent from "./ProductComponent";
import { Button, Row } from "react-bootstrap";

const ProductListing = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(res.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Best Selling Products</h1>
      <hr />
      <Row>
        <ProductComponent />
      </Row>
      <div className="d-flex justify-content-center align-items-center">
        <Button size="lg" variant="outline-success">
          SHOW MORE
        </Button>{" "}
      </div>{" "}
    </>
  );
};

export default ProductListing;

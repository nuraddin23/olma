import React from "react";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProductListing from "./ProductListing";
import { useDispatch } from "react-redux";
import { filterProductsByCategory } from "../ReduxToolkit/productReducer";

const Categories = () => {
  const dispatch = useDispatch();
  const handleTabSelect = (category) => {
    dispatch(filterProductsByCategory(category));
  };

  return (
    <Container className="mt-3">
      <h1>Categories</h1>
      <hr />
      <Tabs
        defaultActiveKey="all"
        id="fill-tab-example"
        className="mb-3"
        fill
        onSelect={(e) => {
            console.log(e, 'eeee')
            handleTabSelect(e)
        }}
      >
        <Tab eventKey="all" title="All" >
          <ProductListing />
        </Tab>
        <Tab
          eventKey="electronics"
          title="Electronics"
          onSelect={() => handleTabSelect("electronics")}
        >
          <ProductListing />
        </Tab>
        <Tab
          eventKey="women's clothing"
          title="Women's Clothing"
          onSelect={() => handleTabSelect("women's clothing")}
        >
          <ProductListing />
        </Tab>
        <Tab
          eventKey="men's clothing"
          title="Men's Clothing"
          onSelect={() => handleTabSelect("  men's clothing")}
        >
          <ProductListing />
        </Tab>
        <Tab
          eventKey="jewelery"
          title="Jewelery"
          onSelect={() => handleTabSelect("jewelery")}
        >
          <ProductListing />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Categories;

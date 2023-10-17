import React, { useState } from "react";
import ProductListing from "../Components/ProductListing";
import Header from "../Components/Header";
import { useDispatch } from "react-redux";
import { filterProductsByCategory } from "../ReduxToolkit/productReducer";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";


const SearchResults = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    dispatch(filterProductsByCategory(category));
  };
  const filteredProducts = useSelector(
    (state) => state.product.filteredProducts
  );
  const searchTerm = useSelector((state) => state.product.searchTerm);

  return (
    <>
      <Header />
      <Container>
        <h6 className="text-secondary mt-3">Home - Search Results</h6>
        <hr />
        <div className=" d-flex justify-content-between">
          <h4 className="text-secondary">
            {filteredProducts.length} Items Found for "{searchTerm}”
          </h4>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Sort By
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => handleCategoryFilter("all")}
                active={selectedCategory === "all"}
              >
                All
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleCategoryFilter("electronics")}
                active={selectedCategory === "electronics"}
              >
                Electronics
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleCategoryFilter("women's clothing")}
                active={selectedCategory === "women's clothing"}
              >
                Women's Clothing
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleCategoryFilter("men's clothing")}
                active={selectedCategory === "men's clothing"}
              >
                Men's Clothing
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleCategoryFilter("jewelery")}
                active={selectedCategory === "jewelery"}
              >
                Jewelry
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <hr />
        <div className="SearchResults_container">
          <ProductListing selectedCategory={selectedCategory} />
        </div>
      </Container>
    </>
  );
};

export default SearchResults;

import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Basket from "./Pages/Basket";
import Orders from "./Pages/Orders";
import SearchResults from "./Pages/SearchResults";
import ProductDetails from "./Pages/ProductDetails";

const App = () => {
  return (
    <div className="App position-relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/searchresults" element={<SearchResults />} />
          <Route path="/product/:productId" element={<ProductDetails />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

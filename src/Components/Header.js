import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form, InputGroup, Button } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchProducts } from "../ReduxToolkit/productReducer";

const Header = () => {
  const dispatch = useDispatch();
  const { logout, user, isAuthenticated, loginWithRedirect } = useAuth0();
  const addedProducts = useSelector((state) => state.addToBasket.addedProducts);
  const uniqueProductTypes = new Set(addedProducts.map((product) => product.id))
    .size;
  const navigate = useNavigate();
  const handleNavigate = (place) => {
    navigate(place);
  };
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    if (searchTerm.trim() !== "") {
      dispatch(searchProducts(searchTerm));
    }
  }, [searchTerm, dispatch]);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary position-sticky top-0 z-1 shadow ">
      <Container>
        <Navbar.Brand onClick={() => handleNavigate("/")}>
          <img
            src="./shopping-cart-logo-21 1.png"
            width="100"
            height="100"
            className="d-inline-block align-top "
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto w-100">
            <InputGroup
              onClick={() => {
                handleNavigate("/searchresults");
              }}
            >
              <Form.Control
                placeholder="Search"
                aria-label="Search"
                aria-describedby="Search"
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="danger" id="basic-addon2">
                Search
              </Button>
            </InputGroup>
            <Nav.Link
              onClick={() => handleNavigate("/basket")}
              className="d-flex align-items-center mx-4 p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class="bi bi-cart3"
                viewBox="0 0 16 16"
                className=""
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <Badge bg="success">{uniqueProductTypes}</Badge>
            </Nav.Link>
            <Nav.Link href="#action2" className="mx-auto">
              {isAuthenticated ? (
                <h3
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  LogOut
                </h3>
              ) : (
                <h3>
                  <h3 onClick={() => loginWithRedirect()}>Login</h3>
                </h3>
              )}
            </Nav.Link>
          </Nav>
          <Nav>
            <h4 className="my-auto">
              <Badge bg="danger">
                {isAuthenticated ? <>{user.name}</> : <>User</>}
              </Badge>
            </h4>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

import React, { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToBasket } from "../ReduxToolkit/addToBasketReducer";
import { removeFromBasket } from "../ReduxToolkit/addToBasketReducer";
import { selectedProduct } from "../ReduxToolkit/selectedProductsReducer";
import { removeSelectedProduct } from "../ReduxToolkit/selectedProductsReducer";
import { FaStar } from "react-icons/fa";
import Header from "../Components/Header";
import { Button, Container, Row, Col, Image } from "react-bootstrap";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) =>
    state.product.products.find((p) => p.id === parseInt(productId))
  );
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch(addToBasket(product));
  };

  const handleRemoveFromBasket = () => {
    dispatch(removeFromBasket(product.id));
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/basket");
  };

  const productInBasket = useSelector((state) =>
    state.addToBasket.addedProducts.find((item) => item.id === product.id)
  );
  const quantity = productInBasket ? productInBasket.quantity : 0;

  useEffect(() => {
    const fetchProductDetail = async (id) => {
      const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(selectedProduct(response.data));
    };

    if (productId && productId !== "") fetchProductDetail(productId);

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId, dispatch]);

  const { image, title, price, category, rating } = product;

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
      <Header />
      <Container>
        {Object.keys(product).length === 0 ? (
          <Row className="Loading">
            <Col>
              <h2>...Loading</h2>
            </Col>
          </Row>
        ) : (
          <>
            <Row className="path_bar mt-3 shadow">
              <Col>
                <h6 className="text-secondary">
                  Home - Search - ProductDetails - {title}
                </h6>
              </Col>
              <Col className="icons d-flex justify-content-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="19"
                  viewBox="0 0 24 19"
                  fill="none"
                  className="me-4"
                >
                  <path
                    d="M18 12.9074C17.24 12.9074 16.56 13.1382 16.04 13.4998L8.91 10.3073C8.96 10.1304 9 9.95346 9 9.76884C9 9.58422 8.96 9.40728 8.91 9.23035L15.96 6.06867C16.5 6.4533 17.21 6.69177 18 6.69177C19.66 6.69177 21 5.66095 21 4.38397C21 3.10699 19.66 2.07617 18 2.07617C16.34 2.07617 15 3.10699 15 4.38397C15 4.5686 15.04 4.74553 15.09 4.92246L8.04 8.08415C7.5 7.69951 6.79 7.46104 6 7.46104C4.34 7.46104 3 8.49186 3 9.76884C3 11.0458 4.34 12.0766 6 12.0766C6.79 12.0766 7.5 11.8382 8.04 11.4535L15.16 14.6537C15.11 14.8152 15.08 14.9845 15.08 15.1537C15.08 16.3922 16.39 17.4 18 17.4C19.61 17.4 20.92 16.3922 20.92 15.1537C20.92 13.9152 19.61 12.9074 18 12.9074Z"
                    fill="#8C8787"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M18.1596 2.15739C17.666 1.6436 17.08 1.2361 16.435 0.95817C15.79 0.680238 15.0988 0.537325 14.4008 0.537598C13.7027 0.537871 13.0116 0.681324 12.3668 0.95976C11.722 1.2382 11.1363 1.64616 10.6431 2.16032L9.99927 2.83865L9.3608 2.16179L9.35665 2.15747C8.86329 1.64393 8.27759 1.23657 7.63299 0.958639C6.98839 0.680711 6.29751 0.537663 5.5998 0.537663C4.90208 0.537663 4.2112 0.680711 3.5666 0.958639C2.922 1.23657 2.3363 1.64393 1.84294 2.15747L1.55613 2.45602C0.559755 3.49316 0 4.89982 0 6.36655C0 7.83328 0.559755 9.23994 1.55613 10.2771L9.12599 18.1565L9.98084 19.0888L10.0012 19.0676L10.0233 19.0906L10.8243 18.211L18.4464 10.2769C19.4413 9.23899 20 7.83264 20 6.36642C20 4.9002 19.4413 3.49386 18.4464 2.45589L18.1596 2.15739ZM17.507 9.29933L10.0012 17.1123L2.49528 9.29933C1.748 8.52148 1.32819 7.46649 1.32819 6.36644C1.32819 5.2664 1.748 4.21141 2.49528 3.43355L2.78214 3.135C3.52905 2.35754 4.54197 1.92058 5.59826 1.92017C6.65455 1.91975 7.66778 2.35592 8.41526 3.1328L9.9964 4.80862L11.5851 3.135C11.9551 2.74985 12.3944 2.44432 12.8778 2.23588C13.3613 2.02743 13.8794 1.92014 14.4027 1.92014C14.926 1.92014 15.4441 2.02743 15.9276 2.23588C16.4111 2.44432 16.8503 2.74985 17.2203 3.135L17.5072 3.43351C18.2533 4.212 18.6723 5.26679 18.6723 6.36646C18.6723 7.46613 18.2532 8.52088 17.507 9.29933Z"
                    fill="black"
                  />
                </svg>
              </Col>
            </Row>
            <Row className="container_product mt-3 ">
              <Col className="product_cart">
                <div className="product_cart_container">
                  <Row className="info shadow">
                    <Col xs={12} md={6} className="img_box">
                      <Image src={image} alt={title} fluid />
                    </Col>
                    <Col
                      xs={12}
                      md={6}
                      className="content_product bg-body-secondary"
                    >
                      <h3>{title}</h3>
                      <Row className="product_rating">
                        <Col>
                          <h4>{renderRatingStars(rating.rate)}</h4>
                        </Col>
                        <Col>
                          <h5>{rating.count} left</h5>
                        </Col>
                      </Row>
                      <h2 className="text-danger">${price}</h2>
                      <p className="text-secondary">{category}</p>
                      <Row className="qty">
                        <Col xs={12} md={6}>
                          <h1>Quantity:</h1>
                        </Col>
                        <Col xs={12} md={6}>
                          <Row className="qty_change">
                            <Col>
                              <Button
                                variant="danger"
                                onClick={handleRemoveFromBasket}
                              >
                                -
                              </Button>
                            </Col>
                            <Col>
                              <h4>{quantity}</h4>
                            </Col>
                            <Col>
                              <Button
                                variant="danger"
                                onClick={handleAddToBasket}
                              >
                                +
                              </Button>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Container>
                        <Row className="add_buttons">
                          {/* <Col>
                          <Button className="buy">Buy Now</Button>
                        </Col> */}
                          {/* <Col> */}

                          {/* </Col> */}
                          <Button variant="danger" onClick={handleNavigate}>
                            Add To Basket
                          </Button>
                        </Row>
                      </Container>
                    </Col>
                  </Row>
                  <Row className="additional_info mt-3 bg-body-secondary shadow">
                    <Col xs={12} md={4} className="info_col">
                      <h6>Sold By:</h6>
                      <h1>NIKE company</h1>
                    </Col>
                    <Col xs={12} md={4} className="info_col">
                      <h6>Services:</h6>
                      <pre>-7 Days Return</pre>
                      <pre>-Warranty not available</pre>
                    </Col>
                    <Col xs={12} md={4} className="info_col">
                      <h6>Cash on Delivery</h6>
                      <pre>Standard Delivery : 1-3 jan</pre>
                      <pre>Lahore, Pakistan</pre>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default ProductDetails;

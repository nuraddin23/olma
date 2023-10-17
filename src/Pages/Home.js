import React from "react";
import Header from "../Components/Header";
import HomeCarusel from "../Components/HomeCarusel";
import { Container } from "react-bootstrap";
import Categories from "../Components/Categories";
import FooterSide from "../Components/FooterSide";


const Home = () => {
  return (
    <>
      <Header  />
      <Container>
        <HomeCarusel />
        <Categories />
        <FooterSide />
      </Container>
    </>
  );
};

export default Home;

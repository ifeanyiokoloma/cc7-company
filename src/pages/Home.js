import React from "react";
import Slide from "../components/slide/Slide";
import ProductsGrid from "../components/grid/Grid";
import styled from "styled-components";
import Blog from "../components/Blog";

const StyledHome = styled.main`
  display: flex;
  flex-direction: column;
  gap: 5em;
  margin-bottom: 3em;
`;

const Home = () => {
  return (
    <StyledHome>
      <Slide />
      <ProductsGrid />
      <Blog />
    </StyledHome>
  );
};

export default Home;

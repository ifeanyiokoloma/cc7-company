import React from "react";
import { SplideSlide } from "@splidejs/react-splide";

// Default theme
import "@splidejs/react-splide/css";

import { slideConfig } from "./config";
import { StyledSlide } from "./style";

const Slide = () => {
  return (
    <StyledSlide options={slideConfig} aria-label="My Favorite Images">
      <SplideSlide>
        <img src="/images/bricks.jpg" alt="bricks" />
      </SplideSlide>
      <SplideSlide>
        <img src="/images/milk.jpg" alt="milk" />
      </SplideSlide>
      <SplideSlide>
        <img src="/images/flower.jpg" alt="flower" />
      </SplideSlide>
    </StyledSlide>
  );
};

export default Slide;

import { Grid } from "@mui/material";
import React from "react";
import StyledGrid from "./style";

const ProductsGrid = () => {
  return (
    <StyledGrid container spacing={0.5}>
      <Grid item xs={4}>
        <img src="/images/bricks.jpg" alt="bricks" />
      </Grid>
      <Grid item xs={4}>
        <img src="/images/flower.jpg" alt="flower" />
      </Grid>
      <Grid item xs={4}>
        <img src="/images/milk.jpg" alt="milk" />
      </Grid>
    </StyledGrid>
  );
};

export default ProductsGrid;

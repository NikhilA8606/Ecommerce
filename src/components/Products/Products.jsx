import React, {useState} from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from "./style";

const Products = ({ products, cart, setCart }) => { 
  const classes = useStyles();

  const handleAdd = (product) => {
    setCart([...cart, product]);
    console.log(cart);
  };

  if (!Array.isArray(products)) {
    console.error("Expected products to be an array, but got:", products);
    return <div>No products available</div>;
  }

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} md={4} lg={3}>
            <Product product={product} handleAdd={handleAdd} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

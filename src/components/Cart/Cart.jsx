import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from "@material-ui/core";

import { Cancel } from "@material-ui/icons";
import useStyles from "./style";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const classes = useStyles();
  console.log(cart);
  const [total, setTotal] = useState(0);

  const closeButton = (productID) => {
    console.log("close button clicked");
    const newCart = cart.filter((any) => any.id !== productID);
    console.log("newCart", newCart);
    setCart(newCart);
  };

  useEffect(() => {
    const CalculateTotal = () => {
      const sum = cart
        .map((product) => product.price)
        .reduce((a, b) => a + b, 0);
      console.log("sum", sum);
      setTotal(sum);
    };
    CalculateTotal();
  }, [cart]);


  const EmptyCart = () => (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
          <Grid xs={12} md={4} lg={3}>
          <Typography variant="h6" className={classes.message}>You have no items in your shopping cart,
    <Link to="/" className={classes.link}>start adding some!</Link>
    </Typography>
          </Grid>
        
      </Grid>
    </main>
  );

  const FilledCart = () => {
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justifyContent="center" spacing={4}>
          {cart.map((product) => (
            <Grid item key={product.id} xs={12} md={4} lg={3}>
              <Card className={classes.root}>
                <Cancel onClick={() => closeButton(product.id)} />
                <CardMedia
                  className={classes.media}
                  image={product.images}
                  title={product.title}
                />
                <CardContent>
                  <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      {product.title}
                    </Typography>
                    <Typography variant="h5">{product.price}</Typography>
                  </div>
                  <Typography variant="body2" color="tectSecondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
          <Typography variant="h4">Subtotal: {total}</Typography>
          <div>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
              onClick={() => setCart([])}
            >
              Empty Cart
            </Button>
            
          </div>
        </div>
      </main>
    );
  };

  return (
    <Container>{cart.length === 0 ? <EmptyCart /> : <FilledCart />}</Container>
  );
};

export default Cart;

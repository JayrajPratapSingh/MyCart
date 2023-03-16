import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../../context/Context";
import "./SingleItem.css";
const SingleItem = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="items">
      <Card>
        <Card.Img
          variant="top"
          src={item.image}
          alt={item.name}
          style={{ height: 300 }}
        />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {item.price.split("."[0])}</span>
            {item.fastDelivery ? (
              <div>Fast Delevery</div>
            ) : (
              <div> 4 days delivery</div>
            )}
            <div>Rating: {item.ratings}</div>
          </Card.Subtitle>
          {cart.some((p) => p.id === item.id) ? (
            <Button
              onClick={() => {
                dispatch({ type: "REMOVE_FROM_CART", payload: item });
              }}
              variant="danger"
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: item });
              }}
              disable={item.inStock}
            >
              {!item.inStock ? "out of stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleItem;

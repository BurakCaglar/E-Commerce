import React from "react";
import styled from "styled-components";
import { useCartContext } from "../../context/useCartContext";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";

const CartTotals = () => {
  const { totalPrice } = useCartContext();
  return (
    <Wrapper>
      <div>
        <input type="text" placeholder="Promo Code" />
        <h6>Total cost: {totalPrice.toFixed(2)}</h6>
        <Link to="/checkout" className="btn">
          <Button buttonName={"CHECKOUT"} />
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default CartTotals;

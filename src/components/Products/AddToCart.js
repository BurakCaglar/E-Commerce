import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/useCartContext";
import AmountButtons from "../Buttons/AmountButtons";

const AddToCart = ({ singleProduct }) => {
  const { addToCart } = useCartContext();
  const { id } = singleProduct;
  const [number, setNumber] = useState(1);

  const increaseNumber = () => {
    setNumber((prevNumber) => {
      return (prevNumber = prevNumber + 1);
    });
  };
  const decreaseNumber = () => {
    setNumber((prevNumber) => {
      let newNumber = prevNumber - 1;
      if (newNumber <= 1) {
        newNumber = 1;
      }
      return newNumber;
    });
  };

  return (
    <Wrapper>
      <div className="">
        <AmountButtons
          number={number}
          increaseNumber={increaseNumber}
          decreaseNumber={decreaseNumber}
        />
        <Link
          to="/cart"
          className=""
          onClick={() => addToCart(id, singleProduct, number)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default AddToCart;

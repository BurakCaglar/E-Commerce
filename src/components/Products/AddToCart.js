import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/useCartContext";
import AmountButtons from "../Buttons/AmountButtons";
import { Button, ButtonV2 } from "../Buttons/Button";

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
      <div className="buttons">
        <AmountButtons
          number={number}
          increaseNumber={increaseNumber}
          decreaseNumber={decreaseNumber}
        />
        <div className="buttons-wrapper">
          <div
            className="button"
            onClick={() => addToCart(id, singleProduct, number)}
          >
            <ButtonV2 buttonName="ADD TO CART" />
          </div>
          <Link className="button" to="/cart">
            <Button buttonName="GO TO CART" />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .buttons {
    display: flex;
    margin: 5rem 0;

    @media (max-width: 1053px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .buttons-wrapper {
      display: flex;
      @media (max-width: 1053px) {
        margin-top: 2rem;
      }
    }
    .button {
      margin-left: 2rem;
    }
  }
`;
export default AddToCart;

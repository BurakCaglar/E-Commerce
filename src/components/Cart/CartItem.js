import React from "react";
import styled from "styled-components";
import AmountButtons from "../Buttons/AmountButtons";
import { FaTimes } from "react-icons/fa";
import { useCartContext } from "../../context/useCartContext";

const CartItem = ({ id, image, title, price, number }) => {
  const { removeItem, toggleNumber } = useCartContext();
  const increaseNumber = () => {
    toggleNumber(id, "increase");
  };
  const decreaseNumber = () => {
    toggleNumber(id, "decrease");
  };
  return (
    <Wrapper>
      <div className="title">
        <img src={image} alt={title} />
        <div>
          <h5 className="name">{title}</h5>
          <p className="id">#{id}</p>
          <h5 className="price-small">${price}</h5>
        </div>
      </div>
      <h5 className="price">${price}</h5>
      <AmountButtons
        number={number}
        increaseNumber={increaseNumber}
        decreaseNumber={decreaseNumber}
      />
      <h5 className="total-price">${price * number}</h5>
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeItem(id)}
      >
        <FaTimes />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .total-price {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;

  @media only screen and (max-width: 350px) {
    grid-template-columns: 200px 50px auto;
  }

  .title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 7rem;
    height: 7rem;
    border-radius: 500px;
    display: block;
    object-fit: fill;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }

  .id {
    color: var(--light-grey);
    font-size: 1.2rem;
    font-weight: 300;
    font-family: "Poppins", sans-serif;
  }

  .amount-btns {
    width: 75px;
    @media only screen and (max-width: 1000px) {
      border: none;
      button {
        font-size: 0.5rem;
      }
    }
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  .remove-btn {
    color: var(--grey);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 1.5rem;
    cursor: pointer;
    @media only screen and (max-width: 1000px) {
      font-size: 1rem;
    }
  }
  @media (min-width: 776px) {
    .total-price {
      display: block;
      color: var(--grey);
      font-size: 1.3rem;
      font-weight: 400;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1.4rem;
      font-weight: 300;
      color: var(--grey);
    }
    .name {
      font-size: 1.4rem;
      font-weight: 300;
    }
    .color {
      font-size: 0.85rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;

export default CartItem;

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
          <p className="color">color</p>
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

  .color {
    color: var(--grey-5);
    font-size: 0.75rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: var(--radius);
    }
  }

  .amount-btns {
    width: 75px;
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
  }
  @media (min-width: 776px) {
    .total-price {
      display: block;
      margin-bottom: 0;
      color: var(--grey);
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;

      font-weight: 400;
    }
    .name {
      font-size: 0.85rem;
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

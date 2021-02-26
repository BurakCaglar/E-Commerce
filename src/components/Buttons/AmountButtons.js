import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ number, increaseNumber, decreaseNumber }) => {
  return (
    <Wrapper className="amount-btns">
      <button type="button" className="amount-btn" onClick={decreaseNumber}>
        <FaMinus />
      </button>
      <h4 className="amount">{number}</h4>
      <button type="button" className="amount-btn" onClick={increaseNumber}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  border: 1px solid var(--light-grey);
  border-radius: 5rem;
  opacity: 0.7;
  h4 {
    font-size: 1.6rem;
    font-weight: 600;
  }
  .amount {
    padding: 1rem 1.7rem;
  }
  h2 {
    margin-bottom: 0;
  }

  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`;

export default AmountButtons;

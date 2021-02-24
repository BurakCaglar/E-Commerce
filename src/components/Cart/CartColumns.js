import React from "react";
import styled from "styled-components";

const CartColumns = () => {
  return (
    <Wrapper>
      <div className="content">
        <h5 style={{ marginLeft: "-25rem" }}>Product</h5>
        <h5>Price</h5>
        <h5>Amount</h5>
        <h5>Total Price</h5>
        <span></span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  margin-bottom: 3.2rem;
  @media (min-width: 776px) {
    display: block;
    .content {
      display: grid;
      grid-template-columns: 313px 1fr 1fr 1fr auto;
      justify-items: center;
      column-gap: 1rem;
      h5 {
        color: var(--light-grey);
        font-weight: 300;
      }
    }

    span {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export default CartColumns;

import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/useCartContext";
import { Link } from "react-router-dom";
import { Breadcrumb, CartContent } from "../components";

const CartPage = () => {
  const { cart } = useCartContext();

  return (
    <>
      <hr />
      {cart.length > 0 ? (
        <main className="page-100">
          <Breadcrumb title="cart" />
          <Wrapper className="page">
            <CartContent />
          </Wrapper>
        </main>
      ) : (
        <Wrapper className="page-100">
          <div className="empty">
            <h2>empty</h2>
            <Link to="/products" className="btn">
              Go To Products
            </Link>
          </div>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;

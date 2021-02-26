import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/useCartContext";
import { Link } from "react-router-dom";
import { Breadcrumb, CartContent } from "../components";
import { AiOutlineArrowLeft } from "react-icons/ai";

const CartPage = () => {
  const { cart } = useCartContext();

  return (
    <>
      {cart.length > 0 ? (
        <main className="">
          <Breadcrumb title="cart" />
          <Wrapper className="page">
            <CartContent />
          </Wrapper>
        </main>
      ) : (
        <Wrapper className="page-70">
          <div className="empty">
            <h2>Empty Basket</h2>
            <div className="go-to-products">
              <Link to="/products" className="go-to-products-info">
                <AiOutlineArrowLeft />
                <p>Go To Products</p>
              </Link>
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  .empty {
    margin-bottom: 10rem;
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
      font-size: 5rem;
      font-weight: 300;
    }
    .go-to-products {
      display: flex;
      align-items: center;
      justify-content: center;
      .go-to-products-info {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      p {
        font-size: 2rem;
        color: black;
      }
      svg {
        font-size: 2rem;
        color: black;
        margin-right: 1rem;
      }
    }
  }
`;

export default CartPage;

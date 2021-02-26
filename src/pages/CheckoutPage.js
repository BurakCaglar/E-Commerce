import React from "react";
import styled from "styled-components";
import { Breadcrumb } from "../components";

const CheckoutPage = () => {
  return (
    <main>
      <Breadcrumb title="Checkout" />
      <Wrapper className="page-70 container container-center">
        <h1>Checkout</h1>
        <form className="contact-form">
          <div className="form-element">
            <input
              type="email"
              className="form-input"
              placeholder="Enter your email"
            />
            <input
              type="email"
              className="form-input"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-element">
            <input
              type="email"
              className="form-input"
              placeholder="Enter your email"
            />
            <input
              type="email"
              className="form-input"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-element">
            <input
              type="email"
              className="form-input"
              placeholder="Enter your email"
            />
            <input
              type="email"
              className="form-input"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-element">
            <input
              type="email"
              className="form-input"
              placeholder="Enter your email"
            />
            <input
              type="email"
              className="form-input"
              placeholder="Enter your email"
            />
          </div>
        </form>
      </Wrapper>
    </main>
  );
};

export default CheckoutPage;

const Wrapper = styled.div`
  .contact-form {
    display: grid;
    grid-template-columns: repeat(2, 35rem);

    @media only screen and (max-width: 1000px) {
      text-align: center;
    }
    input {
      width: 30rem;
      height: 4.3rem;
      border-radius: 5rem;
      border: none;
      margin-right: 3rem;
      border: 1px solid var(--light-grey);
      padding-left: 3.5rem;
      @media only screen and (max-width: 1000px) {
        width: 15rem;
        height: 3.3rem;
        margin: 1rem 0 0 0;
      }
      ::placeholder {
        @media only screen and (max-width: 1000px) {
          padding-left: 2rem;
        }
      }
    }
  }
`;

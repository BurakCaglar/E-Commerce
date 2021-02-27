import React from "react";
import styled from "styled-components";
import { Breadcrumb } from "../components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button, ButtonV2 } from "../components/Buttons/Button";

const CheckoutPage = () => {
  return (
    <main>
      <Breadcrumb title="Checkout" />
      <Wrapper className="page-70 container container-center">
        <form className="contact-form">
          <div className="form-element">
            <div className="form-inside">
              <label htmlFor="first-name">
                <p>First Name</p>
              </label>
              <input
                type="text"
                name="first-name"
                className="form-input"
                placeholder="Beatrice"
              />
            </div>
            <div className="form-inside">
              <label htmlFor="last-name">
                <p>Last Name</p>
              </label>
              <input
                type="text"
                name="last-name"
                className="form-input"
                placeholder="Waddle"
              />
            </div>
          </div>
          <div className="form-element">
            <div className="form-inside">
              <label htmlFor="adress">
                <p>Adress</p>
              </label>
              <input
                type="text"
                name="adress"
                className="form-input"
                placeholder="1391 Single Street"
              />
            </div>
            <div className="form-inside">
              <label htmlFor="city">
                <p>City</p>
              </label>
              <input
                type="text"
                name="city"
                className="form-input"
                placeholder="Chicago"
              />
            </div>
          </div>
          <div className="form-element">
            <div className="form-inside">
              <label htmlFor="postal-code">
                <p>Postal Code / ZIP</p>
              </label>
              <input
                type="text"
                name="postal-code"
                className="form-input"
                placeholder="MA 02129"
              />
            </div>
            <div className="form-inside">
              <label htmlFor="phone-number">
                <p>Phone Number</p>
              </label>
              <input
                type="text"
                name="phone-number"
                className="form-input"
                placeholder="+5 781-644-3627"
              />
            </div>
          </div>
          <div className="form-element">
            <div className="form-inside">
              <label htmlFor="country">
                <p>Country</p>
              </label>
              <input
                type="text"
                name="country"
                className="form-input"
                placeholder="USA"
              />
            </div>
            <div className="form-inside">
              <label htmlFor="email">
                <p>Email</p>
              </label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="BeatriceLWaddle@rhyta.com"
              />
            </div>
          </div>
        </form>
        <div className="checkout-footer">
          <div className="back">
            <AiOutlineArrowLeft />
            <Link to="/cart">
              <p>Back</p>
            </Link>
          </div>
          <div className="checkout-buttons">
            <Link to="/products">
              <Button id="buttonv1" buttonName="CONTINUE SHOPPING" />
            </Link>
            <ButtonV2 buttonName="NEXT STEP" />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

export default CheckoutPage;

const Wrapper = styled.div`
  .contact-form {
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 1000px) {
      text-align: center;
    }

    .form-element {
      display: flex;
      flex-wrap: wrap;
      @media only screen and (max-width: 1000px) {
        justify-content: space-evenly;
        align-items: center;
      }

      .form-inside {
        display: flex;
        flex-direction: column;
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
            margin: 0 0 0 0;
            padding-left: 2rem;
          }
          ::placeholder {
          }
        }

        label {
          margin: 1rem 0;
        }
      }
    }
  }

  .checkout-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .back {
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 500px) {
        margin: auto;
        margin-top: 2rem;
      }
    }
    p {
      font-size: 1.4rem;
      color: black;
    }
    svg {
      font-size: 1.4rem;
      color: black;
      margin-right: 1rem;
    }

    .checkout-buttons {
      display: grid;
      grid-template-columns: 1fr 14rem;

      grid-gap: 3rem;
      #buttonv1 {
      }
    }
  }
`;

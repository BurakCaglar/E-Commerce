import React from "react";
import styled from "styled-components";
import img from "../assets/contact-background.jpg";
import { ButtonV2 } from "./Buttons/Button";
const Contact = () => {
  return (
    <Wrapper>
      <div className="container container-center">
        <div className="background">
          <div className="content">
            <h3>
              Subscribe to our newsletter and <br />
              receive exclusive offers every week
            </h3>
            <form className="contact-form">
              <input
                type="email"
                className="form-input"
                placeholder="Enter your email"
              />
              <ButtonV2 buttonName={"SUBSCRIBE"} />
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-bottom: 5rem;

  .background {
    background-image: url(${img});
    background-position: center;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
    height: 24.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 13rem;
    align-items: center;

    @media only screen and (max-width: 1000px) {
      display: grid;
      grid-gap: 0;
      grid-template-columns: auto;
    }

    h3 {
      font-size: 2.7rem;
      font-weight: 300;
      color: var(--white);
      @media only screen and (max-width: 1000px) {
        font-size: 1.7rem;
        text-align: center;
      }
    }

    .contact-form {
      @media only screen and (max-width: 1000px) {
        text-align: center;
      }
      input {
        width: 30rem;
        height: 4.3rem;
        border-radius: 5rem;
        border: none;
        margin-right: 3rem;
        @media only screen and (max-width: 1000px) {
          width: 15rem;
          height: 3.3rem;
          margin: 1rem 0 0 0;
        }
        ::placeholder {
          padding-left: 3.5rem;
          @media only screen and (max-width: 1000px) {
            padding-left: 2rem;
          }
        }
      }

      .submit-btn {
        background: transparent;
        background-color: var(--button-color);
        border-radius: 5rem;
      }
    }
  }
`;

export default Contact;

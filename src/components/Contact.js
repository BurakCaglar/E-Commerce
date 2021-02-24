import React from "react";
import styled from "styled-components";
import img from "../assets/contact-background.svg";
import { ButtonV2 } from "./Buttons/Button";
const Contact = () => {
  return (
    <Wrapper>
      <div className="container-center">
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
  .background {
    /* background-image: url(${img}); */
    position: relative;
    height: 24.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;

    align-items: center;

    h3 {
      font-size: 2.7rem;
      font-weight: 300;
      color: var(--white);
    }

    .contact-form {
      input {
        width: 30rem;
        height: 4.3rem;
        border-radius: 5rem;
        border: none;
        ::placeholder {
          padding-left: 3.5rem;
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

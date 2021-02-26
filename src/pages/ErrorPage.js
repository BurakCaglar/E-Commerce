import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper className="page-70">
      <section>
        <div className="error">
          <h2>CONTENT NOT FOUND</h2>
          <div className="go-to-home">
            <Link to="/" className="go-to-home-info">
              <AiOutlineArrowLeft />
              <p>Back To Home</p>
            </Link>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  .error {
    margin-bottom: 10rem;
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
      font-size: 5rem;
      font-weight: 300;
    }
    .go-to-home {
      display: flex;
      align-items: center;
      justify-content: center;
      .go-to-home-info {
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

export default ErrorPage;

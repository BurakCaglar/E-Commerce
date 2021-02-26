import React from "react";
import styled from "styled-components";
import { ButtonOnSlider } from "./Buttons/Button";
import { Link } from "react-router-dom";

const SliderHeadline = () => {
  return (
    <Wrapper>
      <div className="slider-headline">
        <h1>
          Sale of the <br /> summer <br />
          collection
        </h1>
        <Link to="/products">
          <div className="slider-btn-group">
            <ButtonOnSlider />
            <h5>SHOP NOW</h5>
          </div>
        </Link>
      </div>
    </Wrapper>
  );
};

export default SliderHeadline;

const Wrapper = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;

  @media (max-width: 1000px) {
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
  }

  @media (max-width: 500px) {
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
  }

  .slider-btn-group {
    display: flex;
    align-items: center;
    h5 {
      letter-spacing: var(--spacing);
      margin-left: 2.2rem;
      color: var(--white);
      font-size: 1.6rem;
      @media only screen and (max-width: 500px) {
        margin-left: 1rem;
      }
    }
  }

  h1 {
    font-size: 6.6.rem;
    color: var(--white);

    @media (max-width: 1500px) {
      font-size: 7rem;
    }

    @media (max-width: 1300px) {
      font-size: 6rem;
    }

    @media (max-width: 1000px) {
      font-size: 5rem;
    }

    @media (max-width: 700px) {
      font-size: 3rem;
    }

    @media (max-width: 400px) {
      font-size: 2rem;
    }
  }
`;

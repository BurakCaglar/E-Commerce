import React from "react";
import styled from "styled-components";
import { HiArrowRight } from "react-icons/hi";

export const Button = ({ buttonName }) => {
  return <Wrapper>{buttonName}</Wrapper>;
};

export const ButtonV2 = ({ buttonName }) => {
  return <WrapperV2>{buttonName}</WrapperV2>;
};

export const ButtonOnSlider = ({ buttonName }) => {
  return (
    <WrapperOnSlider>
      <div className="slider-btn">
        <HiArrowRight />
      </div>
    </WrapperOnSlider>
  );
};

const Wrapper = styled.button`
  padding: 1.5rem 3.2rem;
  border: 2px solid #d8d8d8;
  border-radius: 5rem;
  background: transparent;
  transition: var(--transition);
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    padding: 0.75rem 1.5rem;
    margin: 2rem 0 0 0;
  }

  @media only screen and (max-width: 360px) {
    padding: 0.7rem 1rem;
    margin: 1rem 0 0 0;
  }
  :hover {
    background-color: var(--button-color);
    color: var(--white);
    border: 2px solid transparent;
  }

  :focus {
    outline-style: none;
  }
`;

const WrapperV2 = styled.button`
  padding: 1.5rem 3.2rem;
  border: 2px solid transparent;
  border-radius: 5rem;
  transition: var(--transition);
  cursor: pointer;
  background-color: var(--button-color);
  color: var(--white);

  @media only screen and (max-width: 1000px) {
    padding: 0.75rem 1.5rem;
    margin: 2rem 0 0 0;
  }

  :hover {
    background: var(--white);
    color: var(--grey);
    border: 2px solid #d8d8d8;
  }

  :focus {
    outline-style: none;
  }
`;

const WrapperOnSlider = styled.div`
  .slider-btn {
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
    background-color: var(--button-color);
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 2.5rem;
      color: var(--white);
    }

    @media only screen and (max-width: 700px) {
      width: 4rem;
      height: 4rem;
      svg {
        font-size: 2.1rem;
      }
    }

    @media only screen and (max-width: 500px) {
      width: 3rem;
      height: 3rem;
      svg {
        font-size: 1.8rem;
      }
    }
  }
`;

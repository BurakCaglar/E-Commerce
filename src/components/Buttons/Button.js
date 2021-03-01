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
  border: 1px solid #d8d8d8;
  border-radius: 5rem;
  background: transparent;
  transition: var(--transition);
  cursor: pointer;
  font-family: "Poppins", sans-serif;

  @media only screen and (max-width: 1000px) {
    padding: 0.75rem 1.5rem;
  }

  @media only screen and (max-width: 360px) {
    padding: 0.5rem 0.7rem;

    font-size: 1.3rem;
  }
  :hover {
    background-color: var(--button-color);
    color: var(--white);
    border: 1px solid transparent;
  }

  :focus {
    outline-style: none;
  }

  :active {
    background-color: var(--white);
    color: var(--button-color);
  }
`;

const WrapperV2 = styled(Wrapper)`
  border: 1px solid transparent;
  color: var(--white);
  background-color: var(--button-color);

  :hover {
    background: var(--white);
    color: var(--grey);
    border: 1px solid #d8d8d8;
  }

  :active {
    background-color: var(--button-color);
    color: var(--white);
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
    transition: var(--transition);

    &:hover {
      background-color: var(--white);
      svg {
        color: var(--black);
      }
    }

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

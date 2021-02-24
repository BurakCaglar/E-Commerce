import React from "react";
import styled from "styled-components";

export const Button = ({ buttonName }) => {
  return <Wrapper>{buttonName}</Wrapper>;
};

export const ButtonV2 = ({ buttonName }) => {
  return <WrapperV2>{buttonName}</WrapperV2>;
};

const Wrapper = styled.button`
  padding: 1.5rem 3.2rem;
  border: 2px solid #d8d8d8;
  border-radius: 5rem;
  background: transparent;
  transition: var(--transition);
  cursor: pointer;
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

  :hover {
    background: var(--white);
    color: var(--grey);
    border: 2px solid #d8d8d8;
  }

  :focus {
    outline-style: none;
  }
`;

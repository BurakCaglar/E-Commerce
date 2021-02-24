import React from "react";
import styled from "styled-components";

const Button = ({ buttonName }) => {
  return <Wrapper>{buttonName}</Wrapper>;
};

export default Button;

const Wrapper = styled.button`
  padding: 1.5rem 3.2rem;
  border: 2px solid #d8d8d8;
  border-radius: 5rem;
  background: transparent;
  transition: var(--transition);
  cursor: pointer;
  :hover {
    background: var(--light-grey);
    color: var(--white);
  }

  :focus {
    outline-style: none;
  }
`;

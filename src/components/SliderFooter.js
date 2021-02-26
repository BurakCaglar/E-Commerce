import React from "react";
import styled from "styled-components";
import { SliderFooterInfo } from "../components";

const SliderFooter = () => {
  return (
    <Wrapper>
      <SliderFooterInfo />
    </Wrapper>
  );
};

export default SliderFooter;

const Wrapper = styled.div`
  height: 13.1rem;
  max-width: 138rem;
  bottom: 0;
  left: 0;
  background-color: var(--white);
  border-top-right-radius: 9rem;
  position: absolute;
  z-index: 1;

  @media (min-width: 1600px) {
    height: 13.1rem;
    width: 138rem;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

import React from "react";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <h1>404 ERROR</h1>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;

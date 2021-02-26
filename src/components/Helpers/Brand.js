import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg";

const Brand = () => {
  return (
    <Wrapper>
      <Link to="/" className="brand2">
        <img src={logo} alt="logo" />
        <p>
          <span style={{ color: "orange" }}>E</span>-Shop
        </p>
      </Link>
    </Wrapper>
  );
};

export default Brand;

const Wrapper = styled.div`
  .brand2 {
    display: flex;
    align-items: center;

    p {
      font-size: 1.5rem;
      font-weight: 300;
    }

    img {
      width: 4.5rem;
      height: 3.5rem;
      margin-right: 2rem;
    }
  }
`;

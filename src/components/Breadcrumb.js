import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
const Breadcrumb = ({ title, singleProduct }) => {
  return (
    <Wrapper>
      <div className="container-center">
        <Link to="/">
          <AiOutlineHome />
        </Link>
        {singleProduct ? <Link to="/products">/ Products</Link> : null}/ {title}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  color: var(--grey);
  font-size: 1.3rem;
  a {
    color: var(--grey);
    padding: 0.5rem;
    transition: var(--transition);
    svg {
      margin-bottom: -0.1rem;
      margin-right: -0.1rem;
    }
  }
  a:hover {
    color: var(--black);
  }
`;

export default Breadcrumb;

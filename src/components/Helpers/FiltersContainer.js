import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowUp } from "react-icons/md";

const FiltersContainer = ({ title }) => {
  return (
    <Wrapper>
      <div className="form-control">
        <div className="header">
          <h5>{title}</h5> <MdKeyboardArrowUp />
        </div>
      </div>
    </Wrapper>
  );
};

export default FiltersContainer;

const Wrapper = styled.section`
  .form-control {
    border: 2px solid #e6e6e6;
    padding: 2rem 1.3rem;
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
      letter-spacing: var(--spacing);
      font-size: 1.2rem;
      color: var(--black);
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      svg {
        font-size: 2rem;
        margin-bottom: 0.7rem;
      }
    }
  }
`;

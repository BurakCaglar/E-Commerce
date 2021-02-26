import React from "react";
import { useFilteredContext } from "../../context/useFilteredContext";
import styled from "styled-components";
const Sort = () => {
  const { filtered, sort, changeSort } = useFilteredContext();

  return (
    <Wrapper>
      <form>
        <label htmlFor="sort">Sort:</label>
        <select
          name="sort"
          id="sort"
          value={sort}
          onChange={changeSort}
          className="sort-btn"
        >
          <option value="price-lowest">Popular</option>
          <option value="price-highest">highest price</option>
          <option value="price-lowest">lowest price</option>
          <option value="name-az">a-z name</option>
          <option value="name-za">z-a name</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .sort-btn {
    border: 2px solid #d8d8d8;
    border-radius: 5rem;
    background: transparent;
    cursor: pointer;
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 1rem 0.5rem;
    :focus {
      outline-style: none;
    }
  }

  label {
    margin-right: 2rem;
    font-size: 1.2rem;
    font-weight: 300;
  }

  select {
    padding: 1rem 2rem;
  }
`;

export default Sort;

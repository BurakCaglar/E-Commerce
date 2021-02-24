import React from "react";
import { useFilteredContext } from "../../context/useFilteredContext";
import styled from "styled-components";
const Sort = () => {
  const { filtered, sort, changeSort } = useFilteredContext();
  return (
    <Wrapper>
      <p>{filtered.length} products</p>
      <form>
        <label htmlFor="sort">Sort</label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort}
          onChange={changeSort}
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
  justify-content: space-between;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--black);
      color: var(--black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--black);
      color: var(--white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export default Sort;

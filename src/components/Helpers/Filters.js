import React from "react";
import styled from "styled-components";
import { useFilteredContext } from "../../context/useFilteredContext";

const Filters = () => {
  const {
    filters: { title, price, maxPrice, minPrice },
    changeFilters,
    all,
  } = useFilteredContext();

  const nonRepeatingValues = (values, type) => {
    let nonRepeatingValues = values.map((item) => item[type]);
    return ["all", ...new Set(nonRepeatingValues)];
  };

  const categories = nonRepeatingValues(all, "category");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(event) => event.preventDefault()}>
          {/* categories */}
          <div className="form-control">
            <h5>PRODUCT TYPE</h5>
            <div className="category-list">
              <input
                key={0}
                onChange={changeFilters}
                name="category"
                id={categories[0]}
                type="radio"
                value={categories[0]}
              />
              <label htmlFor={categories[0]}>Products</label>

              {categories.slice(1, categories.length).map((item, index) => {
                return (
                  <div key={index}>
                    <input
                      key={index}
                      onChange={changeFilters}
                      name="category"
                      id={item}
                      type="radio"
                      value={item}
                    />
                    <label htmlFor={item}>{item}</label>
                  </div>
                );
              })}
            </div>
          </div>
          {/* categories filter end */}
          {/* price filter start */}
          <div className="form-control">
            <div className="price-control">
              <h5>price</h5>
              <p className="price">${Math.ceil(price)}</p>
            </div>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={Math.ceil(maxPrice)}
              value={price}
              onChange={changeFilters}
            />
          </div>
          {/* price filter end */}
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    border: 2px solid #e6e6e6;
    padding: 2.5rem 1.3rem;
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }

  .price-control {
    display: flex;
    justify-content: space-between;
  }

  .category-list {
    display: flex;
    flex-direction: column;
  }
  .search-input {
    padding: 0.5rem;
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }

  input[type="range"] {
    -webkit-appearance: none;
    background: black;
    height: 0.2rem;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border: 2px solid black;
    border-radius: 50%;
    background: white;
    margin-top: -4px;
    cursor: pointer;
    margin-left: 0.5px;
  }
`;

export default Filters;

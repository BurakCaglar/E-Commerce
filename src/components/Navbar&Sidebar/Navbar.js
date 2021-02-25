import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navlinks } from "../../utils/constants";
import CartButtons from "../Cart/CartButtons";
import { useProductsContext } from "../../context/useProductsContext";

const Nav = () => {
  const { openSidebar } = useProductsContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="brand">
            <img src={logo} alt="logo" />
            <p>
              <span style={{ color: "orange", fontSize: "1.6rem" }}>E</span>
              -Shop
            </p>
          </Link>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => openSidebar()}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {navlinks.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>
                  <h5>{text}</h5>
                </Link>
              </li>
            );
          })}
        </ul>
        <span className="cart-buttons">
          <CartButtons />
        </span>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .brand {
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
  }
  .nav-toggle {
    background: transparent;
    border: none;
    color: var(--black);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 2rem;
      }
      a {
        font-size: 1.3rem;
        font-weight: 300;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
      }
    }
  }

  .cart-buttons {
    @media (max-width: 992px) {
      display: none;
    }
  }
`;

export default Nav;

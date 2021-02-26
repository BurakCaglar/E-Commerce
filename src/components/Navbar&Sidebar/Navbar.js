import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navlinks } from "../../utils/constants";
import { NavbarSidebarButtons } from "../../components";
import { useProductsContext } from "../../context/useProductsContext";
import Brand from "../Helpers/Brand";

const Navbar = () => {
  const { openSidebar } = useProductsContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="brand">
            <Brand />
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
          <NavbarSidebarButtons />
        </span>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .active-class {
    color: blue;
  }

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
        font-size: 2rem;
        font-weight: 300;
      }

      img {
        width: 5.5rem;
        height: 4.5rem;
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
      margin-top: 1rem;
      font-size: 3.5rem;
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
        margin: 0 5rem;
      }
      a {
        font-size: 1.3rem;
        font-weight: 300;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          color: orange;
        }
        &:focus {
          color: orange;
        }
      }
    }
  }

  .cart-buttons {
    @media (max-width: 992px) {
      display: none;
    }
  }
`;

export default Navbar;

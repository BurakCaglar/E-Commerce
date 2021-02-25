import React from "react";
import logo from "../../assets/logo-white.svg";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../context/useProductsContext";
import { FaTimes } from "react-icons/fa";
import { navlinks } from "../../utils/constants";
import styled from "styled-components";
import { NavbarSidebarButtons } from "../../components";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img src={logo} alt="logo" className="logo" />
          <div className="sidebar-right">
            <div className="cart-buttons">
              <NavbarSidebarButtons />
            </div>
            <button
              className="close-btn"
              type="button"
              onClick={() => closeSidebar()}
            >
              <FaTimes />
            </button>
          </div>
        </div>
        <ul className="links">
          {navlinks.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={() => closeSidebar()}>
                  <h5>{text}</h5>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    color: var(--white);
    cursor: pointer;
    margin-top: 0.2rem;
    &:hover {
      color: var(--grey);
    }
    &:focus {
      color: var(--grey);
    }
  }

  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: right;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.6rem 1.5rem;
    color: var(--white);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    color: var(--grey);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--black);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }

  .cart-buttons {
    display: grid;
    float: right;
    svg {
      color: var(--white);
    }
  }
  .sidebar-right {
    display: flex;
  }

  h5 {
    font-size: 1.7rem;
  }
`;

export default Sidebar;

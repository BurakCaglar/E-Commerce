import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper className="container container-center">
      <div className="brand">
        <p>
          House My Brand designs clothing for the young, the old & <br />
          everyone in between – but most importantly, for the fashionable
        </p>
      </div>
      <div className="shopping">
        <h5>Shopping online</h5>
        <h6>Order Status</h6>
        <h6>Shipping and Delivery</h6>
        <h6>Returns</h6>
        <h6>Payment Options</h6>
        <h6>Contact Us</h6>
      </div>
      <div className="information">
        <h5>Information</h5>
        <h6>Gift Cards</h6>
        <h6>Find a store</h6>
        <h6>Newsletter</h6>
        <h6>Bacome a member</h6>
        <h6>Site feedback</h6>
      </div>
      <div className="contact">
        <h5>Contact</h5>
        <h6>store@uikit.com</h6>
        <h6>Hotline: +1 131 138 138</h6>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;

  h5 {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
  }

  h6 {
    font-size: 1.2rem;
    font-weight: 200;
    line-height: 2.5rem;
  }
`;

export default Footer;

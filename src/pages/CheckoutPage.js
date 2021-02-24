import React from "react";
import styled from "styled-components";
import { Breadcrumb } from "../components";

const CheckoutPage = () => {
  return (
    <main>
      <Breadcrumb value="Checkout" />
      <Wrapper className="container container-center">
        <h1>Checkout</h1>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div``;
export default CheckoutPage;

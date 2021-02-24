import React from "react";
import { Money, Payments, Quality, Shipping } from "../assets";
export const navlinks = [
  {
    id: 1,
    text: "Men",
    url: "/products",
  },
  {
    id: 2,
    text: "Women",
    url: "/products",
  },
  {
    id: 3,
    text: "Kids",
    url: "/products",
  },
];

export const whyChoose = [
  {
    id: 1,

    title: "Free Shipping",
    icon: <Shipping />,
    text:
      "All purchases over $199 are eligible for free shipping via USPS First Class Mail.",
  },
  {
    id: 2,
    icon: <Payments />,
    title: "Easy Payments",
    text:
      "All payments are processed instantly over a secure payment protocol.",
  },
  {
    id: 3,
    icon: <Money />,
    title: "Money-Back Guarantee",
    text:
      "If an item arrived damaged or you've changed your mind, you can send it back for a full refund.",
  },
  {
    id: 4,
    icon: <Quality />,
    title: "Finest Quality",
    text:
      "Designed to last, each of our products has been crafted with the finest materials.",
  },
];

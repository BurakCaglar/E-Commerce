import React from "react";
import {
  Money,
  Payments,
  Quality,
  Shipping,
  FooterImg1,
  FooterImg2,
  FooterImg3,
} from "../assets";

export const filtertitles = [
  {
    id: 1,
    title: "COLLECTION",
  },
  {
    id: 2,
    title: "SIZE",
  },
  {
    id: 3,
    title: "COLOR",
  },
];

export const sliderFooterInfo = [
  {
    id: 1,
    title: "Free Shipping",
    description: "On purchases over $199",
    icon: <FooterImg1 />,
  },
  {
    id: 2,
    title: "99% Satisfied Customers",
    description: "Our clients' opinions speak for themselves",
    icon: <FooterImg2 />,
  },
  {
    id: 3,
    title: "Originality Guaranteed",
    description: "30 days warranty for each product from our store",
    icon: <FooterImg3 />,
  },
];

export const navlinks = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "Men",
    url: "/products",
  },
  {
    id: 3,
    text: "Women",
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

export const contributors = [
  {
    id: 1,
    name: "Abdülkadir Aslan",
    url: "https://github.com/akadiraslan",
  },
  {
    id: 2,
    name: "Burak Çağlar",
    url: "https://github.com/BurakCaglar",
  },
  {
    id: 3,
    name: "Gürhan Gürsoy",
    url: "https://github.com/gurhangursoy",
  },
];

import React from "react";
import { useFilteredContext } from "../../context/useFilteredContext";
import Grid from "../Helpers/Grid";

const ProductList = () => {
  const { filtered } = useFilteredContext();
  return <Grid filtered={filtered}>product list</Grid>;
};

export default ProductList;

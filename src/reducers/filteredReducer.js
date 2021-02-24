const filteredReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      let maxPrice = action.payload.map((product) => product.price);
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        all: [...action.payload],
        filtered: [...action.payload],
        filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice },
      };

    /*  sort state update start */
    case "CHANGE_SORT":
      return {
        ...state,
        sort: action.payload,
      };
    /*  sort state update end */

    /*  sort start */
    case "SORT":
      const { sort, filtered } = state;
      let newFiltered = [...filtered];
      if (sort === "price-lowest") {
        newFiltered = newFiltered.sort((a, b) => a.price - b.price);
      }
      if (sort === "price-highest") {
        newFiltered = newFiltered.sort((a, b) => b.price - a.price);
      }
      if (sort === "name-az") {
        newFiltered = newFiltered.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
      }
      if (sort === "name-za") {
        newFiltered = newFiltered.sort((a, b) => {
          return b.title.localeCompare(a.title);
        });
      }
      return { ...state, filtered: newFiltered };
    /*  sort end */

    /* update filters state start */
    case "CHANGE_FILTERS":
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    /* update filters state end */

    /*  filters start */
    case "FILTER_PRODUCTS":
      const { all } = state;
      const { text, category, price } = state.filters;
      let tempProducts = [...all];

      /* search filter start */
      if (text) {
        tempProducts = tempProducts.filter((product) => {
          return product.title.toLowerCase().startsWith(text);
        });
      }
      /* search filter end */

      /* category filter start */
      if (category !== "all") {
        tempProducts = tempProducts.filter(
          (product) => product.category === category
        );
      }
      /* category filter end */

      /* price filter start */
      tempProducts = tempProducts.filter((product) => product.price <= price);
      /* price filter end */
      return { ...state, filtered: tempProducts };

    default:
      return state;
  }
};

export default filteredReducer;

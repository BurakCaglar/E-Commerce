const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, number, singleProduct } = action.payload;
      const tempItem = state.cart.find((i) => i.id === id);
      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id) {
            let newNumber = cartItem.number + number;
            return { ...cartItem, number: newNumber };
          } else {
            return cartItem;
          }
        });

        return { ...state, cart: tempCart };
      } else {
        const newItem = {
          id: id,
          title: singleProduct.title,
          image: singleProduct.image,
          price: singleProduct.price,
          number: number,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }

    case "REMOVE_CART_ITEM":
      const tempCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: tempCart };

    case "TOGGLE_CART_ITEM_NUMBER":
      const { newID, value } = action.payload;
      const tempCart2 = state.cart.map((item) => {
        if (item.id === newID) {
          if (value === "increase") {
            let newNumber = item.number + 1;

            return { ...item, number: newNumber };
          }
          if (value === "decrease") {
            let newNumber = item.number - 1;
            if (newNumber < 1) {
              newNumber = 1;
            }
            return { ...item, number: newNumber };
          }
        }
        return item;
      });

      return { ...state, cart: tempCart2 };

    case "CART_TOTALS_COUNT":
      const { totalProducts, totalPrice } = state.cart.reduce(
        (total, cartItem) => {
          const { number, price } = cartItem;
          total.totalProducts += number;
          total.totalPrice += price * number;
          return total;
        },
        {
          totalProducts: 0,
          totalPrice: 0,
        }
      );
      return { ...state, totalProducts, totalPrice };

    default:
      return state;
  }
};

export default cartReducer;

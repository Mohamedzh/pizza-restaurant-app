export const addToCart = (item) => {
    return {
      type: "ADDTOCART",
      payload: item,
    }
  }

  export const removeFromCart = (item) => {
    return {
      type: "REMOVEFROMCART",
      payload: item,
    }
  }

  export const setCart = (item) => {
    return {
      type: "SETCART",
      payload: item,
    }
  }

  
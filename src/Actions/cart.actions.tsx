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

  export const clearCart = (item) => {
    return {
      type: "CLEAR_CART",
      payload: item,
    }
  }

  export const incrementCart = (item) => {
    return {
      type: "INCREMENT",
      payload: item,
    }
  }

  export const decrementCart = (item) => {
    return {
      type: "DECREMENT",
      payload: item,
    }
  }
  
import { MenuType} from '../types'
export const addToCart = (item: MenuType) => {
    return {
      type: "ADDTOCART",
      payload: item,
    }
  }

  export const removeFromCart = (item: MenuType) => {
    return {
      type: "REMOVEFROMCART",
      payload: item,
    }
  }

  export const setCart = (item: MenuType) => {
    return {
      type: "SETCART",
      payload: item,
    }
  }

  export const clearCart = (item: MenuType[]) => {
    return {
      type: "CLEAR_CART",
      payload: item,
    }
  }

  export const incrementCart = (item:MenuType) => {
    return {
      type: "INCREMENT",
      payload: item,
    }
  }

  export const decrementCart = (item:MenuType) => {
    return {
      type: "DECREMENT",
      payload: item,
    }
  }
  
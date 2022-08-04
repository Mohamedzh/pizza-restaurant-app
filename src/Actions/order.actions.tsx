import {OrdersType} from '../types'
export const addOrder = (item:OrdersType) => {
    return {
      type: "ADDORDER",
      payload: item,
    }
  }


  
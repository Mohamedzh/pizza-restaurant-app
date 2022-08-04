import {OrdersActionType} from '../types'

export const addNewOrder = (item:OrdersActionType) => {
    return {
      type: "NEWORDER",
      payload: item,
    }
  }


  
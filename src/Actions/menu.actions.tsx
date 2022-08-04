import { MenuType } from "../types"

export const setMenu = (menu: MenuType) => {
    return {
      type: "SETMENU",
      payload: menu
    }
  }
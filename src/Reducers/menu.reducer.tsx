
const menuReducer = (state = [
    {
      id: 1,
      itemName: 'seafood pizza',
      ingredients: ['snail', 'fish', 'shrimp'],
      price: 140,
      orderQty: 0,
      category: 'pizza',
      popular: true,
    },
    {
      id: 2,
      itemName: 'chicken ranch pizza',
      ingredients: ['chicken', 'ranch sauce'],
      price: 120,
      orderQty: 0,
      category: 'pizza',
      popular: true,
    },
    {
      id: 3,
      itemName: 'Cheese mix pizza',
      ingredients: ['snail', 'fish', 'shrimp'],
      price: 140,
      orderQty: 0,
      category: 'pizza',
      popular: true,
    },
    {
      id: 4,
      itemName: 'chicken ranch pizza',
      ingredients: ['chicken', 'ranch sauce'],
      price: 120,
      orderQty: 0,
      category: 'pizza',
      popular: true,
    },
    {
      id: 5,
      itemName: 'beef burger',
      ingredients: ['beef', 'cheese', 'lattice'],
      price: 45,
      orderQty: 0,
      category: 'burger',
      popular: true,
    },
    {
      id: 6,
      itemName: 'beef burger',
      ingredients: ['beef', 'cheese', 'lattice'],
      price: 45,
      orderQty: 0,
      category: 'burger',
      popular: true,
    },
    {
      id: 7,
      itemName: 'beef burger',
      ingredients: ['beef', 'cheese', 'lattice'],
      price: 45,
      orderQty: 0,
      category: 'burger',
      popular: true,
    },
    {
      id: 8,
      itemName: 'beef burger',
      ingredients: ['beef', 'cheese', 'lattice'],
      price: 45,
      orderQty: 0,
      category: 'burger',
      popular: true,
    },
    {
      id: 9,
      itemName: 'espresso',
      ingredients: ['coffee'],
      price: 35,
      orderQty: 0,
      category: 'drinks',
      popular: false,
    },
    {
      id: 10,
      itemName: 'mocha',
      ingredients: ['coffee', 'chocolate'],
      price: 55,
      orderQty: 0,
      category: 'drinks',
      popular: true,
    },
    {
      id: 11,
      itemName: 'espresso',
      ingredients: ['coffee'],
      price: 35,
      orderQty: 0,
      category: 'drinks',
      popular: false,
    },
    {
      id: 12,
      itemName: 'mocha',
      ingredients: ['coffee', 'chocolate'],
      price: 55,
      orderQty: 0,
      category: 'drinks',
      popular: true,
    },
  ], action) => {
    switch (action.type) {
        case "DARK_THEME":
            return {
                background: "dark",
                textColor: "light",
                bg: "black",
                variant: "warning",
                themeBtn: "bi bi-brightness-high-fill",
                logo: "#D7DADC",

            };
        case "LIGHT_THEME":
            return {
                background: "light",
                textColor: "dark",
                bg: "white",
                variant: "primary",
                themeBtn: "bi bi-moon-stars-fill",
                logo: "black",

            };
        default:
            return state;
    }
}

export default menuReducer
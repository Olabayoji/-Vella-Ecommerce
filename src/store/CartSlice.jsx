import { createSlice } from "@reduxjs/toolkit";

const SAVEDCART = sessionStorage.getItem("myCart");
// console.log(SAVEDCART);

const defaultFormData = {
  firstName: "",
  lastName: "",
  email: "",
  tel: "",
  address: "",
  postcode: "",
  city: "",
  notes: "",
};

const initialCart = SAVEDCART
  ? JSON.parse(SAVEDCART)
  : {
      items: [],
      totalAmount: 0,
      totalPrice: 0,
      form: defaultFormData,
      checkedOut: false,
    };
const CartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existIndex = state.items.findIndex(
        (item) => item.id === product.id
      );
      let existingCartItem = state.items[existIndex];
      let updatedCartItem;
      let cart;
      if (existIndex >= 0) {
        state.totalAmount = state.totalAmount + 1;
        state.totalPrice = state.totalPrice + existingCartItem.price;

        updatedCartItem = {
          ...existingCartItem,
          qty: existingCartItem.qty + 1,
        };
        cart = [...state.items];
        cart[existIndex] = updatedCartItem;
        state.items = cart;
        // console.log(sessionStorage.getItem("myCart"));
      } else {
        // console.log("new");
        const product = action.payload;
        cart = [...state.items];
        cart.push({ ...product, qty: 1 });
        state.items = cart;
        // state.items = [...state.items, { ...product, qty: 1 }];
        state.totalAmount = state.totalAmount + 1;
        state.totalPrice = state.totalPrice + product.price;
      }
      sessionStorage.setItem(
        "myCart",
        JSON.stringify({
          items: cart,
          totalAmount: state.totalAmount,
          totalPrice: state.totalPrice,
          form: state.form,
        })
      );
    },
    deleteFromCart: (state, action) => {
      // console.log("delete");
      const product = action.payload;
      const existIndex = state.items.findIndex(
        (item) => item.id === product.id
      );
      let existingCartItem = state.items[existIndex];
      let updatedCartItem;
      let cart;
      state.totalPrice = state.totalPrice - existingCartItem.price;

      if (existingCartItem.qty === 1) {
        state.totalAmount = state.totalAmount - 1;
        state.items = state.items.filter((item) => item.id !== product.id);
      } else {
        state.totalAmount = state.totalAmount - 1;
        updatedCartItem = {
          ...existingCartItem,
          qty: existingCartItem.qty - 1,
        };
        cart = [...state.items];
        cart[existIndex] = updatedCartItem;
        state.items = cart;
      }
      sessionStorage.setItem(
        "myCart",
        JSON.stringify({
          ...state,
        })
      );
    },
    removeFromCart: (state, action) => {
      // console.log("delete");
      const product = action.payload;
      const existIndex = state.items.findIndex(
        (item) => item.id === product.id
      );

      let existingCartItem = state.items[existIndex];
      state.totalAmount = state.totalAmount - existingCartItem.qty;
      state.totalPrice =
        state.totalPrice - existingCartItem.qty * existingCartItem.price;
      state.items = state.items.filter((item) => item.id !== product.id);
      sessionStorage.setItem(
        "myCart",
        JSON.stringify({
          ...state,
        })
      );
    },
    checkout: (state, action) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalAmount = 0;
      state.checkedOut = action.payload;
      sessionStorage.setItem(
        "myCart",
        JSON.stringify({
          ...state,
          checkedOut: action.payload,
        })
      );
    },
    updateForm: (state, action) => {
      state.form = action.payload;
    },
  },
});
export const cartActions = CartSlice.actions;
export default CartSlice.reducer;

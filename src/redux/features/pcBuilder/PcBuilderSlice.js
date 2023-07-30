import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  components: [
    {
      categoryId: "CPU",
      category: "CPU",
      productName: "",
      productId: "",
      img: "",
      price: "",
    },
    {
      categoryId: "ram",
      category: "RAM",
      productName: "",
      productId: "",
      img: "",
      price: "",
    },
    {
      categoryId: "motherboard",
      category: "Motherboard",
      productName: "",
      productId: "",
      img: "",
      price: "",
    },
    {
      categoryId: "powerSupplyUnit",
      category: "Power Supply Unit",
      productName: "",
      productId: "",
      img: "",
      price: "",
    },
    {
      categoryId: "storageDevice",
      category: "Storage Device",
      productName: "",
      productId: "",
      img: "",
      price: "",
    },
    {
      categoryId: "monitor",
      category: "Monitor",
      productName: "",
      productId: "",
      img: "",
      price: "",
    },
    {
      categoryId: "others",
      category: "Others",
      productName: "",
      productId: "",
      img: "",
      price: "",
    },
  ],
  total: 0,
};

const pcBuilderSlice = createSlice({
  name: "pc-builder",
  initialState,
  reducers: {
    addToPcBuilder: (state, action) => {
      const existingIndex = state.components.findIndex(
        (component) => component.categoryId === action.payload.categoryId
      );

      if (existingIndex !== -1) {
        state.total -= state.components[existingIndex].price;
        state.components[existingIndex] = { ...action.payload };
      } else {
        state.components.push({ ...action.payload });
      }

      state.total += action.payload.price;
    },
    removeOne: (state, action) => {
      const existing = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (existing && existing.quantity > 1) {
        existing.quantity = existing.quantity - 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      }

      state.total -= action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );

      state.total -= action.payload.price * action.payload.quantity;
    },
  },
});

export const { addToPcBuilder, removeFromCart, removeOne } =
  pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "features/cartState";
export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});

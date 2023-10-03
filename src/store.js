import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/User";
import productSlice from './features/Product';
import cartSlice from './features/Cart';
import stripeSlice from './features/Stripe';
import ordersSlice from './features/Order';

export const store = configureStore({
    reducer : {
        user : userSlice,
        product : productSlice,
        cart : cartSlice,
        stripe : stripeSlice,
        order : ordersSlice
    },
})
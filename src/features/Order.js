import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from '../utils/axios';
import { getTokenFromLocalStorage} from'../utils/localStorage';

const initialState = {
    isLoading : false,
    orders : [],
    count : 0,
};


export const getAllOrders = createAsyncThunk(
    'orders/AllOrders',
    async(_, thunkAPI) => {
        try {
            const resp = await customFetch.get('/order/showAllMyOrders', {
                headers : {
                    authorization : `Bearer ${getTokenFromLocalStorage()}`,
                },
            });
            console.log(resp.data);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg)
        }
    }
)


const ordersSlice = createSlice({
    name : "AllOrders",
    initialState,
    extraReducers:(builder) => {
        builder
        .addCase(getAllOrders.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getAllOrders.fulfilled, (state, {payload}) => {
            const {orders} = payload;
            state.orders = orders;
            const {count} = payload;
            state.count = count;
        })
    }
});


export default ordersSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from '../utils/axios';
import { getTokenFromLocalStorage} from'../utils/localStorage';

const initialState = {
    isLoading  : false,
    clientSecrett : "" ,
    total : 0
};


export const createOrder = createAsyncThunk(
    'order/createOrder',
    async(data, thunkAPI) => {
        try {
            const resp = await customFetch.post('/order', data, {
                headers : {
                    authorization : `Bearer ${getTokenFromLocalStorage()}`,
                },
            })
            // const {clientSecret} = resp.data;
            console.log(resp.data);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
)

const stripeSlice = createSlice({
    name :"stripe",
    initialState,
    extraReducers:(builder) => {
        builder.
        addCase(
            createOrder.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createOrder.fulfilled, (state, {payload}) => {
            console.log(payload);
            const {total} = payload.order;
            state.total = total;
            const {clientSecret} = payload;
            state.clientSecrett = clientSecret;
            console.log(state.clientSecrett);
        })
        .addCase(createOrder.rejected, (state, {payload}) => {
            state.isLoading = false;
            toast.error(payload)
        } )
    }
});


export default stripeSlice.reducer;

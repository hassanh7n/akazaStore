import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from '../utils/axios';


const initialState = {
    isLoading : false,
    products : [],
    product : [],
    name : '',
    company : '',
    category : 'all',
    categoryOptions : ['clothing', 'jewellery', 'shoes', 'other'],
    totalProducts: 0,
    numOfPages: 1,
    page: 1,
    reviews : [],
    title : "",
    comment : "",
    rating : "",
    productId : "",
    images : []
};



export const getAllProducts = createAsyncThunk(
    'products/allProducts',
    async(_, thunkAPI) => {
        const { page, name, category, company } =
      thunkAPI.getState().product;
      let url = `/products?category=${category}&page=${page}&company=${company}`;
      
      if (name) {
        url = url + `&name=${name}`;
      }
        try {
            const resp = await customFetch.get(url);
            console.log(resp.data);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
);

export const singleProduct = createAsyncThunk(
  'product/singleProduct',
  async(id, thunkAPI) => {
    try {
      const resp = await customFetch.get(`/products/${id}`);
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
)


const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers:{
        showLoading: (state) => {
          state.isLoading = true;
        },
        hideLoading : (state) => {
          state.isLoading = false
        },
        handleChange : (state, { payload  : {name, value}}) => {
           state.page = 1
          state[name] = value;
        },
        changePage : (state, {payload}) => {
          state.page =  payload;
        },
        clearAllJobsState : () => initialState,
      },
    extraReducers:(builder) => {
        builder.
        addCase(getAllProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAllProducts.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            const {products} = payload;
            const {totalProducts} = payload;
            const {numOfPages} = payload
            // console.log(payload);
            state.totalProducts = totalProducts;
            state.numOfPages = numOfPages
            console.log(totalProducts, numOfPages);
            state.products = products;
        })
        .addCase(getAllProducts.rejected, (state, {payload}) => {
            state.isLoading = false;
            toast.error(payload)
        } )
        .addCase(singleProduct.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(singleProduct.fulfilled, (state, {payload}) => {
          state.isLoading = false;
          const {product} = payload;
          state.product = product;
          const {images} = product;
          state.images = images;
          console.log(images);
          const {reviews} = payload.product;
          state.reviews = reviews;
          console.log(reviews);
        })
        .addCase(singleProduct.rejected, (state, {payload}) => {
          state.isLoading = false;
          toast.error(payload);
        })
    }
});

export const {
    hideLoading, 
    showLoading,
    handleChange,
    clearFilters,
    changePage,
    clearAllJobsState
  } = productSlice.actions;
export default productSlice.reducer;
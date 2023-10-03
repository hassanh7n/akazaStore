import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from '../utils/axios';
import {addUserToLocalStorage, addTokenToLocalStorage,removeUserFromLocalStorage, removeTokenFromLocalStorage,getUserFromLocalStorage, getTokenFromLocalStorage} from '../utils/localStorage';

const initialState = {
    isLoading : false,
    isSidebarOpen : false,
    user : getUserFromLocalStorage() || null,
    token : [],
    Loading : false,
}


export const registerUser = createAsyncThunk(
    'user/registerUser',
    async(user, thunkAPI) => {
        try {
            const resp = await customFetch.post('/auth/register', user);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg)
        }
    }
);


export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(data, thunkAPI) => {
        try {
            const resp = await customFetch.post('/auth/login', data)
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg)
        }
    }
)

export const logoutUser = createAsyncThunk(
    'user/logoutUser',
    async(thunkAPI) => {
        try {
            const resp = await customFetch.get('/auth/logout');
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg)
        }
    }
)

export const updateUser = createAsyncThunk(
    'user/updateSimpleUser',
    async(data, thunkAPI) => {
        try {
            const resp = await customFetch.patch('/user/updateUser', data, {
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

export const updatePassword = createAsyncThunk(
    'user/updatePassword',
    async(data, thunkAPI) => {
        try {
            const resp = await customFetch.patch('/user/updateUserPassword', data, {
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


export const resetPassword = createAsyncThunk(
    'user/ResetPassword',
    async(data, thunkAPI) => {
        try {
            const resp = await customFetch.patch('/auth/resestPassword', data);
            console.log(resp.data);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg)
        }
    }
)

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers:{
        toggleSidebar : (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        logouttUser : (state, {payload}) => {
            state.user = null;
            state.isSidebarOpen = false;
            removeUserFromLocalStorage();
            if(payload){
                toast.success(payload)
            }
          },
    },
    extraReducers : (builder) => {
        builder
        .addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(registerUser.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            const {user} = payload;
            state.user = user;
            const {token} = payload;
            addUserToLocalStorage(user);
            addTokenToLocalStorage(token);
            toast.success(`Welcome ${user.name}`)
        })
        .addCase(registerUser.rejected, (state, {payload}) => {
            state.isLoading = false;
            toast.error(payload);
        })
        .addCase(loginUser.pending, (state) => {
            state.isLoading = true
        })
        .addCase(loginUser.fulfilled, (state, {payload}) =>{
            state.isLoading = false;
            const {user} = payload;
            state.user = user;
            const {token} = payload;
            addUserToLocalStorage(user);
            addTokenToLocalStorage(token);
            toast.success(`Welcome back ${user.name}`)
        })
        .addCase(logoutUser.pending, (state) => {
            state.isLoading = true
        })
        .addCase(logoutUser.fulfilled, (state) => {
            state.isLoading = false;
            console.log('LogOut userSuccessfuly');removeUserFromLocalStorage();
            removeTokenFromLocalStorage();
        })
        .addCase(logoutUser.rejected, (state, {payload}) => {
            state.isLoading = false;
            toast.error(payload)
        })
        .addCase(updateUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(updateUser.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            toast.success("user updated")
        })
        .addCase(updateUser.rejected, (state, {payload}) => {
            state.isLoading = false;
            toast.error(payload);
        })
        .addCase(updatePassword.pending, (state) => {
            state.Loading = true;
        })
        .addCase(updatePassword.fulfilled, (state, {payload}) => {
            state.Loading = false;
            console.log(payload);
            toast.success("Password update successfuly")
        })
        .addCase(updatePassword.rejected, (state, {payload}) => {
            state.Loading = false;
            toast.error(payload);
        })
        .addCase(resetPassword.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(resetPassword.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            const {user} = payload;
            const {token} = payload;
            state.user = user;
            addUserToLocalStorage(user);
            addTokenToLocalStorage(token);
            toast.success(`Welcome back ${user.name}`)
        })
        .addCase(resetPassword.rejected, (state, {payload}) => {
            state.isLoading = false;
            toast.error(payload);
        })
    }
});




export const { toggleSidebar, logouttUser} = userSlice.actions;
export default userSlice.reducer;
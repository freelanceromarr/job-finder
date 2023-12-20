import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    filter: 'all',
    sorting: 'default',
    search: '',
}
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filter: (state, action)=>{
            state.filter = action.payload;
        },
        sorting: (state, action)=>{
            state.sorting = action.payload;
        },
        search: (state, action)=>{
            state.search = action.payload;
        }
    }
})

export const { filter, sorting, search}= filterSlice.actions;
export default filterSlice.reducer;
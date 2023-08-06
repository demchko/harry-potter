import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const addFavSlice = createSlice({
    name: 'addFavSlice',
    initialState,
    reducers:{
        addItem: (state, action) => {
            const exists = state.find(p => p.id === action.payload.id);
            if(exists){
                return state.filter(item => item.id !== action.payload.id)
            }
            else{
                state.push(action.payload);
            }
        }
    }
})

export const {addItem} = addFavSlice.actions;
export const sliceReducer = addFavSlice.reducer;

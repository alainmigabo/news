import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    article: {},
}

export const holderSlice = createSlice({
    name: 'h',
    initialState,
    reducers:  {
        holdArticle: (state,action)=>{
            state.article = action.payload;
        },
    },
})

export const { holdArticle } = holderSlice.actions
export default holderSlice.reducer;
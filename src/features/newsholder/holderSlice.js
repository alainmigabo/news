import {createSlice} from '@reduxjs/toolkit';

const initialstate = {
    article: {},
}

export const holderSlice = createSlice({
    name: 'h',
    initialstate,
    reducers:  {
        holdArticle: (state,action)=>{
            state.article = action.payload;
        },
    },
})

export const { holdArticle } = holderSlice.actions
export default holderSlice.reducer;
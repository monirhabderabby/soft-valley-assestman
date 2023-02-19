import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterObject: {
        search: "",
    },
};

const leadSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setSearch: (state = initialState, action) => {
            state.filterObject.search = action.payload;
        },
    },
});

export const { setSearch } = leadSlice.actions;
export default leadSlice.reducer;

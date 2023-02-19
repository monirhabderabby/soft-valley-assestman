import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterObject: {
        search: "",
        contacted_date_from: "",
        contacted_date_to: "",
    },
    tableData: [],
    isReadyFilter: false,
};

const leadSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setSearch: (state = initialState, action) => {
            state.filterObject.search = action.payload;
        },
        setTableData: (state = initialState, action) => {
            state.tableData = action.payload;
        },
        setContactedDate: (state = initialState, action) => {
            state.filterObject.contacted_date_from = action.payload[0];
            state.filterObject.contacted_date_to = action.payload[1];
        },
        resetFilter: (state = initialState, action) => {
            state.filterObject.search = "";
            state.filterObject.contacted_date_from = "";
            state.filterObject.contacted_date_to = "";
        },
    },
});

export const { setSearch, setTableData, setContactedDate, resetFilter } = leadSlice.actions;
export default leadSlice.reducer;

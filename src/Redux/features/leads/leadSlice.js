import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterObject: {
        search: "",
        contacted_date_from: null,
        contacted_date_to: null,
        lead_status_id: [],
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
        setStatus: (state = initialState, action) => {
            state.filterObject.lead_status_id = [action.payload];
        },
        resetFilter: (state = initialState, action) => {
            state.filterObject.search = "";
            state.filterObject.contacted_date_from = null;
            state.filterObject.contacted_date_to = null;
            state.filterObject.lead_status_id = [];
            state.isReadyFilter = true;
        },
        fetchFilter: (state = initialState, action) => {
            state.isReadyFilter = true;
        },
        setFalseReadyFilter: (state = initialState, action) => {
            state.isReadyFilter = false;
        },
    },
});

export const { setSearch, setTableData, setContactedDate, resetFilter, fetchFilter, setFalseReadyFilter, setStatus } = leadSlice.actions;
export default leadSlice.reducer;

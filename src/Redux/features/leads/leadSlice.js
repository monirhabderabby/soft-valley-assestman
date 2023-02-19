import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterObject: {
        search: "",
        contacted_date_from: "",
        contacted_date_to: "",
        lead_status_id: [],
        source_id: [],
        user_id: [],
    },
    tableData: [],
    isReadyFilter: false,
    totalPage: 1,
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
        setSources: (state = initialState, action) => {
            state.filterObject.source_id = [action.payload];
        },
        setAssignees: (state = initialState, action) => {
            state.filterObject.user_id = [action.payload];
        },
        resetFilter: (state = initialState, action) => {
            state.filterObject.search = "";
            state.filterObject.contacted_date_from = "";
            state.filterObject.contacted_date_to = "";
            state.filterObject.lead_status_id = [];
            state.filterObject.source_id = [];
            state.filterObject.user_id = [];
            state.isReadyFilter = true;
        },
        fetchFilter: (state = initialState, action) => {
            state.isReadyFilter = true;
        },
        setFalseReadyFilter: (state = initialState, action) => {
            state.isReadyFilter = false;
        },
        setTotalPage: (state = initialState, action) => {
            state.totalPage = action.payload;
        },
    },
});

export const {
    setSearch,
    setTableData,
    setContactedDate,
    resetFilter,
    fetchFilter,
    setFalseReadyFilter,
    setStatus,
    setSources,
    setAssignees,
    setTotalPage,
} = leadSlice.actions;
export default leadSlice.reducer;

import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../../../../Redux/features/leads/leadSlice";

export const SearchBoxForLeadsTable = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(state => state.leads?.filterObject?.search);
    const handleSearchTerm = e => {
        const value = e.target.value;
        dispatch(setSearch(value));
    };
    return (
        <Box
            sx={{
                width: "100%",
                bgcolor: "#DCDCDC",
                p: "10px",
            }}
        >
            <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search in leads table"
                    inputProps={{ "aria-label": "Search in leads table" }}
                    value={searchTerm || ""}
                    onChange={handleSearchTerm}
                />
                <IconButton type="button" sx={{ p: "10px" }} aria-label="search" disabled={true}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Box>
    );
};

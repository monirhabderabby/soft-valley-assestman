import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../../Redux/features/leads/leadSlice";

export const FilterContainer = () => {
    const dispatch = useDispatch();
    const [age, setAge] = useState("");

    const handleChange = event => {
        setAge(event.target.value);
    };

    const handleSearchTerm = e => {
        const value = e.target.value;
        dispatch(setSearch(value));
    };
    return (
        <>
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
                        onChange={handleSearchTerm}
                    />
                    <IconButton type="button" sx={{ p: "10px" }} aria-label="search" disabled={true}>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Box>
            {/* Statuses */}
            <Box
                sx={{
                    width: "100%",
                    py: "10px",
                }}
            >
                <FormControl sx={{ minWidth: 200 }} size="small">
                    <InputLabel id="demo-select-small">Statuses</InputLabel>
                    <Select labelId="demo-select-small" id="demo-select-small" value={age} label="Statuses" onChange={handleChange}>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </>
    );
};

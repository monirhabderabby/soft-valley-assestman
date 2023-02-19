import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ContactedDatePicker from "./ContactedDatePicker";
import { FilterControllerButtons } from "./FilterControllerButtons";
import { SearchBoxForLeadsTable } from "./SearchBoxForLeadsTable";

export const FilterContainer = () => {
    const [age, setAge] = useState("");

    const handleChange = event => {
        setAge(event.target.value);
    };

    return (
        <>
            <SearchBoxForLeadsTable />
            {/* Statuses */}
            <Box
                sx={{
                    width: "100%",
                    py: "10px",
                    display: "flex",
                    columnGap: "10px",
                    justifyContent: "space-between",
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
                <ContactedDatePicker />
                <FilterControllerButtons />
            </Box>
        </>
    );
};

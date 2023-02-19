import { Box } from "@mui/system";
import React from "react";
import { StatusSelector } from "../../../../shared/Selectors/StatusSelector";
import ContactedDatePicker from "./ContactedDatePicker";
import { FilterControllerButtons } from "./FilterControllerButtons";
import { SearchBoxForLeadsTable } from "./SearchBoxForLeadsTable";

export const FilterContainer = () => {
    return (
        <>
            <SearchBoxForLeadsTable />
            {/* Statuses */}
            <Box
                sx={{
                    width: "100%",
                    py: "10px",
                    display: "flex",
                    columnGap: "20px",
                    justifyContent: "end",
                }}
            >
                <StatusSelector />
                <ContactedDatePicker />
                <FilterControllerButtons />
            </Box>
        </>
    );
};

import { Box } from "@mui/system";
import React from "react";
import { AssigneesSelector } from "../../../../shared/Selectors/AssigneesSelector";
import { SourcesSelector } from "../../../../shared/Selectors/SourcesSelector";
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
                    py: "15px",
                    display: "flex",
                    columnGap: "25px",
                    justifyContent: "end",
                }}
            >
                <StatusSelector />
                <SourcesSelector />
                <AssigneesSelector />
                <ContactedDatePicker />
                <FilterControllerButtons />
            </Box>
        </>
    );
};

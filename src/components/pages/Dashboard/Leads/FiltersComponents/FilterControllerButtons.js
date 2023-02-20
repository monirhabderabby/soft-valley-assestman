// Configuration
import React, { useEffect, useState } from "react";

// Third pary packgaes
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilter, resetFilter } from "../../../../../Redux/features/leads/leadSlice";

export const FilterControllerButtons = () => {
    // Top Level State
    const [filterisOn, setFilterIsOn] = useState(false);
    const dispatch = useDispatch();
    const isFilterStateCarrySomething = useSelector(state => state.leads?.filterObject);

    // Function declaration
    const handleReset = () => {
        dispatch(resetFilter());
    };

    const handleFilter = () => {
        dispatch(fetchFilter());
    };

    useEffect(() => {
        if (
            isFilterStateCarrySomething?.search !== "" ||
            isFilterStateCarrySomething?.contacted_date_from !== "" ||
            isFilterStateCarrySomething?.contacted_date_to !== "" ||
            isFilterStateCarrySomething?.lead_status_id?.length !== 0 ||
            isFilterStateCarrySomething?.source_id?.length !== 0 ||
            isFilterStateCarrySomething?.user_id?.length !== 0
        ) {
            setFilterIsOn(true);
        } else {
            setFilterIsOn(false);
        }
    }, [isFilterStateCarrySomething]);

    return (
        <div className="flex gap-x-[10px] items-center">
            <Button
                variant="contained"
                size="medium"
                sx={{
                    px: "30px",
                    boxShadow: "none",
                    height: "41px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                disabled={!filterisOn}
                onClick={handleFilter}
            >
                Filter
            </Button>
            <Button
                variant="outlined"
                size="medium"
                sx={{
                    px: "30px",
                    boxShadow: "none",
                    height: "41px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                disabled={!filterisOn}
                onClick={handleReset}
            >
                Reset Filter
            </Button>
        </div>
    );
};

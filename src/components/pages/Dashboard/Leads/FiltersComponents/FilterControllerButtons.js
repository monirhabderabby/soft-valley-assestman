import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../../../../../Redux/features/leads/leadSlice";

export const FilterControllerButtons = () => {
    const [filterisOn, setFilterIsOn] = useState(false);
    const dispatch = useDispatch();
    const isFilterStateCarrySomething = useSelector(state => state.leads?.filterObject);

    const handleReset = () => {
        dispatch(resetFilter());
    };

    useEffect(() => {
        if (
            isFilterStateCarrySomething?.search !== "" ||
            isFilterStateCarrySomething?.contacted_date_from !== "" ||
            isFilterStateCarrySomething?.contacted_date_to !== ""
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
                }}
                disabled={!filterisOn}
            >
                Filter
            </Button>
            <Button
                variant="outlined"
                size="medium"
                sx={{
                    px: "30px",
                    boxShadow: "none",
                }}
                disabled={!filterisOn}
                onClick={handleReset}
            >
                Reset Filter
            </Button>
        </div>
    );
};
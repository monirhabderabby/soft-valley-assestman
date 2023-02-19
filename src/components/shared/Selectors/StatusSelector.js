import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchStatusQuery } from "../../../Redux/features/leads/leadsApi";
import { setStatus } from "../../../Redux/features/leads/leadSlice";

export const StatusSelector = () => {
    const [value, setValue] = useState([0]);
    const dispatch = useDispatch();
    const status = useSelector(state => state.leads?.filterObject?.lead_status_id);
    const { data } = useFetchStatusQuery();
    const { data: statusesData } = data || {};

    const handleChange = e => {
        const value = e.target.value;
        dispatch(setStatus(value));
    };

    useEffect(() => {
        if (status?.length !== 0) {
            setValue(status);
        } else {
            setValue([0]);
        }
    }, [status]);
    return (
        <FormControl sx={{ minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small">Statuses</InputLabel>
            <Select labelId="demo-select-small" id="demo-select-small" value={value[0]} label="Statuses" onChange={handleChange}>
                <MenuItem value={0}>Select Status</MenuItem>
                {statusesData?.map(status => {
                    return (
                        <MenuItem key={status?.id} value={status?.id} name={status?.name}>
                            {status?.name}
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
};

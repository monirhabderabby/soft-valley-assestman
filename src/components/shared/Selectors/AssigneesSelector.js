import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchAssigneeQuery } from "../../../Redux/features/leads/leadsApi";
import { setAssignees } from "../../../Redux/features/leads/leadSlice";

export const AssigneesSelector = () => {
    const [value, setValue] = useState([0]);
    const dispatch = useDispatch();
    const assigness = useSelector(state => state.leads?.filterObject?.user_id);
    const { data } = useFetchAssigneeQuery();
    const { data: assignessesData } = data || {};

    const handleChange = e => {
        const value = e.target.value;
        dispatch(setAssignees(value));
    };

    useEffect(() => {
        if (assigness?.length !== 0) {
            setValue(assigness);
        } else {
            setValue([0]);
        }
    }, [assigness]);
    return (
        <FormControl sx={{ minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small">assignesses</InputLabel>
            <Select labelId="demo-select-small" id="demo-select-small" value={value[0]} label="assignesses" onChange={handleChange}>
                <MenuItem value={0}>Select assigness</MenuItem>
                {assignessesData?.map(assigness => {
                    return (
                        <MenuItem key={assigness?.id} value={assigness?.id} name={assigness?.name}>
                            {assigness?.name}
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
};

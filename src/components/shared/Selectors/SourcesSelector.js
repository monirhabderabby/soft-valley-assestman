import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchSourcesQuery } from "../../../Redux/features/leads/leadsApi";
import { setSources } from "../../../Redux/features/leads/leadSlice";

export const SourcesSelector = () => {
    const [value, setValue] = useState([0]);
    const dispatch = useDispatch();
    const sources = useSelector(state => state.leads?.filterObject?.source_id);
    const { data } = useFetchSourcesQuery();
    const { data: sourcesesData } = data || {};

    const handleChange = e => {
        const value = e.target.value;
        dispatch(setSources(value));
    };

    useEffect(() => {
        if (sources?.length !== 0) {
            setValue(sources);
        } else {
            setValue([0]);
        }
    }, [sources]);
    return (
        <FormControl sx={{ minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small">sourceses</InputLabel>
            <Select labelId="demo-select-small" id="demo-select-small" value={value[0]} label="sourceses" onChange={handleChange}>
                <MenuItem value={0}>Select sources</MenuItem>
                {sourcesesData?.map(sources => {
                    return (
                        <MenuItem key={sources?.id} value={sources?.id} name={sources?.name}>
                            {sources?.name}
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
};

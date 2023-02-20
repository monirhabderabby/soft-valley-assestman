import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchAssigneeQuery } from "../../../Redux/features/leads/leadsApi";
import { setAssignees } from "../../../Redux/features/leads/leadSlice";
import nameJoinerFromArrayofID from "../../../util/nameJoinerFromArrayodID";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export const AssigneesSelector = () => {
    const values = useSelector(state => state.leads?.filterObject?.user_id);
    const dispatch = useDispatch();

    const { data } = useFetchAssigneeQuery();
    const { data: assigneesData } = data || {};

    const handleChange = event => {
        const {
            target: { value },
        } = event;

        const flattemValue = value.flat(6);

        dispatch(setAssignees(typeof flattemValue === "string" ? flattemValue.split(",") : flattemValue));
    };

    return (
        <div>
            <FormControl sx={{ width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">Assignees</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={values}
                    onChange={handleChange}
                    input={<OutlinedInput label="Assignees" />}
                    renderValue={selected => {
                        return nameJoinerFromArrayofID(selected, assigneesData);
                    }}
                    MenuProps={MenuProps}
                    size="small"
                >
                    {assigneesData?.map(name => (
                        <MenuItem key={name.id} value={name.id} size="small">
                            <Checkbox checked={values.indexOf(name.id) > -1} />
                            <ListItemText primary={name.name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

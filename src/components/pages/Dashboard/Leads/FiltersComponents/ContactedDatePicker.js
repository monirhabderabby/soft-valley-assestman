import * as React from "react";
import { useEffect } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setContactedDate } from "../../../../../Redux/features/leads/leadSlice";

export default function ContactedDatePicker() {
    const [value, setValue] = React.useState([null, null]);
    const dispatch = useDispatch();

    console.log(moment(value[0]?.$d).format());

    useEffect(() => {
        if (value !== null) {
            dispatch(setContactedDate([moment(value[0]?.$d).format(), moment(value[1]?.$d).format()]));
        }
    }, [value, dispatch]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} localeText={{ start: "From", end: "To" }}>
            <DateRangePicker
                size="small"
                value={value}
                onChange={newValue => {
                    setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                    <React.Fragment>
                        <TextField {...startProps} size="small" />
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField {...endProps} size="small" />
                    </React.Fragment>
                )}
            />
        </LocalizationProvider>
    );
}

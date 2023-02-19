import { DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setContactedDate } from "../../../../../Redux/features/leads/leadSlice";

export default function ContactedDatePicker() {
    const [dateRange, setDateRange] = useState([null, null]);
    const dispatch = useDispatch();
    const filterObject = useSelector(state => state.leads?.filterObject);
    const { contacted_date_from, contacted_date_to } = filterObject || {};
    useEffect(() => {
        if (dateRange[0] !== null && dateRange[1] !== null) {
            dispatch(setContactedDate(dateRange));
        }
    }, [dateRange, dispatch]);

    return (
        <>
            <DatePicker.RangePicker
                placeholder={["Contact start", "Contact end"]}
                value={[contacted_date_from, contacted_date_to]}
                onChange={setDateRange}
            />
        </>
    );
}

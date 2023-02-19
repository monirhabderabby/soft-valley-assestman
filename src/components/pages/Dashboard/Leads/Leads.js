import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchLeadMutation } from "../../../../Redux/features/leads/leadsApi";
import { setFalseReadyFilter, setTableData } from "../../../../Redux/features/leads/leadSlice";
import { FilterContainer } from "./FiltersComponents/FilterContainer";

export const Leads = () => {
    const [rows, setRows] = useState([]);
    const dispatch = useDispatch();
    const leadsData = useSelector(state => state?.leads);
    const { tableData, filterObject, isReadyFilter } = leadsData || {};

    // Redux API
    const [fetchLead, { data: leads, isSuccess }] = useFetchLeadMutation();

    useEffect(() => {
        if (isReadyFilter) {
            fetchLead(filterObject);
            console.log(filterObject?.contacted_date_from);

            setTimeout(() => {
                dispatch(setFalseReadyFilter());
            }, 1000);
        }
    }, [fetchLead, isReadyFilter, dispatch]);

    useEffect(() => {
        fetchLead({
            search: "",
            lead_status_id: [],
            source_id: [],
            user_id: [],
            contacted_date_from: [],
            contacted_date_to: [],
        });
    }, [fetchLead]);

    const columns = [
        { field: "name", headerName: "Lead Name", width: 200 },
        { field: "phone", headerName: "Phone", width: 200 },
        { field: "followupDate", headerName: "Followup Date", width: 200 },
        { field: "lastNote", headerName: "Last note", width: 200 },
        { field: "email", headerName: "Email", width: 220 },
        { field: "preferedCountry", headerName: "Preferred Countries", width: 200 },
        { field: "status", headerName: "Status", width: 200 },
        { field: "source", headerName: "Source", width: 200 },
    ];

    useEffect(() => {
        if (tableData?.length > 0) {
            const result = tableData?.map(row => ({
                id: row.id,
                name: row.name || "",
                phone: row.phone || "",
                followupDate: row.followup_date || "",
                lastNote: row.lead_notes[0]?.note,
                email: row.email || "",
                preferedCountry: row.country.name,
                status: row.lead_status.name,
                source: row.source.name,
            }));

            setRows(result);
        }
    }, [tableData]);

    useEffect(() => {
        if (isSuccess) {
            const tableData = leads?.data?.data;
            dispatch(setTableData(tableData));
        }
    }, [isSuccess, dispatch, leads?.data?.data]);

    return (
        <div>
            <FilterContainer />

            <DataGrid autoHeight rows={rows} columns={columns} />
        </div>
    );
};

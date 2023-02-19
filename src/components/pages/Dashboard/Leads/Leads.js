import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useFetchLeadMutation } from "../../../../Redux/features/leads/leadsApi";
import { FilterContainer } from "./FilterContainer";

export const Leads = () => {
    const [rows, setRows] = useState([]);
    const [fetchLead, { data: leads }] = useFetchLeadMutation();
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
    const tableData = leads?.data?.data;

    const columns = [
        { field: "name", headerName: "Lead Name", width: 150 },
        { field: "phone", headerName: "Phone", width: 150 },
        { field: "followupDate", headerName: "Followup Date", width: 150 },
        { field: "email", headerName: "Email", width: 220 },
        { field: "preferedCountry", headerName: "Preferred Countries", width: 150 },
    ];

    useEffect(() => {
        if (tableData?.length > 0) {
            const result = tableData?.map(row => ({
                id: row.id,
                name: row.name || "",
                phone: row.phone || "",
                followupDate: row.followup_date || "",
                email: row.email || "",
                preferedCountry: row.country.name,
            }));

            setRows(result);
        }
    }, [tableData]);

    return (
        <div>
            <FilterContainer />
            <DataGrid autoHeight rows={rows} columns={columns} />
        </div>
    );
};

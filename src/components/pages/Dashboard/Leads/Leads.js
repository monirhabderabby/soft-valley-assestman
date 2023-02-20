// Configuration
import React, { useEffect, useState } from "react";

// Third party libraries
import { Pagination } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";

// Components
import { useFetchLeadMutation } from "../../../../Redux/features/leads/leadsApi";
import { setFalseReadyFilter, setTableData, setTotalPage } from "../../../../Redux/features/leads/leadSlice";
import { FilterContainer } from "./FiltersComponents/FilterContainer";
import { GroupAvatar } from "./FiltersComponents/GroupAvatar";

export const Leads = () => {
    // Top level state
    const [currentPage, setCurrentPage] = useState(1);
    const [rows, setRows] = useState([]);
    const dispatch = useDispatch();
    const leadsData = useSelector(state => state?.leads);
    const { tableData, filterObject, isReadyFilter, totalPage } = leadsData || {};

    // Redux API
    const [fetchLead, { data: leads, isSuccess }] = useFetchLeadMutation();

    useEffect(() => {
        if (leads?.data?.total > 10) {
            dispatch(setTotalPage(Math.ceil(leads?.data?.total / 10)));
        }
    }, [dispatch]);

    useEffect(() => {
        if (isReadyFilter || currentPage) {
            fetchLead({
                data: filterObject,
                page: currentPage,
            });

            setTimeout(() => {
                dispatch(setFalseReadyFilter());
            }, 1000);
        }
    }, [fetchLead, isReadyFilter, dispatch, currentPage]);

    useEffect(() => {
        fetchLead({
            data: {
                search: "",
                lead_status_id: [],
                source_id: [],
                user_id: [],
                contacted_date_from: [],
                contacted_date_to: [],
            },
            page: 1,
        });
    }, [fetchLead]);

    const columns = [
        { field: "name", headerName: "Lead Name", width: 200 },
        { field: "phone", headerName: "Phone", width: 200 },
        { field: "followupDate", headerName: "Followup Date", width: 200 },
        { field: "lastNote", headerName: "Last note", width: 200 },
        {
            field: "assigned",
            headerName: "Assigned",
            width: 200,
            renderCell: params => <GroupAvatar photos={params.row.assigned} />,
        },
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
                assigned: row.lead_assignees?.map(item => item.image),
                email: row.email || "",
                preferedCountry: row.country.name,
                status: row.lead_status.name,
                source: row.source.name,
            }));

            console.log(tableData);

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

            <DataGrid autoHeight rows={rows} columns={columns} hideFooterPagination pageSize={10} />
            <div className="my-[20px] flex justify-end">
                <Pagination count={totalPage} variant="outlined" shape="rounded" onChange={(e, newPage) => setCurrentPage(newPage)} />
            </div>
        </div>
    );
};

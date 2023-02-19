import apiSlice from "../../api/apiSlice";

export const leadsApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        fetchLead: builder.mutation({
            query: data => ({
                url: "/api/admin/lead/list",
                method: "POST",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("SVToken")}`,
                },
                body: data,
            }),
        }),
        fetchStatus: builder.query({
            query: () => ({
                url: `/api/admin/base/lead-status`,
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("SVToken")}`,
                },
            }),
        }),
        fetchAssignee: builder.query({
            query: () => ({
                url: "/api/admin/base/assignee",
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("SVToken")}`,
                },
            }),
        }),
        fetchSources: builder.query({
            query: () => ({
                url: "/api/admin/base/source",
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("SVToken")}`,
                },
            }),
        }),
    }),
});

export const { useFetchLeadMutation, useFetchStatusQuery, useFetchAssigneeQuery, useFetchSourcesQuery } = leadsApi;

import apiSlice from "../../api/apiSlice";

export const leadsApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getLeads: builder.query({
            query: () => ({
                url: "/api/admin/lead/list",
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("SVToken")}`,
                },
            }),
        }),
    }),
});

export const { useGetLeadsQuery } = leadsApi;

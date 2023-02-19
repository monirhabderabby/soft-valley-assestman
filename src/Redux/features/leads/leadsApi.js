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
    }),
});

export const { useFetchLeadMutation } = leadsApi;

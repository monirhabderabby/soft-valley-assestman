import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://crm.softvalley.sveducrm.com",
    }),
    endpoints: builder => ({}),
});

export default apiSlice;

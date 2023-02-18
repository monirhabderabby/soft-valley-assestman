import apiSlice from "../../api/apiSlice";

export const text = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: data => ({
                url: "/api/admin/login",
                body: data,
            }),
        }),
    }),
});

export const { useLoginMutation } = text;

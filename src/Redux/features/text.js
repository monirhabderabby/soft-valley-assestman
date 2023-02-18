import apiSlice from "../api/apiSlice";

export const text = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTodos: builder.query({
            query: () => ({
                url: "/todos/1",
            }),
        }),
    }),
});

export const { useGetTodosQuery } = text;

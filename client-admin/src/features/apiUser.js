import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/admin" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => ({
        url: "/register",
        method: "POST",
        body: user,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    login: builder.mutation({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
  }),
});
export const { useRegisterMutation, useLoginMutation, useGetUsersQuery } =
  usersApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/users" }),
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
    settings: builder.mutation({
      query: (access_token) => ({
        url: "/",
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          access_token,
        },
      }),
    }),
    change: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "PUT",
        body,
        headers: {
          access_token: localStorage.access_token,
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useSettingsMutation,
  useChangeMutation,
} = usersApi;

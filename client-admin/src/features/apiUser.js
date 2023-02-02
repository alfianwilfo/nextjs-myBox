import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/admin" }),
  tagTypes: ["Users"],
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
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Users"],
    }),
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),
    updatePassword: builder.mutation({
      query: (data) => ({
        url: `/password/${data.id}`,
        method: "PATCH",
        body: data.input,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});
export const {
  useRegisterMutation,
  useLoginMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdatePasswordMutation,
} = usersApi;

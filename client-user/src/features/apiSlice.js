import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (offset) => `products/?page=${offset}`,
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
    addCart: builder.mutation({
      query: (body) => ({
        url: "cartS",
        method: "POST",
        body,
        headers: {
          access_token: localStorage.access_token,
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    myCart: builder.mutation({
      query: (body) => ({
        url: "cartS",
        method: "POST",
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
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddCartMutation,
  useMyCartQuery,
  useFilterMutation,
} = productsApi;

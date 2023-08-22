import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http:192.168.115.44:3009/api/" }),
  tagTypes: ["user"],
  endpoints: (builder) => ({}),
});

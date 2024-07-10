import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FormValue } from "../../../types";

export const apiService = createApi ({
  reducerPath: "api",
  tagTypes: ["Users"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "users?page=1&per_page=8",
      }),
      providesTags: () => [
        { type: "Users" },
      ],
    }),
    registerNewUser: builder.mutation({
      query: ({ newUser }: {newUser: FormValue}) => ({
        url: "register",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: () => [
        { type: "Users" },
      ],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useRegisterNewUserMutation,
} = apiService;

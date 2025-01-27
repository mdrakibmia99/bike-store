import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    signUp: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
        method: "POST",
        body: userInfo,
      }),
    }),
    logOut: builder.mutation({
      query: (info) => ({
        url: "/auth/logout",
        method: "POST",
        body:info
      }),
    }),
  }),
});

export const {useLoginMutation,useLogOutMutation,useSignUpMutation}=authApi

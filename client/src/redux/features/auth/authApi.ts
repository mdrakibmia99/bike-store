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
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/auth/update-profile",
        method: "PATCH",
        body:data
      }),
    }),
    authMe: builder.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
    }),
  }),
});

export const {useLoginMutation,useLogOutMutation,useSignUpMutation,useAuthMeQuery,useUpdateProfileMutation}=authApi

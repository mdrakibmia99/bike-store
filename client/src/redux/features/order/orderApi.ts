import { baseApi } from "@/redux/api/baseApi";
import {  IOrderResponse, TResponseRedux } from "@/types/types";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allOrders: builder.query({
      query: () => ({
        url: `/orders`,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<IOrderResponse[] | []>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["order"],
    }),
    specificProducts: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      
    }),
    createOrder: builder.mutation({
      query: (data) => ({
        url: `/orders`,
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["product"],
    }),
    verifyOrder: builder.mutation({
        query: (data) => (console.log(data,"check"),
            {
          url: `/orders/verify`,
          method: "PATCH",
          body: data,
        }),
        invalidatesTags: ["order"],
      }),

    // updateProduct: builder.mutation({
    //   query: ({ data, id }) => ({
    //     url: `/products/${id}`,
    //     method: "PUT",
    //     body: data,
    //   }),

    //   invalidatesTags: ["product"],
    // }),

  }),
});

export const {
useCreateOrderMutation,
useAllOrdersQuery,
useVerifyOrderMutation

} = orderApi;

import { baseApi } from "@/redux/api/baseApi";
import { IBikeResponse, TResponseRedux } from "@/types/types";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allOrders: builder.query({
      query: () => ({
        url: `/orders`,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<IBikeResponse[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["product"],
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
useCreateOrderMutation
} = orderApi;

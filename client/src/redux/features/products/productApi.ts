import { baseApi } from "@/redux/api/baseApi";
import { IBikeResponse, TResponseRedux } from "@/types/types";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allProducts: builder.query({
      query: () => ({
        url: `/products`,
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
    createProduct: builder.mutation({
      query: (data) => ({
        url: `/products`,
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: ({ data, id }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: data,
      }),

      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useAllProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} = productApi;

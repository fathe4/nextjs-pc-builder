import { api } from "@/redux/api/apiSlice";

const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;

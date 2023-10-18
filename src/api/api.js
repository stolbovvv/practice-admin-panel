import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  tagTypes: ['Heroes'],
  endpoints: (builder) => ({
    getHerors: builder.query({ query: () => '/heroes', providesTags: ['Heroes'] }),
    deleteHero: builder.mutation({ query: (id) => ({ url: `/heroes/${id}`, method: 'DELETE' }), invalidatesTags: ['Heroes'] }),
    createHero: builder.mutation({ query: (hero) => ({ url: '/heroes', method: 'POST', body: hero }), invalidatesTags: ['Heroes'] }),
    getFilters: builder.query({ query: () => '/filters' }),
  }),
});

export const { useGetHerorsQuery, useDeleteHeroMutation, useCreateHeroMutation, useGetFiltersQuery } = apiSlice;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const exchangesApi = createApi({
  reducerPath: 'exchangesApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.exchangeratesapi.io/v1/latest',
  }),
  tagTypes: ['exchanges'],
  endpoints: builder => ({
    getExchanges: builder.query({
      query: base => `?access_key=ff7afdaae1f9fee4bf53f3836c6ea280&base=USD`,
      providesTags: ['exchanges'],
    }),
  }),
});

export const { useGetExchangesQuery } = exchangesApi;
// {symbol && `&symbols=${symbol}

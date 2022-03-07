import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY, API_TITLE_SEARCH, API_URL_SEARCH } from '../constants/constants'


export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL_SEARCH }),
    endpoints: (builder) => ({
      getBookByName: builder.query({
        query: (name) => name + API_TITLE_SEARCH + API_KEY,
      }),
    }),
  })

  export const { useGetBookByNameQuery } = bookApi
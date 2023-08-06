import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://hp-api.onrender.com/api/characters'
    }),
    endpoints: builder => (
        {
            getArr: builder.query({
                query: () => '/',
            })
        }
    )
})

export const {useGetArrQuery} = api;
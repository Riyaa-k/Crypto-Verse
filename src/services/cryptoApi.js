import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query'
const cryptoApiHeaders={
    'X-RapidAPI-Key': '6bacc1ca5dmsh6711665f6d75203p1d75abjsn59237c09b218',
     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl='https://coinranking1.p.rapidapi.com'

export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            
        })
    })
})

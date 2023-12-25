import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders={
    'X-RapidAPI-Key': '6bacc1ca5dmsh6711665f6d75203p1d75abjsn59237c09b218',
     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl='https://coinranking1.p.rapidapi.com'

const createRequest=(url)=>({url,headers:cryptoApiHeaders})

export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails:builder.query({
            query:(coinId)=>createRequest(`/coin/${coinId}`),
        }),   
        getCryptoHistory:builder.query({
            query:(coinId,timePeriod)=>createRequest(`/coin/${coinId}/history/${timePeriod}`)   
        }),
        getExchanges:builder.query({
            query:()=>createRequest(`/exchanges`)   
        })
    })
});
export const{
    useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery,useGetExchangesQuery,
}=cryptoApi;
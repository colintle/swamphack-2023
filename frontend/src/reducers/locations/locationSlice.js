import { createEntityAdapter  } from "@reduxjs/toolkit";
import {apiSlice} from '../api/apiSlice';

const locationAdapter = createEntityAdapter({
});

const initialState = locationAdapter.getInitialState()

export const locationApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getLocations: builder.mutation({
            query: bodyMessage => ({
                url: "/searchNearBy/",
                method: "POST",
                body: bodyMessage,
            }),
            transformResponse: (response, meta, arg) => response.results,
            invalidatesTags: ['Location']
        })
    })
})

export const {
    useGetLocationsMutation
} = locationApiSlice
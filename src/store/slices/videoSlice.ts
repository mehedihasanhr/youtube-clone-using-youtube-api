import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchVideoById } from "../thunks/fetchVideoById";
import { fetchVideos } from "../thunks/fetchVideos";



// INITIAL STATE INTERFACE
export interface VideoState {
    videos: any[] | undefined,
    loading: boolean,
    error: string | undefined | null
    success: string | null
    nextPageToken: string | null
    pageInfo: object;
    video: {}
}


// INITIAL STATE 
const initialState: VideoState = {
    videos: [],
    video: {},
    pageInfo: {},
    loading: false,
    error: null,
    success: null,
    nextPageToken: null
}


// VIDEOS SLICE 
export const videoSlice = createSlice({
    name: "videos", // NAME OF THE SLICE
    initialState, // INITIAL STATE

    //  REDUCERS 
    reducers: {
        getVideos: (state, action: PayloadAction<any>) => {
            state.videos = action.payload.videos;
            state.nextPageToken = action.payload.nextPageToken;
            state.loading = false;
        }
    },
    extraReducers:(builder) => {
        builder.addCase(fetchVideos.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(fetchVideos.fulfilled, (state, action) => {
            state.videos = action.payload.items;
            state.pageInfo = action.payload.pageInfo;
            state.nextPageToken = action.payload.nextPageToken || null;
            state.loading = false;
        })

        builder.addCase(fetchVideos.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        })

        builder.addCase(fetchVideoById.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(fetchVideoById.fulfilled, (state, action) => {
            state.video = action.payload.items[0];
            state.pageInfo = action.payload.pageInfo;
            state.nextPageToken = action.payload.nextPageToken || null;
            state.loading = false;
        })

        builder.addCase(fetchVideoById.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        })
    }
});


export const { getVideos } = videoSlice.actions; // EXPORT ACTIONS FROM SLICE

export default videoSlice.reducer; // EXPORT DEFAULT REDUCER FROM SLICE
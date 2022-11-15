import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchChannelById } from "../thunks/fetchChannelById";



// INITIAL STATE INTERFACE
export interface channelState {
    channel: {},
    loading: boolean,
    error: string | undefined | null
}


// INITIAL STATE 
const initialState: channelState = {
    channel: {},
    loading: false,
    error: ""
}


// Channels SLICE 
export const channelSlice = createSlice({
    name: "channel", // NAME OF THE SLICE
    initialState, // INITIAL STATE

    //  REDUCERS 
    reducers: { },
    extraReducers:(builder) => {
        builder.addCase(fetchChannelById.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(fetchChannelById.fulfilled, (state, action) => {
            state.channel = action.payload;
            state.loading = false;
        })

        builder.addCase(fetchChannelById.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        })
    }
});


export default channelSlice.reducer; // EXPORT DEFAULT REDUCER FROM SLICE
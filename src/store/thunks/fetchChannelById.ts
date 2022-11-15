import { createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "../../lib/axios";


export const fetchChannelById = createAsyncThunk(
    'channel/fetchChannelById',
    async (id: number | string) => {
        const response = await axios({
            method: "GET",
            url: "/channels",
            params: {
                part: 'contentDetails,snippet,statistics',
                id: id,
                alt: "json",
            }
       })
    
       if(response.status === 200) {
            return await response.data;
       }
    
        return [];
    }
)


import { createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "../../lib/axios";


export const fetchVideos = createAsyncThunk(
    'videos/fetchVideos',
    async () => {
        const response = await axios({
            method: "GET",
            url: "/videos",
            params: {
                part: 'contentDetails,player,snippet,statistics',
                chart: "mostPopular",
                maxResults: "50",
                alt: "json",
            }
       })
    
       if(response.status === 200) {
           return response.data;
       } 
    
        return {};
    }
)


import { createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "../../lib/axios";


export const fetchVideoById = createAsyncThunk(
    'videos/fetchVideoById',
    async (id :number | string) => {
        const response = await axios({
            method: "GET",
            url: "/videos",
            params: {
                part: 'contentDetails,player,snippet,statistics',
                id: id,
                maxResults: "25",
                alt: "json",
            }
       })
    
       if(response.status === 200) {
           return response.data;
       } 
    
        return {};
    }
)


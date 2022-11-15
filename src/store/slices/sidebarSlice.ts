import { createSlice } from "@reduxjs/toolkit";


export interface SidebarState {
    isOpen: boolean;
}

// INITIAL STATE
const initialState: SidebarState = {
    isOpen: false
}



const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
       openSidebar: (state) => {
              state.isOpen = true;
       },
       closeSidebar: (state) => {
            state.isOpen = false;
       }
    }
});



export const { openSidebar, closeSidebar } = sidebarSlice.actions;


export default sidebarSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'


export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    showedSidebar: true
  },
  reducers: {
    showSidebar: (state) => {
      (!state.showedSidebar)
        ?
        state.showedSidebar = true
        :
        state.showedSidebar = false

    },
  },
})

// Action creators are generated for each case reducer function
export const { showSidebar } = sidebarSlice.actions


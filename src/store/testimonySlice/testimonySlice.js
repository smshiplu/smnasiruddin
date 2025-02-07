import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  testimonials: []
}

const testimonySlice = createSlice({
  name: "testimonyContent",
  initialState,
  reducers: {
    SET_TESTIMONY_DATA(state, action) {
      state.testimonials = [...action.payload]
    }
  }
});

export const {
  SET_TESTIMONY_DATA
} = testimonySlice.actions

export const  selectTestimonials = (state) => state.testimonyContent.testimonials;
export default testimonySlice.reducer
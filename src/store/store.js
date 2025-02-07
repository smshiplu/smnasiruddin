import { configureStore } from "@reduxjs/toolkit";
import portfolioSlice from "./portfolioSlice/portfolioSlice";
import testimonySlice from "./testimonySlice/testimonySlice";
export default configureStore({
  reducer: {
    portfolioContent: portfolioSlice,
    testimonyContent: testimonySlice
  }
})
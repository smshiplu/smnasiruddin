import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  portfolios: []
}

const portfolioSlice = createSlice({
  name: "portfolioContent",
  initialState,
  reducers: {
    SET_PORTFOLIO_DATA(state, action) {
      state.portfolios = [...action.payload]
    }
  }
});

export const {
  SET_PORTFOLIO_DATA
} = portfolioSlice.actions;
export const selectPortfolios = (state) => state.portfolioContent.portfolios;
export default portfolioSlice.reducer;
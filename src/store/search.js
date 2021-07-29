import { createSlice } from "@reduxjs/toolkit";
import { loadSearchResult, loadRecipeDetails } from "./actions/recipes";

export const search = createSlice({
  name: "search",

  initialState: {
    searchString: "",
    searchRecipeResult: [],
    selectedRecipe: null,
  },

  reducers: {
    updateSearchString: (state, action) => {
      state.searchString = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadSearchResult.fulfilled, (state, action) => {
        state.searchRecipeResult = action.payload;
      })
      .addCase(loadRecipeDetails.fulfilled, (state, action) => {
        state.selectedRecipe = action.payload;
      });
  },
});

export const {
  updateSearchString,
  updateSearchRecipeResult,
  updateSelectedRecipe,
} = search.actions;

export default search.reducer;

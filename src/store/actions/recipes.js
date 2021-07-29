import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  sendGetRequestRecipesSearch,
  sendGetRequestRecipeDetails,
} from "../../api/edamam/edamam-api";
import { getSearchParam, getRecipeId } from "../../helpers/urlParser";

const loadSearchResult = createAsyncThunk(
  "search/updateSearchRecipeResult",
  async () => {
    const searchString = getSearchParam(window.location.href);
    const searchResult = await sendGetRequestRecipesSearch(searchString);

    return searchResult;
  }
);

const loadRecipeDetails = createAsyncThunk(
  "search/updateSelectedRecipe",
  async () => {
    const recipeId = getRecipeId(window.location.href);
    const newSelectedRecipe = await sendGetRequestRecipeDetails(recipeId);

    return newSelectedRecipe;
  }
);

export { loadSearchResult, loadRecipeDetails };

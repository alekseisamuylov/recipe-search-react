const PATHNAME_TO_RECIPE_ID = "/recipe";
const SEARCH_PARAM = "q";

function getRecipeId(href) {
  return new URL(href).pathname.slice(PATHNAME_TO_RECIPE_ID.length + 1);
}

function getSearchParam(href) {
  const params = new URLSearchParams(new URL(href).search.slice(1));

  return params.get(SEARCH_PARAM);
}

export { getRecipeId, getSearchParam };

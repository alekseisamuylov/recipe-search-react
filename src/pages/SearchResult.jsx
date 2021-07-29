import { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadSearchResult } from "../store/actions/recipes";

function SearchResult() {
  const recipes = useSelector((state) => state.search.searchRecipeResult);
  const searchString = useSelector((state) => state.search.searchString);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSearchResult());
  }, [searchString]);

  function onRecipeClick(recipe, e) {
    history.push(`/recipe/${recipe.id}`);
  }

  return (
    <ResultWrapper>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} onClick={(e) => onRecipeClick(recipe, e)}>
          <img src={recipe.img} alt={recipe.label} />
          <p>{recipe.label}</p>
        </Recipe>
      ))}
    </ResultWrapper>
  );
}

const ResultWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-area: main;
  padding: 20px;
  background-color: rgb(233, 233, 233);
  border-radius: 4px;
`;

const Recipe = styled.div`
  align-items: center;
  justify-content: center;
  width: 40%;
  margin: 30px;
  cursor: pointer;
`;

export default SearchResult;

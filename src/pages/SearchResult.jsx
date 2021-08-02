import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadSearchResult } from "../store/actions/recipes";
import { Space, Card, Image } from "antd";
import { DEFAULT_RECIPE_IMAGE_BASE64 } from "../constants/images";

const { Meta } = Card;

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
    <Space wrap="true" size="large" style={{ "justify-content": "center" }}>
      {recipes.map((recipe) => (
        <Card
          hoverable
          key={recipe.id + "c"}
          onClick={(e) => onRecipeClick(recipe, e)}
          style={{ width: 300 }}
          cover={<Image src={recipe.img} fallback={DEFAULT_RECIPE_IMAGE_BASE64} preview={false} />}
        >
          <Meta title={recipe.label} />
        </Card>
      ))}
    </Space>
  );
}

export default SearchResult;

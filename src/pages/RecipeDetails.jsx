import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadRecipeDetails } from "../store/actions/recipes";
import { Space, Tabs, Image, List } from "antd";
import { DEFAULT_RECIPE_IMAGE_BASE64 } from "../constants/images";

const { TabPane } = Tabs;

function RecipeDetails() {
  const recipe = useSelector((state) => state.search.selectedRecipe);
  const [isRequestSended, setIsRequestSended] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isRequestSended) {
      setIsRequestSended(true);
      dispatch(loadRecipeDetails());
    }
  });

  function convertListItem(item) {
    return `${item.label}: ${Math.ceil(item.quantity)} ${item.unit}`;
  }

  return (
    <Space size="large" align="start">
      {recipe !== null && (
        <>
          <Image
            src={recipe.img}
            fallback={DEFAULT_RECIPE_IMAGE_BASE64}
            preview={false}
          ></Image>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Ingredients" key="1">
              <List
                size="small"
                dataSource={recipe.ingredients}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </TabPane>
            <TabPane tab="Total daily" key="2">
              <List
                size="small"
                dataSource={Object.values(recipe.totalDaily)}
                renderItem={(item) => (
                  <List.Item>{convertListItem(item)}</List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="Total nutries" key="3">
              <List
                size="small"
                dataSource={Object.values(recipe.totalNutrients)}
                renderItem={(item) => (
                  <List.Item>{convertListItem(item)}</List.Item>
                )}
              />
            </TabPane>
          </Tabs>
        </>
      )}
    </Space>
  );
}

export default RecipeDetails;

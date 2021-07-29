import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { loadRecipeDetails } from "../store/actions/recipes";

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
    return `${item.label}: ${Math.ceil(item.quantity)}${item.unit}`;
  }

  function totalList(label, list) {
    const listItems = list.map((item) => {
      return <li key={item.label}>{convertListItem(item)}</li>;
    });

    const totalList = (
      <Total>
        <h3>{label}</h3>
        <ul>{listItems}</ul>
      </Total>
    );
    return totalList;
  }

  return (
    <RecipeDetailsPage>
      {recipe !== null && (
        <ContentWrapper>
          <Image src={recipe.img} alt={recipe.label}></Image>
          <Ingredients>
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </Ingredients>
          {totalList("Total daily", Object.values(recipe.totalDaily))}
          {totalList("Total nutries", Object.values(recipe.totalNutrients))}
        </ContentWrapper>
      )}
    </RecipeDetailsPage>
  );
}

const RecipeDetailsPage = styled.div`
  grid-area: main;
  padding: 20px;
  background-color: rgb(233, 233, 233);
  border-radius: 4px;
  font-size: 24px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: start;
`;

const Image = styled.img`
  width: 30%;
`;

const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 50px;
  width: 60%;
`;

const Total = styled.div`
  padding: 20px 50px;

  li {
    padding: 10px 0;
    text-align: start;
  }
`;

const recipeTest = {
  img: "https://www.edamam.com/web-img/a1c/a1c927f1c9efe8d432fa0da89d5e3bfc.jpg",
  ingredients: ["1", "2", "3", "4", "5"],
  totalDaily: [
    {
      label: "1",
      quantity: 123.02,
      unit: "mg",
    },
    {
      label: "2",
      quantity: 1023.102,
      unit: "mg",
    },
    {
      label: "3",
      quantity: 23.02,
      unit: "mg",
    },
    {
      label: "4",
      quantity: 3.02,
      unit: "mg",
    },
  ],
  totalNutrients: [
    {
      label: "1",
      quantity: 123.02,
      unit: "mg",
    },
    {
      label: "2",
      quantity: 1023.102,
      unit: "mg",
    },
    {
      label: "3",
      quantity: 23.02,
      unit: "mg",
    },
    {
      label: "4",
      quantity: 3.02,
      unit: "mg",
    },
  ],
};

export default RecipeDetails;

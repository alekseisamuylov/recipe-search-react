import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import SearchResult from "./pages/SearchResult";

const Page = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  grid-template-rows: 80px auto 100px;
  grid-template-areas:
    "header header header"
    ". main ."
    "footer footer footer";
`;

function App() {
  return (
    <Page>
      <PageHeader></PageHeader>
      <Switch>
        <Route exact path="/recipes">
          <SearchResult />
        </Route>
        <Route exact path="/recipe/:id">
          <RecipeDetails />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Page>
  );
}

export default App;

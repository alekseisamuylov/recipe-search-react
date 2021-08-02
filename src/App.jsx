import { Switch, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import SearchResult from "./pages/SearchResult";
import { Row, Col } from "antd";

const contentStyle = {
  margin: "20px 0",
  padding: "20px",
  background: "#d9f7be",
  borderRadius: "4px",
};

function App() {
  return (
    <>
      <Row>
        <Col span={24}>
          <PageHeader></PageHeader>
        </Col>
      </Row>
      <Row>
        <Col span={3}></Col>
        <Col style={contentStyle} span={18}>
          <Switch>
            <Route exact path="/recipes">
              <SearchResult />
            </Route>
            <Route exact path="/recipe/:id">
              <RecipeDetails />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Col>
        <Col span={3}></Col>
      </Row>
    </>
  );
}

export default App;

import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { updateSearchString } from "../store/search";
import { Input } from "antd";
const { Search } = Input;

function PageHeader() {
  const dispatch = useDispatch();
  const history = useHistory();

  function onSearchClick(searchString) {
    if (searchString) {
      dispatch(updateSearchString(searchString));
      history.push(`/recipes?q=${searchString}`);
    }
  }

  return (
    <Header style={{ backgroundColor: "#b7eb8f" }}>
      <StyledLink to="/">Recipe Searcher</StyledLink>
      <Search
        placeholder="Input any food..."
        allowClear
        bordered="false"
        enterButton="Search"
        size="large"
        onSearch={onSearchClick}
        style={{ width: 500, marginLeft: 500 }}
      />
    </Header>
  );
}

const Header = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  padding: 20px;
`;

const StyledLink = styled(Link)`
  min-width: 170px;
  font-size: 20px;
  text-decoration: none;
  color: #2c3e50;
`;

export default PageHeader;

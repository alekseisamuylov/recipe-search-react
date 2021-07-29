import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { updateSearchString } from "../store/search";

function PageHeader() {
  const [searchString, setSearchString] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  function onSearchClick(e) {
    dispatch(updateSearchString(searchString));
    history.push(`/recipes?q=${searchString}`);
  }

  return (
    <Header>
      <StyledLink to="/">Recipe Searcher</StyledLink>
      <Search>
        <Input
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          placeholder="Enter any food..."
        ></Input>
        <Button type="button" onClick={onSearchClick}>
          Find
        </Button>
      </Search>
    </Header>
  );
}

const Header = styled.header`
  grid-area: header;
  display: flex;
  padding: 20px;
  align-items: center;
`;

const StyledLink = styled(Link)`
  width: 150px;
  font-size: 20px;
  text-decoration: none;
  color: #2c3e50;
`;

const Search = styled.div`
  margin-left: calc(50% - 200px);
`;

const Input = styled.input`
  height: 40px;
  border-radius: 4px;
  padding: 0 10px;
  margin-right: 10px;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: rgb(233, 233, 233);
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 4px;
  border: none;
  font-size: 18px;
  cursor: pointer;

  &:active {
    background-color: rgb(95, 95, 95);
  }
`;

export default PageHeader;

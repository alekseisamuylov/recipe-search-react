import styled from "styled-components";

const HomePage = styled.div`
  grid-area: main;
  padding: 20px;
  background-color: rgb(233, 233, 233);
  border-radius: 4px;
`;

export default function Home() {
  return (
    <HomePage>
      <h1>
        Here you can find any recipes! Just write orange, milk, coca-cola or any
        else and go to search.
      </h1>
    </HomePage>
  );
}

import React from "react";
import styled from "styled-components";
import Main from "./Components/Main";

const Wrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  height: 100%;
  max-width: 960px;
  padding-right: 10px;
  padding-left: 10px;
  display: flex;
`;

const App = () => {
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  );
};

export default App;

import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Missions from "./Missions";
import Filters from "./Filters";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  overflow: hidden;
  @include respond(largeTablet) {
    height: 50vh;
    width: 80%;
  }
  @include respond(tablet) {
    height: 50vh;
    width: 95%;
  }
  @include respond(largePhone) {
    height: 100vh;
    width: 100%;
  }
`;

const Main = () => (
  <Container className="has-background-light">
    <Header />
    <div className="columns">
      <div className="column is-one-quarter">
        <Filters />
      </div>
      <div className="column is-three-fifths">
        <Missions />
      </div>
    </div>
  </Container>
);

export default Main;

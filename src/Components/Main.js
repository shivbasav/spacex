import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Missions from "./Missions";
import Header from "./Header";
import Filters from "./Filters";

const Row = styled.div``;

// const Container = styled.div`
//   height: 100vh;
//   width: 100%;
//   margin: 0 auto;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   border-radius: 3px;
//   overflow: auto;
//   @include respond(largeTablet) {
//     height: 50vh;
//     width: 80%;
//   }
//   @include respond(tablet) {
//     height: 50vh;
//     width: 95%;
//   }
//   @include respond(largePhone) {
//     height: 100vh;
//     width: 100%;
//   }
// `;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  position: absolute;

  .item1 {
    grid-area: header;
  }
  .item2 {
    grid-area: menu;
  }
  .item3 {
    grid-area: main;
  }
  .item4 {
    grid-area: right;
  }
  .item5 {
    grid-area: footer;
  }
  .grid-container {
    display: grid;
    grid-template-areas:
      "header header header header header header"
      "menu main main main main main"
      "menu footer footer footer footer footer";
    grid-gap: 10px;
    background-color: #f6f6f6;
    padding: 10px;
  }
  .grid-container > div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }
`;

const Main = () => {
  const [launch, setLaunch] = useState(null);

  // const url = "https://api.spacexdata.com/v3/launches?limit=100";
  // const fetchData = async () => {
  //   const response = await axios.get(url);

  //   setLaunch(response.data);
  // };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.spacexdata.com/v3/launches?limit=100"
      );
      setLaunch(response.data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <div className="grid-container">
        <div className="item1">
          <Header />
        </div>

        <div className="item2">
          <Filters />
        </div>

        <div className="item3">
          <Missions launch={launch} />
        </div>
      </div>
    </Container>
  );
};

export default Main;

import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  &&&& {
    padding: "1rem 1rem";
  }
`;

const SuccessfulLaunchFilter = () => {
  const [launchTrue, setLaunchTrue] = useState();

  const url =
    "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true";
  const fetchData = async () => {
    const response = await axios.get(url);

    setLaunchTrue(response.data);
  };
  return (
    <Container style={{ padding: "1rem" }} className="has-background-white">
      {/* Successful Launch */}
      <div className="has-text-centered is-size-6">
        <p className="has-text-weight-normal">Successful Launch</p>
        <hr />
      </div>
      <div className="columns is-1">
        <div className="column">
          <button
            className="button is-primary is-small"
            onClick={() => setLaunchTrue(fetchData)}
          >
            TRUE
          </button>
        </div>
        <div className="column">
          <button
            className="button is-primary is-small"
            onClick={() => setLaunchTrue(fetchData)}
          >
            FALSE
          </button>
        </div>
      </div>
    </Container>
  );
};

export default SuccessfulLaunchFilter;

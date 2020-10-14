import React from "react";
import styled from "styled-components";

const Container = styled.div`
  &&&& {
    padding: "1rem 1rem";
  }
`;

const SuccessfulLandingFilter = () => (
  <Container style={{ padding: "1rem" }} className="has-background-white">
    {/* Successful Landing */}
    <div className="has-text-centered is-size-6">
      <p className="has-text-weight-normal">Successful Launch</p>
      <hr />
    </div>
    <div className="columns is-1">
      <div className="column">
        <button
          className="button is-primary is-small"
          onClick={() => console.log("TRUE")}
        >
          TRUE
        </button>
      </div>
      <div className="column">
        <button className="button is-primary is-small">FALSE</button>
      </div>
    </div>
  </Container>
);

export default SuccessfulLandingFilter;

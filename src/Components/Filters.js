import React from "react";
import styled from "styled-components";
import LaunchFilter from "./SuccessfulLaunchFilter";
import LandingFilter from "./SuccessfulLandingFilter";

const Container = styled.div`
  &&&& {
    padding: "1rem 1rem";
  }
`;

const Filters = () => (
  <Container style={{ padding: "1rem" }} className="has-background-white">
    <p className="has-text-weight-medium">Filters</p>
    <br />
    <div className="has-text-centered is-size-6">
      <p className="has-text-weight-normal">Launch Year</p>
      <hr />
    </div>
    <div className="columns is-1">
      <div className="column">
        <button
          className="button is-primary is-small"
          onClick={() => console.log("2006")}
        >
          2006
        </button>
      </div>
      <div className="column">
        <button className="button is-primary is-small">2007</button>
      </div>
    </div>
    <div className="columns is-1">
      <div className="column">
        <button className="button is-primary is-small">2008</button>
      </div>
      <div className="column">
        <button className="button is-primary is-small">2009</button>
      </div>
    </div>
    <div className="columns is-1">
      <div className="column">
        <button className="button is-primary is-small">2010</button>
      </div>
      <div className="column">
        <button className="button is-primary is-small">2011</button>
      </div>
    </div>
    <div className="columns is-1">
      <div className="column">
        <button className="button is-primary is-small">2012</button>
      </div>
      <div className="column">
        <button className="button is-primary is-small">2013</button>
      </div>
    </div>
    <div className="columns is-1">
      <div className="column">
        <button className="button is-primary is-small">2014</button>
      </div>
      <div className="column">
        <button className="button is-primary is-small">2015</button>
      </div>
    </div>
    {/* Successful Launch */}
    <LaunchFilter />

    {/* Successful Landing */}
    <LandingFilter />
  </Container>
);

export default Filters;

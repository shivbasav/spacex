import React from "react";
import axios from "axios";
import IndividualMission from "./IndividualMission";

const Missions = () => {
  const api_call = async () => {
    const url = "https://api.spacexdata.com/v3/launches?limit=100";
    const request = axios.get(url);
    const response = await request;

    console.log(response);
  };

  return <IndividualMission api_call={api_call} />;
};
export default Missions;

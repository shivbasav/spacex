import React, { useState } from "react";
import axios from "axios";
import IndividualMission from "./IndividualMission";

const Missions = () => {
  const [launch, setLaunch] = useState(null);

  const url = "https://api.spacexdata.com/v3/launches?limit=100";
  const fetchData = async () => {
    const response = await axios.get(url);

    setLaunch(response.data);
  };

  return (
    <>
      <div>
        <button className="button is-info" onClick={fetchData}>
          Fetch Launches
        </button>
      </div>
      {launch &&
        launch.map((rocket) => {
          return (
            <>
              <IndividualMission rocket={rocket} />
            </>
          );
        })}
    </>
  );
};
export default Missions;

import React from "react";

import IndividualMission from "./IndividualMission";

const Missions = ({ launch }) => {
  return (
    <>
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

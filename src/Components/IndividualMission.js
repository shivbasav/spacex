import React from "react";
import { Column } from "rbx";
import MissionView from "./MissionView";

const IndividualMission = (rocket) => {
  console.log("rocket", rocket);
  return (
    //   <div className="columns">
    //     <div className="tile is-ancestor">
    //       <div className="tile is-parent">
    //         <article className="tile is-child box">
    //           <p className="title">Middle box</p>
    //           <p className="subtitle">With an image</p>
    //           <figure className="image is-4by3">
    //             <img src="https://bulma.io/images/placeholders/640x480.png" />
    //           </figure>
    //         </article>
    //       </div>
    //     </div>
    //   </div>
    <>
      {/* <div className="columns is-4" style={{ paddingTop: "1rem" }}>
        <div className="column is-one-quarter">
          <p className="has-background-white">{rocket.rocket.mission_name}</p>
        </div>
      </div> */}
      <Column.Group vcentered gapSize={8}>
        <Column size={4}>
          <MissionView rocket={rocket} />
        </Column>
      </Column.Group>
    </>
  );
};

export default IndividualMission;

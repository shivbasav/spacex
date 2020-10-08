import React from "react";

const IndividualMission = (props) => {
  console.log(props.api_call);
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
    <div className="columns is-4" style={{ paddingTop: "1rem" }}>
      <div className="column is-one-quarter">
        <p className="has-background-white">No Gap</p>
      </div>
      <div className="column is-one-quarter">
        <p className="has-background-white">No Gap</p>
      </div>
      <div className="column is-one-quarter">
        <p className="has-background-white">No Gap</p>
      </div>
      <div className="column is-one-quarter">
        <p className="has-background-white">No Gap</p>
      </div>
    </div>
  );
};

export default IndividualMission;

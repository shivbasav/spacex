import React from "react";
import styled from "styled-components";
import { first } from "lodash";

const Container = styled.div``;

const MissionView = ({ rocket }) => {
  return (
    // <Container className="column is-half">
    //   <div className="card-wrapper">
    //     <div className="is-flex">
    //       <figure className="image is-full">
    //         <img
    //           src="https://bulma.io/images/placeholders/256x256.png"
    //           alt="mission"
    //         />
    //       </figure>

    //       <Left className="">
    //         <p
    //           weight="regular"
    //           size="smedium"
    //           paddingBottom="0.4"
    //           className="item-title"
    //         >
    //           {rocket.rocket.mission_name}
    //         </p>
    //         <p>{first(rocket.rocket.mission_id)}</p>
    //         <p size="smedium" paddingBottom="1" className="item-price">
    //           {rocket.rocket.flight_number}
    //         </p>
    //         <p size="smedium">{rocket.rocket.launch_year}</p>
    //         <p>{rocket.rocket.launch_success === true ? "TRUE" : "FALSE"}</p>
    //         <p>{rocket.rocket.launch_landing}</p>
    //       </Left>
    //     </div>
    //   </div>
    // </Container>

    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left" />
          <div className="media-content">
            <p
              weight="regular"
              size="smedium"
              paddingBottom="0.4"
              className="item-title"
            >
              {rocket.rocket.mission_name}
            </p>
            <p>{first(rocket.rocket.mission_id)}</p>
            <p size="smedium" paddingBottom="1" className="item-price">
              {rocket.rocket.flight_number}
            </p>
          </div>
        </div>

        <div className="content">
          <p size="smedium">{rocket.rocket.launch_year}</p>
          <p>{rocket.rocket.launch_success === true ? "TRUE" : "FALSE"}</p>
          <p>{rocket.rocket.launch_landing}</p>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  );
};

export default MissionView;

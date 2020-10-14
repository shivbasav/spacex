import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: "flex";
  flex-direction: "row";
`;

const MissionView = ({ rocket }) => {
  const image = rocket.rocket.links.mission_patch_small;
  console.log(image);
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
        <figure
          className="image is-4by3"
          style={{ backgroundColor: "#f6f6f6" }}
        >
          <img src={image} alt="image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="level-left">
          <p
            style={{
              color: "#2c5697",
              fontSize: "13px",
              fontWeight: "500",
              justifyContent: "left",
              paddingBottom: "0.5rem",
            }}
          >
            {rocket.rocket.mission_name} # {rocket.rocket.flight_number}
          </p>
        </div>

        <div className="level-left">
          <p
            style={{
              fontSize: "13px",
              fontWeight: "500",
              paddingBottom: "0.5rem",
            }}
          >
            Mission Ids:{" "}
            <p style={{ color: "#2c5697" }}>{rocket.rocket.mission_id}</p>
          </p>
        </div>
        <div className="level-left">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p
              style={{
                fontSize: "13px",
                fontWeight: "500",
                paddingBottom: "0.5rem",
              }}
            >
              Launch Year:{" "}
            </p>
            <p
              style={{ color: "#2c5697", fontSize: "13px", fontWeight: "500" }}
            >
              {rocket.rocket.launch_year}
            </p>
          </div>
        </div>
        <div className="level-left">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p
              style={{
                fontSize: "13px",
                fontWeight: "500",
                paddingBottom: "0.5rem",
              }}
            >
              Successful Launch:{" "}
            </p>
            <p
              style={{ color: "#2c5697", fontSize: "13px", fontWeight: "500" }}
            >
              {rocket.rocket.launch_success === true ? "TRUE" : "FALSE"}
            </p>
          </div>
        </div>
        <div className="level-left">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p style={{ fontSize: "13px", fontWeight: "500" }}>
              Successful Landing:
            </p>
            <p
              style={{ color: "#2c5697", fontSize: "13px", fontWeight: "500" }}
            >
              {rocket.rocket.launch_landing}
            </p>
          </div>
        </div>

        <br />
      </div>
    </div>
  );
};

export default MissionView;

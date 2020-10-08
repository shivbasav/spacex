import React from "react";
import styled from "styled-components";
import { first } from "lodash";

const Container = styled.div`
  /* padding: 1rem; */
  &&& {
    background-color: "white";
    margin-bottom: 0.5rem;

    .is-full {
      width: 22rem;
      height: 100%;
    }
    .card-wrapper {
      display: block;
      height: 12.5rem;
      cursor: pointer;
      @media (min-width: 1024px) and (max-width: 1070px) {
        height: 11rem;
      }
    }
    .card {
      display: flex;
      box-shadow: none !important;
    }
    .media {
      position: relative;
    }
  }
`;

const Left = styled.div`
  && {
    padding: 1rem;
    padding-top: 1rem;
    .item-info {
      margin-top: -12px;
    }
    @media (min-width: 1195px) and (max-width: 1206px) {
      .item-title {
        padding-bottom: 0.1rem;
        font-size: 14px;
      }
    }
    @media (min-width: 1024px) and (max-width: 1195px) {
      padding: 0.5rem;
      padding-left: 0.9rem;
      .item-title {
        padding-bottom: 0.1rem;
        font-size: 15px;
      }
      .item-price {
        padding-bottom: 0.1rem;
        font-size: 15px;
      }
      .item-info {
        font-size: 14px;
        margin-top: 0px;
      }
    }
    @media (min-width: 1024px) and (max-width: 1135px) {
      padding: 0.5rem;
      padding-left: 0.9rem;
      .item-title {
        padding-bottom: 0.1rem;
        font-size: 14px;
      }
      .item-price {
        padding-bottom: 0.1rem;
        font-size: 14px;
      }
      .item-info {
        font-size: 13px;
      }
    }
    @media (min-width: 1024px) and (max-width: 1096px) {
      .item-title {
        font-size: 13px;
      }
      .item-price {
        font-size: 13px;
      }
    }
  }
`;

const MissionView = ({ rocket }) => {
  return (
    <Container className="column is-half">
      <div className="card-wrapper">
        <div className="is-flex">
          <figure className="image is-full">
            <img
              src="https://bulma.io/images/placeholders/256x256.png"
              alt="mission"
            />
          </figure>

          <Left className="">
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
            <p size="smedium">{rocket.rocket.launch_year}</p>
            <p>{rocket.rocket.launch_success === true ? "TRUE" : "FALSE"}</p>
            <p>{rocket.rocket.launch_landing}</p>
          </Left>
        </div>
      </div>
    </Container>
  );
};

export default MissionView;

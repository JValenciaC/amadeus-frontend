import React from "react";
import getFlightOffers from "../../helpers/getFlightOffers";
import axios from "axios";
import moment from "moment";

import "./FlightResult.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { DetailLabel } from "../DetailLabel/DetailLabel";
import nonStopFlightLogo from "../../assets/assets/img/nonstop.png";

const FlightLogo = () => {
  return <img src={nonStopFlightLogo} width="32" height="32"></img>;
};

const FlightInfoCard = (props) => {
  return (
    <>
      <Card>
        <div className="card shadow-sm p-md-2  mb-3">
          <hr />
          <section className={`Flight-info`}>
            <FlightLogo />
            <DetailLabel
              mainText={"City"}
              subText={props.arrival.iataCode}
            ></DetailLabel>
            <DetailLabel
              mainText={"Aircraft"}
              subText={Object.entries(props.aircraft.code)}
            ></DetailLabel>
            <DetailLabel
              mainText={"Arrival Time"}
              subText={moment(props.arrival.at).format("lll")}
            ></DetailLabel>
            <DetailLabel
              mainText={"Terminal"}
              subText={props.arrival.terminal}
            ></DetailLabel>
          </section>
          <hr />
          <section className={`Flight-info`}>
            <FlightLogo />
            <DetailLabel
              mainText={"City"}
              subText={props.departure.iataCode}
            ></DetailLabel>
            <DetailLabel
              mainText={"Aircraft"}
              subText={Object.entries(props.aircraft.code)}
            ></DetailLabel>
            <DetailLabel
              mainText={"Departure Time"}
              subText={moment(props.departure.at).format("lll")}
            ></DetailLabel>
            <DetailLabel
              mainText={"Terminal"}
              subText={props.departure.terminal}
            ></DetailLabel>
          </section>
          <hr />
        </div>
      </Card>
    </>
  );
};

export default FlightInfoCard;

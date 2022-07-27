import React from "react";

import "./FlightResult.css";

import nonStopFlightLogo from "../../assets/assets/img/nonstop.png";
import FlightInfoCard from "./FlightInfoCard";
import { flightResultSelector } from "../../redux/selector";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FlightLogo = () => {
  return <img src={nonStopFlightLogo} width="32" height="32"></img>;
};

const FlightResult = (props) => {
  // const {id} = React.useParams();
  const navigate = useNavigate();
  const flightResult = useSelector(flightResultSelector);

  const handlePriceClick = (id) => {
    navigate(`/PriceInfoCard/${id}`);
  };

  return (
    <>
      <div className="row row-cols-1 mb-4">
        <div className="col">
          <div className="card shadow-sm">
            <svg
              className="bd-placeholder-img card-img-top"
              width="100%"
              height="40"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <FlightLogo />
              <rect width="100%" height="100%" fill="#55595c" />
            </svg>
            <div className="card shadow-sm m-3 p-4">
              <span className="text-muted">
                <small
                  className={
                    props.type === "flight-offer"
                      ? "text-danger text-capitalize font-bold "
                      : "text"
                  }
                >
                  Type: {props.type}
                </small>
                <span className="text m-10">
                  <small className={"text"}>Source: {props.source}</small>
                </span>
              <span className="text">
                <small className={"text"}>Duration: {props.itineraries?.map((item)=> item.duration)}</small>
              </span>
              </span>
            </div>
            <div className="card-body">
              {props.itineraries?.map((itineraries) =>
                itineraries.segments.map((segment, index) => (
                  <FlightInfoCard className="mb-5" key={index} {...segment} />
                ))
              )}
              <div className="d-flex justify-content-between align-items-center p-md-2">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => handlePriceClick(props.id)}
                  >
                    Price
                  </button>
                </div>
                <span className="text-muted">
                  <small className="text-muted">
                    Number Of Bookable Seats: {props.numberOfBookableSeats}
                  </small>
                </span>

                <span className="text-muted">
                  <small className="text-muted">
                    Validating Airline Codes: {props.validatingAirlineCodes}{" "}
                  </small>
                </span>
                <small className="text-muted">
                  Last Ticket Date: {props.lastTicketingDate}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightResult;

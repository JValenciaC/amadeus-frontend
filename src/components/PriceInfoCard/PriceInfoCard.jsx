import React from "react";
import {
  PriceInfoCardContainer,
  PriceInfoCardTitle,
  PriceInfoCardSubTitle,
  PriceInfoCardDescription,
  PriceInfoCardPrice,
  PriceInfoCardButton,
  Line,
} from "./PriceInfoCard.style";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { flightResultSelector } from "../../redux/selector";

const PriceInfoCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const flightResult = useSelector(flightResultSelector);
  const Price = flightResult.find((item) => item.id === id)?.price;
  const Fees = flightResult.find((item) => item.id === id)?.price.fees;

  const handleFlightResult = (id) => {
    navigate(`/SearchPage`);
  };

  return (
    <>
      <PriceInfoCardContainer>
        <PriceInfoCardTitle>PRICE</PriceInfoCardTitle>
        <Line> </Line>
        <PriceInfoCardSubTitle>Base</PriceInfoCardSubTitle>
        <PriceInfoCardDescription>
          <span className="text-muted">
            {Price.currency} $ {Price.base}
          </span>
        </PriceInfoCardDescription>
        <PriceInfoCardSubTitle>Fees</PriceInfoCardSubTitle>
        {Fees.map((item) => (
          <PriceInfoCardDescription>
            <span className="text-muted">
              {item.type} : {item.amount}
            </span>
          </PriceInfoCardDescription>
        ))}
        <PriceInfoCardSubTitle>Total</PriceInfoCardSubTitle>
        <PriceInfoCardPrice>{Price.grandTotal}</PriceInfoCardPrice>
        <button className="btn btn-primary mt-4" onClick={handleFlightResult}>
          Cancel
        </button>
      </PriceInfoCardContainer>
    </>
  );
};

export default PriceInfoCard;

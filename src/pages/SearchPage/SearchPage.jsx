import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlightResult, SearchBox } from "../../components";
import CustomSpinner from "../../components/messages/spinner/CustomSpinner";
import { ResultContainer } from "../../components/SearchBox/SearchBox.style";
import {
  flightResultError,
  isLoadingFlightResult,
  flightResultSelector,
} from "../../redux/selector";

const SearchPage = () => {
  const isLoading = useSelector(isLoadingFlightResult);
  const error = useSelector(flightResultError);
  const flightResult = useSelector(flightResultSelector);

  return (
    <>
      <SearchBox />
     <div  className=" d-flex justify-content-center" > {isLoading && <CustomSpinner />} </div> 
    
      <ResultContainer className={Object.entries(flightResult).length !== 0 ? "" : "visually-hidden" }
      >
        {!isLoading &&
          Object.entries(flightResult).length !== 0 &&
          flightResult?.map((flightResult, index) => (
            <FlightResult className="mb-5" key={index} {...flightResult} />
          ))}
        <br />
      </ResultContainer>
    </>
  );
};

export default SearchPage;

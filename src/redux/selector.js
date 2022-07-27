export const isLoadingFlightResult = (state) => state.reducer.FlightResult.flightResultLoading;

export const flightResultError = (state) => state.reducer.FlightResult.flightResultError;

export const flightResultSelector = (state) => state.reducer.FlightResult.flightResult;


// export const flightResultId = (state) => state.reducer.FlightResult.flightResult.map(item => item.id);



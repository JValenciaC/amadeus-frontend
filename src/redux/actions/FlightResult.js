import getFlightOffers from "../../api/getFlightOffers";

export const FLIGHT_RESULT_SUCCESS = 'FLIGHT_RESULT_SUCCESS';
export const FLIGHT_RESULT_ERROR = 'FLIGHT_RESULT_ERROR';
export const FLIGHT_RESULT_LOADING = 'FLIGHT_RESULT_LOADING';
export const ADD_SEARCH_PARAMS = 'ADD_SEARCH_PARAMS';


const fetchFlightResultLoading = () => {
    return {
        type: FLIGHT_RESULT_LOADING,
    };
}

// error = payload
const fetchFlightResultError = (error) => {
    return {
        type: FLIGHT_RESULT_ERROR,
        payload: error,
    };
};

// flightResult = payload
const fetchFlightResult = (flightResult) => {
    return {
        type: 'FLIGHT_RESULT_SUCCESS',
        payload: flightResult,
    };
}

export const addSearchParams = (payload) => {
    return {
        type: 'ADD_SEARCH_PARAMS',
        payload: payload,
    };
}

export const fetchFlightResultAction = (values) => async (dispatch) => {
    const url = 'https://test.api.amadeus.com/v2/shopping/flight-offers?';

    try {
        dispatch(fetchFlightResultLoading());
        const response = await
            await getFlightOffers(url, values);
        dispatch(fetchFlightResult(response));
        // console.log('fetchFlightResultAction', response);
    } catch (error) {
        dispatch(fetchFlightResultError(error));
        console.log(error);
    }

}
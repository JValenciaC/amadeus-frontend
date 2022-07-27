
export const FETCH_FLIGHT_DETAILS_LOADING = 'FETCH_FLIGHT_DETAILS_LOADING';
export const FETCH_FLIGHT_DETAILS_SUCCESS = 'FETCH_FLIGHT_DETAILS_SUCCESS';
export const FETCH_FLIGHT_DETAILS_ERROR = 'FETCH_FLIGHT_DETAILS_ERROR';




const fetchFlightDetailstLoading = () => {
    return {    
        type: FETCH_FLIGHT_DETAILS_LOADING,    
    };
}

 const fetchFlightDetailsSuccess = (payload) =>  {
    return {
        type: FETCH_FLIGHT_DETAILS_SUCCESS,
        payload: payload
    }
}   

const fetchFlightResultError = (error) => {
    return {    
        type: FETCH_FLIGHT_DETAILS_ERROR,   
        payload: error,
    };
}

export const fetchFlightDetailsAction = (values) => async (dispatch) => {
    const url = 'https://test.api.amadeus.com/v2/shopping/flight-offers?';
    try {
        dispatch(fetchFlightDetailstLoading());
        const response = await getFlightOffers(url, values);
        dispatch(fetchFlightDetailsSuccess(response));
        // console.log('fetchFlightResultAction', response);
    } catch (error) {
        dispatch(fetchFlightResultError(error));
        console.log(error);
    }
}
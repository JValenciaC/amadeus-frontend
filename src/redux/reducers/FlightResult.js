import {
    FLIGHT_RESULT_LOADING,
    FLIGHT_RESULT_SUCCESS,
    FLIGHT_RESULT_ERROR,
    ADD_SEARCH_PARAMS,
} from '../actions/FlightResult';

const initialState = {
    flightResult: {},
    flightResultError: {},
    flightResultLoading: false,
    addSearchParams: {},
};

const FlightResult = (state = initialState, action) => {

   
    switch (action.type) {
        case 'FLIGHT_RESULT_LOADING': {
            return {
                ...state,
                flightResult: {},
                flightResultLoading: true,
            };
        }
        case 'FLIGHT_RESULT_SUCCESS': {
            return {
                ...state,
                flightResult: action.payload,
                flightResultLoading: false,
                flightResultError: {},
            };
        }
        case 'FLIGHT_RESULT_ERROR': {
            return {
                ...state,
                flightResultError: action.error,
                flightResultLoading: false,
            };
        }
        case 'ADD_SEARCH_PARAMS': {
            return {
                ...state,
                addSearchParams: action.payload,
            };
        }
        default: {
            return state;
        }
    }
}



export default FlightResult;
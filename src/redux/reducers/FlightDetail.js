import {
    FETCH_FLIGHT_DETAILS_LOADING,
    FETCH_FLIGHT_DETAILS_SUCCESS,
    FETCH_FLIGHT_DETAILS_ERROR,
} from '../actions/FlightDetail';


const initialState = {
    flightDetail: {},
    loading: false,
    error: null
}


const flightDetail = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FLIGHT_DETAILS_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_FLIGHT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                flightDetail: action.payload
            }
        case FETCH_FLIGHT_DETAILS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}   
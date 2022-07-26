import { FlightOffers } from '../data/FlightOffers';


const getFlightOffers = (  ) => {

     return FlightOffers.map( ( flightOffer ) => { return flightOffer.data } );

}  

export default getFlightOffers
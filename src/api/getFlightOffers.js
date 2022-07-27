// const BASE_URL = 'http://localhost:5000/api/v1.0/flightOffers/getflightOffers';

async function getFlightOffers(url, params) {
 try {
const {originLocationCode,destinationLocationCode,adults,children,travelClass,startDate,endDate} = params;
const BASE_URL =`http://localhost:5000/api/v1.0/flightOffers/getFlightOffers?originLocationCode=${originLocationCode}&destinationLocationCode=${destinationLocationCode}&adult=${adults}&children=${children}&travelClass=${travelClass}&departureDate=${startDate}&returnDate=${endDate}`;

console.log(BASE_URL);

  const response = await fetch(`${BASE_URL}`);
  const data = await response.json();
  return Promise.resolve(data);
 } catch (error) {
  return Promise.reject(error);
 }
};

export default getFlightOffers;
import React from "react";
import getFlightOffers from "../../helpers/getFlightOffers";
import axios from "axios";

const FlightResult = () => {
  const [Offers, setOffers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(
          "http://localhost:5000/api/v1.0/flightOffers/all"
        );

        setOffers(result.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!Offers) {
    return <div>No offers</div>;
  }

  const flightOffers = getFlightOffers();

  console.log(flightOffers);

  return (
    <>
      {/* <h1>FlightResult</h1>
      <hr />
      <ul>
        {Offers.map( (offer, index) => (
        <li key={ index }> source: { offer.source }
</li>
         // key is used to identify each element in the list   
        ))} 



      </ul> */}
   
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div class="col">
                <div class="card shadow-sm">
                  <svg
                    class="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="40%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>

                  <div class="card-body">
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small class="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

    </>
  );
};

export default FlightResult;

import axios from "axios";



const getAmadeusToken = () => {
    return new Promise((resolve, reject) => {

        // const CLIENT_ID = import.meta.env.CLIENT_ID;
        // const CLIENT_SECRET = import.meta.env.CLIENT_SECRET;
        // const GRANT_TYPE = import.meta.env.GRANT_TYPE;
        // const API_URL = import.meta.env.API_URL;
        const CLIENT_ID = "slmbEmoEJmKHYN5W8Ti0zbAbkqFNLtAt";
        const CLIENT_SECRET = "Bnh0IxCDGbWGWQCO";
        const GRANT_TYPE = "client_credentials";
        const API_URL = "https://test.api.amadeus.com/";

        const url = `${API_URL}/v1/security/oauth2/token`;
        const values = {
            grant_type: GRANT_TYPE,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET
        };
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'grant_type': 'client_credentials',
        }

        axios.post(url, values), { headers: headers }
            .then((response) => {
                resolve(response.data.access_token);
            }
            ).catch((error) => {
                console.log(error);
                reject(error);
            }
            );
    }
    )
}

export default getAmadeusToken;
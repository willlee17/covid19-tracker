import axios from 'axios';

export const fetchData = async () => {
    //this block works when fetch is successful
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get("https://covid19.mathdro.id/api");
        
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        }

        return modifiedData;
    }
    // else ....
    catch (error) {

    }
}
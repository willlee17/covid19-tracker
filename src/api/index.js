import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {

    let changeableUrl = url;
    if(country) {
        changeableUrl = `${url}/countries/${country}`
    }

    //this block works when fetch is successful
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(`${changeableUrl}`);
        
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
        console.log(error);
    }
}

export const fetchDailyData = async() => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        
        const modifiedData = data.map(dailyData => ({ //instant object return
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))

        return modifiedData
    }

    catch (error) {
        console.log(error);
    }
}

export const getCountries = async() => {
    try {
        const { data: { countries }} = await axios.get(`${url}/countries`)
        return countries.map((country) => country.name)
    }

    catch (error) {
        console.log(error)
    }
}

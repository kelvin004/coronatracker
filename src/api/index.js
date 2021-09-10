import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchdata = async (country) => {
    try {

        let changedurl = url;

        if(country) 
        {
            changedurl = `${url}/countries/${country}`;
        }
        //const modifieddata = {"test":"1","Another Test":"2"}

        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changedurl);

        const modifieddata = {
            confirmed,recovered,deaths,lastUpdate
        }

        return modifieddata;

    } catch (error) {

    }
}

export const fetchdailydata = async () => {
    try {

        const { data } = await axios.get(`${url}/daily`)
        
        const modifieddata = data.map((dailydata)=>({
            confirmed: dailydata.confirmed.total,
            deaths: dailydata.deaths.total,
            date:dailydata.reportDate
        }))
        return modifieddata;

    } catch (error) {

    }
}

export const fetchcountries = async () => {

    try {
        const {data:{countries}} = await axios.get(`${url}/countries`);
        
        return countries.map((country)=> country.name);

    } catch (error) {
        console.log(error);
    }
}
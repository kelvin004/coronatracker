import  React,{useState,useEffect}   from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import {fetchcountries} from '../../api';
import Styles from './countrypicker.module.css';

const CountryPicker = ({Handlecountrychanged}) => {

    const [fetchedcountries,setfetchedcountries] = useState([]);

    useEffect(()=>{

        const getCountries = async () => {
            setfetchedcountries(await fetchcountries());
        }
        getCountries();
    },[setfetchedcountries]);

    console.log(fetchedcountries);
    
    return (
        <FormControl>
            <NativeSelect defaultValue = "" onChange ={(e) => Handlecountrychanged(e.target.value)} >
                <option value = "Global" >Global</option>
                {fetchedcountries.map((country,i)=> <option key={i} value={country}>{country}</option>)}
            </NativeSelect>        
        </FormControl>
    )
}

export default CountryPicker;
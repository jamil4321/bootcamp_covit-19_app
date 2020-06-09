import React,{useState,useEffect} from 'react';
import {fetchcontry} from '../../api';
import { NativeSelect,FormControl} from '@material-ui/core';

const CountryPicker = ({handleCountryCahnge})=>{
    const [fetchedCountries,setFetchCountries] = useState([]);
    useEffect(()=>{
        const fetchapi = async()=>{
            setFetchCountries(await fetchcontry())
        }
        fetchapi()
    },[setFetchCountries])

    return(
        <FormControl>
            <NativeSelect defaultValue="" onChange={e =>handleCountryCahnge(e.target.value) }>
                <option value="">Global</option>
    {fetchedCountries.map((counrty,i)=><option key={i} value={counrty}>{counrty}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;

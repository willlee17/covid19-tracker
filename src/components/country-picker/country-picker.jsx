import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './country-picker.module.css'
import { getCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([])
    useEffect(() => {
        const fetchCountries = async () => {
            setFetchedCountries(await getCountries())
        }

        fetchCountries();
    }, [setFetchedCountries])

    // console.log(fetchedCountries)

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultvalue='' onChange={(e) => handleCountryChange(e.target.value)}>
                <option value=''>Global</option>
                {fetchedCountries.map((country, i) => (
                    <option key={i} value={country}>{country}</option>
                ))}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker; 
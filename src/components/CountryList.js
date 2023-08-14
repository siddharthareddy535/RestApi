import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountriesData } from '../actions/countryActions';

const CountryList = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country.countries);
  const loading = useSelector((state) => state.country.loading);
  const error = useSelector((state) => state.country.error);
  console.log(countries);
  useEffect(() => {
    dispatch(fetchCountriesData());
  }, [dispatch]);

  if (loading) {
    // console.log(loading);
    return <div>Loading...</div>;
  }

  if (error) {
    // console.log(error);
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Country Explorer</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.name.common}>
            <img src={country.flags[0]} alt={country.name.common} />
            <p>Name: {country.name.common}</p>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Subregion: {country.subregion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;

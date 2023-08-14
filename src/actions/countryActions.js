import  fetchCountries  from '../services/countryService';

export const fetchCountriesRequest = () => ({
  type: 'FETCH_COUNTRIES_REQUEST',
});

export const fetchCountriesSuccess = (countries) => ({
  type: 'FETCH_COUNTRIES_SUCCESS',
  payload: countries,
});

export const fetchCountriesFailure = (error) => ({
  type: 'FETCH_COUNTRIES_FAILURE',
  payload: error,
});

export const fetchCountriesData = () => {
  return async (dispatch) => {
    dispatch(fetchCountriesRequest());
    // console.log( dispatch(fetchCountriesRequest()));
    try {
      const countries = await fetchCountries();
      dispatch(fetchCountriesSuccess(countries));
    } catch (error) {
      dispatch(fetchCountriesFailure(error.message));
    }
  };
};

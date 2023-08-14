const initialState = {
    countries: [],
    loading: false,
    error: null,
  };
  
  const countryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COUNTRIES_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_COUNTRIES_SUCCESS':
        return {
          ...state,
          loading: false,
          countries: action.payload,
        };
      case 'FETCH_COUNTRIES_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default countryReducer;
  
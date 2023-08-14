import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3/all'; // REST Countries API endpoint

 const fetchCountries = async () => {
  try {
    const response =  await axios.get(BASE_URL);
    //  console.log(response);
    // response.then(function(data){
    //   console.log(data);
    // })
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch countries data');
  }
};
export default fetchCountries;
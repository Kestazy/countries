import axios from "axios";

const API_URL = 'https://restcountries.com/v3.1/all';

const getAllCountriesInfo = async() => {
  try {
    const res = await axios.get(API_URL);
    return res
  } catch (error) {
    console.log(error);
  }
}

export default getAllCountriesInfo;
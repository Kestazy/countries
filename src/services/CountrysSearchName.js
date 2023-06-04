import axios from "axios";

const countrysSearchName = async(name) => {
    try {
        const res = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
        if(res.data !== undefined){
        return res.data
        }
    } catch (error) {
        console.log(error);
    }
}

export default countrysSearchName

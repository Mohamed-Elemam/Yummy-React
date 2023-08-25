

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CountryFlag(countryName) {
    const [apiData, setApiData] = useState([]);

    async function getFlag(countryName) {
      try {
        let { data } = await axios.get(
          `https://restcountries.com/v3.1/name/${countryName}
          `
        );
        console.log(data)
        // setApiData(data.meals);
      } catch (error) {
        console.log(error);
      }
    }
  
    
    return (
      <>
          {apiData.map((ele,index) => (
           <img src={ele} alt="flag "  key={index}/>
          ))}
      </>
    );
}






  
 

  
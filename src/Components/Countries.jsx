import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryFlag from "./CountryFlag.jsx";

export function Countries() {
  const [apiData, setApiData] = useState([]);

  async function getDishs() {
    try {
      let { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/list.php?a=list/`
      );
      setApiData(data.meals);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDishs();
  }, []);

  return (
    <>
<div className="row">

      {apiData.map((ele, index) => (
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 text-center pointer" key = {index} >
      <div className="county"> 
      <CountryFlag countryname={ele.strArea}/>
          <i className="fas fa-house-laptop"style={{fontSize:"64px"}} ></i>
          <p style={{fontSize:"24.784px" , fontWeight:"500"}}>{ele.strArea}</p>
      </div>
  </div>
  
      ))}
</div>

    </>
  );
}

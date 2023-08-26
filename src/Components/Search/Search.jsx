import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

export default function Search() {
  const [apiData, setApiData] = useState([]);



  async function generalSearch(link,term) {
    try {
      let { data } = await axios.get(
        `${link+term}`
      );
      setApiData(data.meals);
    } catch (error) {
      console.log(error);
    }
  }
 
  
  //TODO when remove value shold add spinner 

  const wordSpy = (event) => {
    generalSearch('https://www.themealdb.com/api/json/v1/1/search.php?s=',event.target.value);
  };
  const charSpy = (event) => {
    generalSearch('https://www.themealdb.com/api/json/v1/1/search.php?f=',event.target.value)
  };
  
  return (
    <>
      <div className="row">
        <div className="col-md-6 my-2">
          <input
            type="text"
            className="form-control  rounded-2 searchInput"
            placeholder="Search By Meal Name"
            onChange={wordSpy}
          />
        </div>
        <div className="col-md-6 my-2">
          <input
            type="text"
            className="form-control  rounded-2 searchInput"
            placeholder="Search By Meal First Letter"
            maxLength="1"
            onChange={charSpy}
          />
        </div>
      </div>
      {
        <div className="row">
          {apiData ===null 
            ? <h2 className="d-flex justify-content-center align-items-center my-5 " >No meals found</h2>
            : apiData.map((ele, index) => (
              <Link
                to={ele.strMeal} key={index}
                className="col-sm-12 col-md-6 col-lg-4 col-xl-3 my-3"
              >
                <Card  ele={ele} />
              </Link>
            ))}
        </div>
      }
    </>
  );
}

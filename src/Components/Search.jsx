import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function Search() {
  const [apiData, setApiData] = useState([]);
  const [char, setChar] = useState("");



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
 
  //TODO so the search doesnt look bad when load
  // useEffect(() => {
  //   getDishs();
  // }, []);
  //TODO when remove value shold add spinner ?

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
            className="form-control bg-transparent rounded-2 text-white"
            placeholder="Search By Meal Name"
            onChange={wordSpy}
          />
        </div>
        <div className="col-md-6 my-2">
          <input
            type="text"
            className="form-control bg-transparent rounded-2 text-white"
            placeholder="Search By Meal First Letter"
            maxLength="1"
            onChange={charSpy}
          />
        </div>
      </div>
      {
        <div className="row">
          {apiData
            ? apiData.map((ele, index) => (
                <Link
                  to={ele.strMeal}
                  className="col-sm-12 col-md-6 col-lg-4 col-xl-3 my-3"
                >
                  <Card key={index} ele={ele} />
                </Link>
              ))
            : "loading..."}
        </div>
      }
    </>
  );
}

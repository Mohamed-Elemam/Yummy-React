import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

export function Home() {
  const [apiData, setApiData] = useState([]);

  async function getDishs() {
    try {
      let { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=`
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
          <Link  to={`/recipe/${ele.strMeal}`} className='col-sm-12 col-md-6 col-lg-4 col-xl-3 my-3'>
          <Card key={index} ele={ele} />
          </Link>
        ))}
      </div>
    </>
  );
}

import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from "../Card.jsx";
import { Link, useParams } from "react-router-dom";

export default function IngredientMeals() {
    const [apiData, setApiData] = useState([]);
    const {id} = useParams()


    async function getIngredientMeals(IngredientId) {
      try {
        let { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${IngredientId}`
        );
        setApiData(data.meals)
      } catch (error) {
        console.log(error);
      }
    } 
  
    useEffect(() => {
        getIngredientMeals(id)
    }, [id]);
  
    return (
      <>
        <div className="row">
          {apiData?.map((ele, index) => (
            <Link  to={`/recipe/${ele.strMeal}`} key={index} className='col-sm-12 col-md-6 col-lg-4 col-xl-3 my-3'>
            <Card key={index} ele={ele} />
            </Link>
          ))}
        </div>
      </>)}


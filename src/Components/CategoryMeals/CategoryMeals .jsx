import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from "../Card/Card.jsx";
import { Link, useParams } from "react-router-dom";

export default function CategoryMeals() {
    const [apiData, setApiData] = useState([]);
    const {id} = useParams()


    async function getCategoryMeals(categoryId) {
      try {
        let { data } = await axios.get(
          import.meta.env.VITE_API_LINK_GET_MEAL_DETAILS +categoryId
        );
        setApiData(data.meals);
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
        getCategoryMeals(id)
    }, [id]);
  
    return (
      <>
      
      <h2>{id} recipes</h2>
        <div className="row">
          {apiData?.map((ele, index) => (
            <Link  key={index} to={`/recipe/${ele.strMeal}`} className='col-sm-12 col-md-6 col-lg-4 col-xl-3 my-3'>
            <Card ele={ele} />
            </Link>
          ))}
        </div>
      </>)}


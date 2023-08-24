import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function MealInfo() {
  let { id } = useParams();
  console.log(id);

  const [mealData, setMealData] = useState([]);
  async function getInfo() {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`
    );
    console.log(data.meals);
    setMealData(data.meals);
  }
  useEffect(() => {
    getInfo()
  }, []);
  return (
    <>
      <div className="row">
        {mealData.map((ele, index) => (
          <>
            <div className="col-md-4" key={index}>
              <div className=" rounded-4">
                <div className=" ottar">
                  <img src={ele.strMealThumb} className="w-75 my-3 rounded-2" />

                  <h1> {ele.strMeal} </h1>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <h2>Instructions</h2>
              <p> {ele.strInstructions}</p>
              <div>
                <span className="h2">Area :</span>
                <span className="h4"> {ele.strArea}</span>
              </div>
              <div>
                <span className="h2">Category :</span>
                <span className="h4"> {ele.strCategory}</span>
              </div>
              <h2>Recipes :</h2>
              <ul className="list-unstyled d-flex g-3 flex-wrap">
                <li className="alert alert-info m-2 p-1">
                  {" "}
                  {ele.strMeasure1} {ele.strIngredient1}{" "}
                </li>
                <li className="alert alert-info m-2 p-1">
                  {" "}
                  {ele.strMeasure2} {ele.strIngredient2}{" "}
                </li>
                <li className="alert alert-info m-2 p-1">
                  {" "}
                  {ele.strMeasure3} {ele.strIngredient3}{" "}
                </li>
                <li className="alert alert-info m-2 p-1">
                  {" "}
                  {ele.strMeasure4} {ele.strIngredient4}{" "}
                </li>
                <li className="alert alert-info m-2 p-1">
                  {" "}
                  {ele.strMeasure5} {ele.strIngredient5}{" "}
                </li>
                <li className="alert alert-info m-2 p-1">
                  {" "}
                  {ele.strMeasure6} {ele.strIngredient6}{" "}
                </li>
                <li className="alert alert-info m-2 p-1">
                  {" "}
                  {ele.strMeasure7} {ele.strIngredient7}
                </li>
                <li className="alert alert-info m-2 p-1">
                  
                  {ele.strMeasure8} {ele.strIngredient8}
                </li>
              </ul>
              <h2>Tags :</h2>
              <ul className="list-unstyled d-flex g-3 flex-wrap">
                <li className="alert alert-danger my-2 p-1"> {ele.strTags} </li>
              </ul>
              <a href= {ele.strSource} className="btn btn-success me-3">
                Source
              </a>
              <a href={ele.strYoutube} className="btn btn-danger me-3">
                Youtube
              </a>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

{
  /* <div className="col-md-4">
<div className=" rounded-4">

    <div className=" ottar">
        <img src={mealData.strMealThumb} className="w-75 my-3" />

            <h1 > {mealData.strMeal}  </h1>
    </div>
</div>
</div>
<div className="col-md-8">
<h2>Instructions
</h2>
<p>   {mealData.strInstructions}</p>
<div>
    <span className="h2">Area :</span>
    <span className="h4"> {mealData.strArea}</span>
</div>
<div>
    <span className="h2">Category :</span>
    <span className="h4"> {mealData.strCategory}</span>
</div>
<h2>Recipes  :</h2>
<ul className="list-unstyled d-flex g-3 flex-wrap">
    <li className="alert alert-info m-2 p-1"> {mealData.strMeasure1}  {mealData.strIngredient1} </li>
    <li className="alert alert-info m-2 p-1"> {mealData.strMeasure2}  {mealData.strIngredient2} </li>
    <li className="alert alert-info m-2 p-1"> {mealData.strMeasure3}  {mealData.strIngredient3} </li>
    <li className="alert alert-info m-2 p-1"> {mealData.strMeasure4}  {mealData.strIngredient4} </li>
    <li className="alert alert-info m-2 p-1"> {mealData.strMeasure5}  {mealData.strIngredient5} </li>
    <li className="alert alert-info m-2 p-1"> {mealData.strMeasure6}  {mealData.strIngredient6} </li>
    <li className="alert alert-info m-2 p-1"> {mealData.strMeasure7}  {mealData.strIngredient7} </li>
    <li className="alert alert-info m-2 p-1"> {mealData.strMeasure8}  {mealData.strIngredient8} </li>
  

</ul>
<h2>Tags :</h2>
<ul className="list-unstyled d-flex g-3 flex-wrap">
    <li className="alert alert-danger m-2 p-1"> {mealData.strTags} </li>
</ul>
<a href=" {mealData.strSource}" className="btn btn-success">Source</a>
<a href=" {mealData.strYoutube}" className="btn btn-danger">Youtube</a>
</div>  */
}

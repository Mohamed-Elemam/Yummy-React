import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Ingredients() {
 
  const [apiData, setApiData] = useState([]);
  
  async function getIngredient() {
    try {
      let { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/list.php?i=list
        `
      );
      console.log(data);
      
      setApiData(data.meals);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getIngredient();
  }, []);

  return (
  


    <>

<div className="row">

 {apiData.map((ele , index )=>( 

   <div key = {index} style={{overflow:"hidden", cursor:"pointer"}} className="col-sm-12 col-md-6 col-lg-4 col-xl-3  my-2 text-center" onclick='chooseIngredient("${result.meals[i].strIngredient}")'>
   <Link to={`/ingredients/${ele.strIngredient}`}>
    <div className="county"> 
    <i className="fas fa-drumstick-bite"  ></i>
    <p >{ele.strIngredient}</p>
    <p  >{ele?.strDescription?.split(' ').slice(0,25).join(' ')}</p>
    </div>
    </Link>
    </div>
    
    ))} 
    </div>

      
    
    </>
  )
}

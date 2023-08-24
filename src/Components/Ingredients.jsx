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


 {apiData.map((ele , index )=>( 

   <div key = {index} style={{overflow:"hidden", cursor:"pointer"}} className="col-sm-12 col-md-6 col-lg-4 col-xl-3  my-2 text-center" onclick='chooseIngredient("${result.meals[i].strIngredient}")'>
   <Link >
    <div className="county"> 
    <i className="fas fa-drumstick-bite"  ></i>
    {/* style="font-size:64px" */}
    <p >{ele.strIngredient}</p>
    {/* style={{font-size:"24.784px",font-weight:"500"}} */}
    <p  >{ele.strDescription}</p>
    {/* style={{max-height:"50px",font-weight:"500",font-size:"18px",overflow:"hidden"}} */}
    </div>
    </Link>
    </div>
    

))} 
      
    
    </>
  )
}
